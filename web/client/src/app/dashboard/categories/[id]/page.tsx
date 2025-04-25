import { ActionPlanCard } from "@/features/actionPlans/components/ActionPlanCard";
import { ObjectGrid } from "@/shared/components/common/ObjectGrid";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell/DashboardShell";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import { ArrowLeft, Edit, Plus } from "lucide-react";
import Link from "next/link";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
	const { id } = await params;
	// Update the sample data to English
	const category = {
		id,
		name: "Programming",
		description:
			"Action plans related to improving programming skills and learning new technologies",
		actionPlanCount: 8,
		completedCount: 2,
		actionPlans: [
			{
				id: "1",
				title: "Complete Next.js Tutorial",
				description:
					"Work through the official documentation tutorial to understand the basic usage",
				dueDate: "2024-04-25",
				category: "Programming",
				completed: false,
				priority: "Medium",
			},
			{
				id: "4",
				title: "Learn TypeScript Type System",
				description:
					"Read the official documentation and understand the basic concepts of the type system",
				dueDate: "2024-04-28",
				category: "Programming",
				completed: false,
				priority: "Medium",
			},
			{
				id: "7",
				title: "Deepen Understanding of React Hooks",
				description:
					"Learn advanced hooks like useEffect, useContext, useReducer",
				dueDate: "2024-05-05",
				category: "Programming",
				completed: false,
				priority: "High",
			},
			{
				id: "10",
				title: "Learn TailwindCSS Basics",
				description:
					"Refer to the official documentation to understand basic classes and customization methods",
				dueDate: "2024-05-10",
				category: "Programming",
				completed: true,
				priority: "Low",
			},
			{
				id: "13",
				title: "Learn GraphQL Basics",
				description:
					"Understand the basic concepts of queries, mutations, and subscriptions",
				dueDate: "2024-05-15",
				category: "Programming",
				completed: false,
				priority: "Medium",
			},
			{
				id: "16",
				title: "Learn Docker Basics",
				description:
					"Understand container concepts and how to write Dockerfiles",
				dueDate: "2024-05-20",
				category: "Programming",
				completed: true,
				priority: "Medium",
			},
		],
		relatedCategories: ["Frontend", "Backend", "DevOps"],
	};

	const completionPercentage =
		category.actionPlanCount > 0
			? Math.round((category.completedCount / category.actionPlanCount) * 100)
			: 0;

	// Update UI text to English
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/categories">
						<ArrowLeft className="h-4 w-4" />
						Back to Categories
					</Link>
				</Button>
			</div>

			<PageHeader
				heading={category.name}
				description={category.description}
				action={
					<div className="flex space-x-2">
						<Button variant="outline" size="sm">
							<Edit className="mr-2 h-4 w-4" />
							Edit
						</Button>
						<Button asChild>
							<Link
								href={`/dashboard/action-plans/new?category=${category.id}`}
							>
								<Plus className="mr-2 h-4 w-4" />
								Add Action Plan
							</Link>
						</Button>
					</div>
				}
			/>

			<div className="grid gap-6 md:grid-cols-3 mb-6">
				<Card>
					<CardHeader>
						<CardTitle>Action Plan Count</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{category.actionPlanCount}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Completion Rate</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<div className="text-2xl font-bold">{completionPercentage}%</div>
							<Progress value={completionPercentage} className="h-2" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Related Categories</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-2">
							{category.relatedCategories.map((relatedCategory) => (
								<Button key={relatedCategory} variant="outline" size="sm">
									{relatedCategory}
								</Button>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs defaultValue="all" className="space-y-4">
				<TabsList>
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="incomplete">Pending</TabsTrigger>
					<TabsTrigger value="completed">Completed</TabsTrigger>
				</TabsList>
				<TabsContent value="all" className="space-y-4">
					<ObjectGrid>
						{category.actionPlans.map((plan) => (
							<ActionPlanCard key={plan.id} actionPlan={plan} />
						))}
						<div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
							<Button
								variant="outline"
								asChild
								className="h-auto flex flex-col p-8 gap-4"
							>
								<Link
									href={`/dashboard/action-plans/new?category=${category.id}`}
								>
									<Plus className="h-8 w-8" />
									<span>Create New Plan</span>
								</Link>
							</Button>
						</div>
					</ObjectGrid>
				</TabsContent>
				<TabsContent value="incomplete" className="space-y-4">
					<ObjectGrid>
						{category.actionPlans
							.filter((plan) => !plan.completed)
							.map((plan) => (
								<ActionPlanCard key={plan.id} actionPlan={plan} />
							))}
					</ObjectGrid>
				</TabsContent>
				<TabsContent value="completed" className="space-y-4">
					<ObjectGrid>
						{category.actionPlans
							.filter((plan) => plan.completed)
							.map((plan) => (
								<ActionPlanCard key={plan.id} actionPlan={plan} />
							))}
					</ObjectGrid>
				</TabsContent>
			</Tabs>
		</DashboardShell>
	);
}
