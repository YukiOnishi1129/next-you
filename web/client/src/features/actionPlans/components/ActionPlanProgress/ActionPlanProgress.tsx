"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";

interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	completed: boolean;
	priority: string;
}

interface ActionPlanProgressProps {
	actionPlans: ActionPlan[];
}

export function ActionPlanProgress({ actionPlans }: ActionPlanProgressProps) {
	// Group by category
	const categories = actionPlans.reduce(
		(acc, plan) => {
			if (!acc[plan.category]) {
				acc[plan.category] = {
					total: 0,
					completed: 0,
					color: getCategoryColor(plan.category),
				};
			}
			acc[plan.category].total += 1;
			if (plan.completed) {
				acc[plan.category].completed += 1;
			}
			return acc;
		},
		{} as Record<string, { total: number; completed: number; color: string }>,
	);

	// Group by priority
	const priorities = actionPlans.reduce(
		(acc, plan) => {
			if (!acc[plan.priority]) {
				acc[plan.priority] = {
					total: 0,
					completed: 0,
					color: getPriorityColor(plan.priority),
				};
			}
			acc[plan.priority].total += 1;
			if (plan.completed) {
				acc[plan.priority].completed += 1;
			}
			return acc;
		},
		{} as Record<string, { total: number; completed: number; color: string }>,
	);

	// Overall completion rate
	const totalCompleted = actionPlans.filter((plan) => plan.completed).length;
	const totalCompletionRate =
		actionPlans.length > 0
			? Math.round((totalCompleted / actionPlans.length) * 100)
			: 0;

	return (
		<div className="space-y-6">
			<Card className="bg-gray-950 border-gray-800 text-white">
				<CardHeader className="border-b border-gray-800">
					<CardTitle>Overall Progress</CardTitle>
					<CardDescription className="text-gray-400">
						Completion rate of all action plans
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="font-medium text-white">Completion Rate</span>
							<span className="text-sm text-gray-400">
								{totalCompleted}/{actionPlans.length} Completed (
								{totalCompletionRate}%)
							</span>
						</div>
						<Progress value={totalCompletionRate} className="h-2 bg-gray-800" />
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gray-950 border-gray-800 text-white">
				<CardHeader className="border-b border-gray-800">
					<CardTitle>Progress by Category</CardTitle>
					<CardDescription className="text-gray-400">
						Action plan completion rate by category
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<div className="space-y-6">
						{Object.entries(categories).map(([category, data]) => {
							const completionRate =
								data.total > 0
									? Math.round((data.completed / data.total) * 100)
									: 0;
							return (
								<div key={category} className="space-y-2">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div
												className="h-4 w-4 rounded-full"
												style={{ backgroundColor: data.color }}
											/>
											<span className="font-medium text-white">{category}</span>
										</div>
										<span className="text-sm text-gray-400">
											{data.completed}/{data.total} Completed ({completionRate}
											%)
										</span>
									</div>
									<Progress
										value={completionRate}
										className="h-2 bg-gray-800"
									/>
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gray-950 border-gray-800 text-white">
				<CardHeader className="border-b border-gray-800">
					<CardTitle>Progress by Priority</CardTitle>
					<CardDescription className="text-gray-400">
						Action plan completion rate by priority
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<div className="space-y-6">
						{Object.entries(priorities).map(([priority, data]) => {
							const completionRate =
								data.total > 0
									? Math.round((data.completed / data.total) * 100)
									: 0;
							return (
								<div key={priority} className="space-y-2">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div
												className="h-4 w-4 rounded-full"
												style={{ backgroundColor: data.color }}
											/>
										</div>
										<span className="text-sm text-gray-400">
											{data.completed}/{data.total} Completed ({completionRate}
											%)
										</span>
									</div>
									<Progress
										value={completionRate}
										className="h-2 bg-gray-800"
									/>
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

// Get category color
function getCategoryColor(category: string): string {
	const colors: Record<string, string> = {
		Programming: "#3b82f6", // blue
		Health: "#22c55e", // green
		Productivity: "#a855f7", // purple
		Reading: "#f59e0b", // amber
		Career: "#ec4899", // pink
		Personal: "#14b8a6", // teal
	};
	return colors[category] || "#6b7280"; // gray
}

// Get priority color
function getPriorityColor(priority: string): string {
	const colors: Record<string, string> = {
		High: "#ef4444", // red
		Medium: "#f59e0b", // amber
		Low: "#3b82f6", // blue
	};
	return colors[priority] || "#6b7280"; // gray
}
