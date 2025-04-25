"use client";

import { ObjectGrid } from "@/shared/components/common/ObjectGrid";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Button } from "@/shared/components/ui/button";

import { ActionPlanCalendar } from "@/features/actionPlans/components/ActionPlanCalendar";
import { ActionPlanList } from "@/features/actionPlans/components/ActionPlanList";
import { ActionPlanProgress } from "@/features/actionPlans/components/ActionPlanProgress";
import { mockActionPlans } from "@/features/actionPlans/data/mockData";
import { Input } from "@/shared/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Grid, List, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function ActionPlansPage() {
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [activeTab, setActiveTab] = useState("list");
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [sortOption, setSortOption] = useState("due-date-asc");
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	// Apply search and filtering
	const filteredActionPlans = mockActionPlans.filter((plan) => {
		// Search filter
		if (
			debouncedSearchTerm &&
			!plan.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
			!plan.description
				.toLowerCase()
				.includes(debouncedSearchTerm.toLowerCase())
		) {
			return false;
		}

		// Status filter
		if (statusFilter === "completed" && !plan.completed) return false;
		if (statusFilter === "incomplete" && plan.completed) return false;
		if (
			statusFilter === "overdue" &&
			(plan.completed || new Date(plan.dueDate) >= new Date())
		)
			return false;

		return true;
	});

	// Apply sorting
	const sortedActionPlans = [...filteredActionPlans].sort((a, b) => {
		switch (sortOption) {
			case "due-date-asc":
				return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
			case "due-date-desc":
				return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
			case "newest":
				return (
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
				);
			case "oldest":
				return (
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
				);
			case "category":
				return a.category.localeCompare(b.category);
			case "priority": {
				const priorityOrder = { High: 0, Medium: 1, Low: 2 };
				return priorityOrder[a.priority] - priorityOrder[b.priority];
			}
			default:
				return 0;
		}
	});

	const handleToggleCompletion = (id: string) => {
		// In a real app, this would call an API
		toast.success("SUCCESS", {
			description: "Action plan status has been updated.",
		});
	};

	const handleDeletePlan = (id: string) => {
		if (confirm("Are you sure you want to delete this action plan?")) {
			// In a real app, this would call an API
			toast.success("SUCCESS", {
				description: "Action plan has been deleted.",
			});
		}
	};

	return (
		<DashboardShell>
			<PageHeader
				heading="Action Plans"
				description="Manage and track progress of suggested action plans"
				action={
					<Button asChild className="bg-rose-500 hover:bg-rose-600">
						<Link href="/dashboard/action-plans/new">
							<Plus className="mr-2 h-4 w-4" />
							Create New Plan
						</Link>
					</Button>
				}
			/>

			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="space-y-4"
			>
				<TabsList className="bg-gray-900">
					<TabsTrigger value="list" className="data-[state=active]:bg-gray-800">
						List View
					</TabsTrigger>
					<TabsTrigger
						value="calendar"
						className="data-[state=active]:bg-gray-800"
					>
						Calendar
					</TabsTrigger>
					<TabsTrigger
						value="progress"
						className="data-[state=active]:bg-gray-800"
					>
						Progress
					</TabsTrigger>
				</TabsList>

				<TabsContent value="list">
					<div className="flex flex-col sm:flex-row gap-4 mb-4">
						<div className="flex-1">
							<Input
								placeholder="Search action plans..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full"
							/>
						</div>

						<div className="flex gap-2">
							<Select value={statusFilter} onValueChange={setStatusFilter}>
								<SelectTrigger className="w-[140px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All</SelectItem>
									<SelectItem value="incomplete">Pending</SelectItem>
									<SelectItem value="completed">Completed</SelectItem>
									<SelectItem value="overdue">Overdue</SelectItem>
								</SelectContent>
							</Select>

							<Select value={sortOption} onValueChange={setSortOption}>
								<SelectTrigger className="w-[140px]">
									<SelectValue placeholder="Sort by" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="due-date-asc">Due Date (Asc)</SelectItem>
									<SelectItem value="due-date-desc">Due Date (Desc)</SelectItem>
									<SelectItem value="newest">Newest First</SelectItem>
									<SelectItem value="oldest">Oldest First</SelectItem>
									<SelectItem value="category">By Category</SelectItem>
									<SelectItem value="priority">By Priority</SelectItem>
								</SelectContent>
							</Select>

							<div className="flex space-x-1 bg-gray-800 p-1 rounded-md">
								<Button
									variant="ghost"
									size="icon"
									className={viewMode === "grid" ? "bg-gray-700" : ""}
									onClick={() => setViewMode("grid")}
								>
									<Grid className="h-4 w-4" />
									<span className="sr-only">Grid view</span>
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className={viewMode === "list" ? "bg-gray-700" : ""}
									onClick={() => setViewMode("list")}
								>
									<List className="h-4 w-4" />
									<span className="sr-only">List view</span>
								</Button>
							</div>
						</div>
					</div>

					{viewMode === "grid" ? (
						<ObjectGrid>
							<div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8 border-gray-700">
								<Button
									variant="outline"
									asChild
									className="h-auto flex flex-col p-8 gap-4 border-gray-700"
								>
									<Link href="/dashboard/action-plans/new">
										<Plus className="h-8 w-8" />
										<span>Create New Plan</span>
									</Link>
								</Button>
							</div>
							{sortedActionPlans.map((plan) => (
								<div
									key={plan.id}
									className="bg-gray-800 rounded-lg p-4 border border-gray-700"
								>
									<div className="flex justify-between items-start mb-2">
										<h3 className="font-medium text-lg">{plan.title}</h3>
										<div
											className={`px-2 py-1 rounded text-xs ${
												plan.priority === "High"
													? "bg-red-500/20 text-red-400"
													: plan.priority === "Medium"
														? "bg-amber-500/20 text-amber-400"
														: "bg-blue-500/20 text-blue-400"
											}`}
										>
											{plan.priority}
										</div>
									</div>
									<p className="text-gray-400 text-sm mb-3 line-clamp-2">
										{plan.description}
									</p>
									<div className="flex justify-between items-center text-xs text-gray-400 mb-3">
										<span>{plan.category}</span>
										<span>
											Due: {new Date(plan.dueDate).toLocaleDateString()}
										</span>
									</div>
									<div className="w-full bg-gray-700 rounded-full h-1.5 mb-3">
										<div
											className="bg-rose-500 h-1.5 rounded-full"
											style={{ width: `${plan.progress}%` }}
										/>
									</div>
									<div className="flex justify-between items-center">
										<span
											className={`text-xs ${plan.completed ? "text-green-400" : "text-gray-400"}`}
										>
											{plan.completed
												? "Completed"
												: `${plan.progress}% Complete`}
										</span>
										<div className="flex gap-2">
											<Button
												variant="ghost"
												size="sm"
												onClick={() => handleToggleCompletion(plan.id)}
											>
												{plan.completed ? "Reopen" : "Complete"}
											</Button>
											<Button variant="ghost" size="sm" asChild>
												<Link href={`/dashboard/action-plans/${plan.id}`}>
													View
												</Link>
											</Button>
										</div>
									</div>
								</div>
							))}
						</ObjectGrid>
					) : (
						<ActionPlanList
							actionPlans={sortedActionPlans}
							onToggleCompletion={handleToggleCompletion}
							onDelete={handleDeletePlan}
						/>
					)}
				</TabsContent>

				<TabsContent value="calendar">
					<ActionPlanCalendar actionPlans={sortedActionPlans} />
				</TabsContent>

				<TabsContent value="progress">
					<ActionPlanProgress actionPlans={sortedActionPlans} />
				</TabsContent>
			</Tabs>
		</DashboardShell>
	);
}
