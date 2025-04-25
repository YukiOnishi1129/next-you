import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowLeft, Calendar, Clock, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ActionPlanDetailPage({
	params,
}: { params: { id: string } }) {
	// Update the sample data to English
	const actionPlan = {
		id: params.id,
		title: "Complete Next.js Tutorial",
		description:
			"Work through the official documentation tutorial to understand the basic usage. Focus particularly on the App Router concept and how to use server components. Also deepen understanding of data fetching methods and routing mechanisms.",
		dueDate: "2024-04-25",
		createdDate: "2024-04-10",
		category: "Programming",
		completed: false,
		priority: "Medium",
		notes:
			"Official documentation URL is https://nextjs.org/docs. After completing the tutorial, create a small project to confirm understanding.",
		relatedAnalysis: {
			id: "1",
			date: "April 18, 2024",
		},
		steps: [
			{ id: "1", title: "Set up environment", completed: true },
			{ id: "2", title: "Create basic pages", completed: true },
			{ id: "3", title: "Understand routing", completed: false },
			{ id: "4", title: "Data fetching", completed: false },
			{ id: "5", title: "Deployment", completed: false },
		],
	};

	// 優先度に応じたバッジの色を設定
	const priorityColor =
		{
			高: "text-red-500 border-red-500",
			中: "text-amber-500 border-amber-500",
			低: "text-blue-500 border-blue-500",
		}[actionPlan.priority] || "";

	// Update UI text to English
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/action-plans">
						<ArrowLeft className="h-4 w-4" />
						Back to Action Plans
					</Link>
				</Button>
			</div>

			<PageHeader
				heading={actionPlan.title}
				description={`Category: ${actionPlan.category}`}
				action={
					<div className="flex space-x-2">
						<Button variant="outline" size="sm">
							<Edit className="mr-2 h-4 w-4" />
							Edit
						</Button>
						<Button variant="destructive" size="sm">
							<Trash2 className="mr-2 h-4 w-4" />
							Delete
						</Button>
					</div>
				}
			/>

			<div className="grid gap-6 md:grid-cols-2">
				<div className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Details</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<Checkbox id="completed" checked={actionPlan.completed} />
									<label
										htmlFor="completed"
										className={`font-medium ${actionPlan.completed ? "line-through text-muted-foreground" : ""}`}
									>
										Completion Status
									</label>
								</div>
								<Badge variant="outline" className={priorityColor}>
									Priority: {actionPlan.priority}
								</Badge>
							</div>

							<div className="space-y-2">
								<h3 className="text-sm font-medium">Description</h3>
								<p className="text-sm text-muted-foreground">
									{actionPlan.description}
								</p>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-1">
									<h3 className="text-sm font-medium">Due Date</h3>
									<div className="flex items-center text-sm text-muted-foreground">
										<Calendar className="mr-2 h-4 w-4" />
										{actionPlan.dueDate}
									</div>
								</div>
								<div className="space-y-1">
									<h3 className="text-sm font-medium">Created Date</h3>
									<div className="flex items-center text-sm text-muted-foreground">
										<Clock className="mr-2 h-4 w-4" />
										{actionPlan.createdDate}
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<h3 className="text-sm font-medium">Related Analysis</h3>
								<Button variant="link" className="px-0" asChild>
									<Link
										href={`/dashboard/analyses/${actionPlan.relatedAnalysis.id}`}
									>
										Analysis from {actionPlan.relatedAnalysis.date}
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Notes</CardTitle>
						</CardHeader>
						<CardContent>
							<Textarea
								className="min-h-[150px]"
								placeholder="Enter notes..."
								defaultValue={actionPlan.notes}
							/>
							<Button className="mt-4">Save Notes</Button>
						</CardContent>
					</Card>
				</div>

				<div className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Steps</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{actionPlan.steps.map((step) => (
									<div key={step.id} className="flex items-start space-x-2">
										<Checkbox
											id={`step-${step.id}`}
											checked={step.completed}
											className="mt-1"
										/>
										<div className="space-y-1">
											<label
												htmlFor={`step-${step.id}`}
												className={`font-medium ${step.completed ? "line-through text-muted-foreground" : ""}`}
											>
												{step.title}
											</label>
										</div>
									</div>
								))}
								<Button variant="outline" className="w-full mt-2">
									<Edit className="mr-2 h-4 w-4" />
									Edit Steps
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Progress</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Completed Steps</span>
									<span>
										{actionPlan.steps.filter((step) => step.completed).length}/
										{actionPlan.steps.length}
									</span>
								</div>
								<div className="h-2 bg-muted rounded-full overflow-hidden">
									<div
										className="h-full bg-primary rounded-full"
										style={{
											width: `${
												(actionPlan.steps.filter((step) => step.completed)
													.length /
													actionPlan.steps.length) *
												100
											}%`,
										}}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</DashboardShell>
	);
}
