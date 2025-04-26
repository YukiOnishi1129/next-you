"use client";

import type React from "react";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Progress } from "@/shared/components/ui/progress";
import { ArrowRight, CalendarIcon, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ActionPlan type definition
interface ActionPlanTask {
	id: string;
	title: string;
	completed: boolean;
	dueDate: string | null;
	notes: string | null;
}

interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	categoryId: string;
	completed: boolean;
	priority: string;
	color: string;
	tasks: ActionPlanTask[];
	progress: number;
	userId: string;
	createdAt: string;
	updatedAt: string;
}

interface ActionPlanListProps {
	actionPlans: ActionPlan[];
	onToggleCompletion?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export function ActionPlanList({
	actionPlans,
	onToggleCompletion,
	onDelete,
}: ActionPlanListProps) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	const getPriorityColor = (priority: string) => {
		switch (priority.toLowerCase()) {
			case "high":
				return "bg-red-500/10 text-red-500 border-red-500/20";
			case "medium":
				return "bg-amber-500/10 text-amber-500 border-amber-500/20";
			case "low":
				return "bg-green-500/10 text-green-500 border-green-500/20";
			default:
				return "bg-blue-500/10 text-blue-500 border-blue-500/20";
		}
	};

	const handleToggleCompletion = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		e.stopPropagation();
		if (onToggleCompletion) {
			onToggleCompletion(id);
		}
	};

	const handleDelete = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		e.stopPropagation();
		if (onDelete) {
			onDelete(id);
		}
	};

	if (actionPlans.length === 0) {
		return (
			<div className="text-center p-8 border border-dashed rounded-lg">
				<p className="text-muted-foreground">No action plans found</p>
				<Button asChild className="mt-4">
					<Link href="/dashboard/action-plans/new">Create New Action Plan</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-3">
			{actionPlans.map((plan) => (
				<Card
					key={plan.id}
					className={`p-0 overflow-hidden ${plan.completed ? "border-green-500/20 bg-green-500/5" : ""}`}
					onMouseEnter={() => setHoveredId(plan.id)}
					onMouseLeave={() => setHoveredId(null)}
				>
					<Link href={`/dashboard/action-plans/${plan.id}`} className="block">
						<div className="flex flex-col sm:flex-row items-start">
							<div
								className="w-full sm:w-1 h-2 sm:h-full"
								style={{ backgroundColor: plan.color }}
							/>
							<div className="p-4 flex-1">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div className="flex items-center gap-2">
										<Checkbox
											checked={plan.completed}
											onClick={(e) => handleToggleCompletion(e, plan.id)}
										/>
										<div>
											<h3
												className={`text-lg font-medium line-clamp-1 ${plan.completed ? "line-through text-muted-foreground" : ""}`}
											>
												{plan.title}
											</h3>
											<p className="text-sm text-muted-foreground line-clamp-1">
												{plan.description}
											</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2">
										<Badge variant="outline" className="border-gray-700">
											{plan.category}
										</Badge>
										<Badge className={getPriorityColor(plan.priority)}>
											{plan.priority}
										</Badge>
										<div className="flex items-center text-xs text-muted-foreground">
											<CalendarIcon className="mr-1 h-3 w-3" />
											<span>{new Date(plan.dueDate).toLocaleDateString()}</span>
										</div>

										{hoveredId === plan.id && (
											<div className="flex items-center gap-1">
												<Button
													variant="ghost"
													size="icon"
													className="h-8 w-8"
													onClick={(e) => handleDelete(e, plan.id)}
												>
													<Trash2 className="h-4 w-4 text-red-500" />
												</Button>
												<Button
													variant="ghost"
													size="icon"
													className="h-8 w-8"
													asChild
												>
													<Link
														href={`/dashboard/action-plans/${plan.id}/edit`}
													>
														<Edit className="h-4 w-4" />
													</Link>
												</Button>
											</div>
										)}

										<ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
									</div>
								</div>

								{/* Progress bar */}
								<div className="mt-2">
									<div className="flex justify-between items-center text-xs mb-1">
										<span className="text-muted-foreground">Progress</span>
										<span className="font-medium">{plan.progress}%</span>
									</div>
									<Progress value={plan.progress} className="h-1.5" />
								</div>
							</div>
						</div>
					</Link>
				</Card>
			))}
		</div>
	);
}
