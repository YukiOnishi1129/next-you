"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";

import type { ActionPlan } from "@/features/actionPlans/types";

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
					progress: 0,
				};
			}
			acc[plan.category].total += 1;
			if (plan.completed) {
				acc[plan.category].completed += 1;
			}
			acc[plan.category].progress += plan.progress;
			return acc;
		},
		{} as Record<
			string,
			{ total: number; completed: number; color: string; progress: number }
		>,
	);

	// Calculate average progress for each category
	for (const category of Object.keys(categories)) {
		if (categories[category].total > 0) {
			categories[category].progress = Math.round(
				categories[category].progress / categories[category].total,
			);
		}
	}

	// Group by priority
	const priorities = actionPlans.reduce(
		(acc, plan) => {
			if (!acc[plan.priority]) {
				acc[plan.priority] = {
					total: 0,
					completed: 0,
					color: getPriorityColor(plan.priority),
					progress: 0,
				};
			}
			acc[plan.priority].total += 1;
			if (plan.completed) {
				acc[plan.priority].completed += 1;
			}
			acc[plan.priority].progress += plan.progress;
			return acc;
		},
		{} as Record<
			string,
			{ total: number; completed: number; color: string; progress: number }
		>,
	);

	// Calculate average progress for each priority
	for (const priority of Object.keys(priorities)) {
		if (priorities[priority].total > 0) {
			priorities[priority].progress = Math.round(
				priorities[priority].progress / priorities[priority].total,
			);
		}
	}

	// Overall completion rate
	const totalCompleted = actionPlans.filter((plan) => plan.completed).length;
	const totalCompletionRate =
		actionPlans.length > 0
			? Math.round((totalCompleted / actionPlans.length) * 100)
			: 0;

	// Overall average progress
	const totalProgress = actionPlans.reduce(
		(sum, plan) => sum + plan.progress,
		0,
	);
	const averageProgress =
		actionPlans.length > 0 ? Math.round(totalProgress / actionPlans.length) : 0;

	// Time-based metrics
	const now = new Date();
	const overduePlans = actionPlans.filter(
		(plan) => !plan.completed && new Date(plan.dueDate) < now,
	);
	const dueTodayPlans = actionPlans.filter((plan) => {
		const dueDate = new Date(plan.dueDate);
		return (
			!plan.completed &&
			dueDate.getDate() === now.getDate() &&
			dueDate.getMonth() === now.getMonth() &&
			dueDate.getFullYear() === now.getFullYear()
		);
	});
	const dueThisWeekPlans = actionPlans.filter((plan) => {
		const dueDate = new Date(plan.dueDate);
		const weekFromNow = new Date();
		weekFromNow.setDate(now.getDate() + 7);
		return !plan.completed && dueDate > now && dueDate <= weekFromNow;
	});

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<CardHeader>
					<CardTitle>Overall Progress</CardTitle>
					<CardDescription>Completion rate of all action plans</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="font-medium">Completion Rate</span>
								<span className="text-sm text-muted-foreground">
									{totalCompleted}/{actionPlans.length} Completed (
									{totalCompletionRate}%)
								</span>
							</div>
							<Progress value={totalCompletionRate} className="h-2" />
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="font-medium">Average Progress</span>
								<span className="text-sm text-muted-foreground">
									{averageProgress}% Complete
								</span>
							</div>
							<Progress value={averageProgress} className="h-2" />
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Time-Based Metrics</CardTitle>
					<CardDescription>Action plans by due date</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<span className="font-medium text-red-400">Overdue</span>
							<span className="text-sm text-muted-foreground">
								{overduePlans.length} action plans
							</span>
						</div>

						<div className="flex items-center justify-between">
							<span className="font-medium text-amber-400">Due Today</span>
							<span className="text-sm text-muted-foreground">
								{dueTodayPlans.length} action plans
							</span>
						</div>

						<div className="flex items-center justify-between">
							<span className="font-medium text-blue-400">Due This Week</span>
							<span className="text-sm text-muted-foreground">
								{dueThisWeekPlans.length} action plans
							</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Progress by Category</CardTitle>
					<CardDescription>
						Action plan completion rate by category
					</CardDescription>
				</CardHeader>
				<CardContent>
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
											<span className="font-medium">{category}</span>
										</div>
										<span className="text-sm text-muted-foreground">
											{data.completed}/{data.total} Completed ({completionRate}
											%)
										</span>
									</div>
									<Progress value={data.progress} className="h-2" />
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Progress by Priority</CardTitle>
					<CardDescription>
						Action plan completion rate by priority
					</CardDescription>
				</CardHeader>
				<CardContent>
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
											<span className="font-medium">Priority: {priority}</span>
										</div>
										<span className="text-sm text-muted-foreground">
											{data.completed}/{data.total} Completed ({completionRate}
											%)
										</span>
									</div>
									<Progress value={data.progress} className="h-2" />
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

// Return color based on category
function getCategoryColor(category: string): string {
	const colors: Record<string, string> = {
		Programming: "#3b82f6", // blue
		Health: "#22c55e", // green
		Productivity: "#a855f7", // purple
		Reading: "#f59e0b", // amber
		Career: "#ec4899", // pink
		Personal: "#14b8a6", // teal
	};
	return colors[category] || "#6b7280"; // gray as default
}

// Return color based on priority
function getPriorityColor(priority: string): string {
	const colors: Record<string, string> = {
		High: "#ef4444", // red
		Medium: "#f59e0b", // amber
		Low: "#3b82f6", // blue
	};
	return colors[priority] || "#6b7280"; // gray as default
}
