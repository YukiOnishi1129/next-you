import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft, CheckCircle, Clock, LineChart, Target } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

export const metadata: Metadata = {
	title: "Tracking Your Progress | Next You Help Center",
	description:
		"Learn how to effectively track your progress and achieve your goals with Next You's progress tracking features.",
};

export default function ProgressTrackingPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-4xl py-10">
				<div className="mb-8">
					<Link
						href="/help"
						className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Help Center
					</Link>
					<h1 className="text-4xl font-bold mb-2">Tracking Your Progress</h1>
					<p className="text-xl text-muted-foreground">
						Learn how to effectively monitor and track your progress toward your
						goals.
					</p>
				</div>

				<div className="space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>Understanding Progress Tracking</CardTitle>
							<CardDescription>
								Next You provides powerful tools to visualize and track your
								progress over time.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Progress tracking is essential for staying motivated and
								achieving your goals. Next You offers multiple ways to track
								your progress:
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="flex items-start space-x-3">
									<div className="mt-0.5">
										<LineChart className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Progress Charts</h3>
										<p className="text-sm text-muted-foreground">
											Visual representations of your progress over time, showing
											trends and patterns.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Task Completion</h3>
										<p className="text-sm text-muted-foreground">
											Track individual tasks within your action plans to see
											overall completion rates.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5">
										<Target className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Goal Milestones</h3>
										<p className="text-sm text-muted-foreground">
											Break down large goals into achievable milestones to track
											incremental progress.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5">
										<Clock className="h-5 w-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium">Time-based Tracking</h3>
										<p className="text-sm text-muted-foreground">
											Monitor progress against deadlines and time-based goals.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>How to Update Your Progress</CardTitle>
							<CardDescription>
								Keeping your progress up-to-date is simple with Next You.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<h3 className="font-medium">Updating Task Status</h3>
							<ol className="list-decimal list-inside space-y-2 ml-4">
								<li>Navigate to your Action Plan from the dashboard</li>
								<li>Find the task you want to update</li>
								<li>
									Click the checkbox next to the task to mark it as complete
								</li>
								<li>
									For partial progress, click on the task to open the detail
									view
								</li>
								<li>
									Use the progress slider to indicate percentage completion
								</li>
								<li>Add notes about your progress if needed</li>
								<li>Click "Save" to update your progress</li>
							</ol>

							<div className="my-6 p-4 bg-muted rounded-lg">
								<h4 className="font-medium mb-2">Pro Tip</h4>
								<p className="text-sm">
									Set a regular schedule for updating your progress, such as
									daily or weekly. Consistent tracking leads to better outcomes
									and helps you stay accountable.
								</p>
							</div>

							<h3 className="font-medium mt-6">Progress Visualization</h3>
							<p>
								Next You automatically generates progress charts based on your
								task completions. To view these visualizations:
							</p>
							<ol className="list-decimal list-inside space-y-2 ml-4">
								<li>Go to your Action Plan</li>
								<li>Click the "Progress" tab</li>
								<li>View your progress over time in the chart</li>
								<li>
									Toggle between different visualization types using the options
									above the chart
								</li>
							</ol>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Interpreting Your Progress Data</CardTitle>
							<CardDescription>
								Understanding what your progress metrics mean and how to use
								them.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<h3 className="font-medium">Progress Percentage</h3>
							<p>
								The overall progress percentage represents the weighted
								completion of all tasks in your action plan. Tasks can be
								weighted differently based on their importance or complexity.
							</p>

							<h3 className="font-medium mt-4">Progress Trends</h3>
							<p>The slope of your progress chart indicates your pace:</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Steep upward slope: Rapid progress</li>
								<li>Gradual upward slope: Steady progress</li>
								<li>Flat line: Stalled progress</li>
								<li>
									Downward slope: Regression (can occur if tasks are added or
									deadlines are missed)
								</li>
							</ul>

							<h3 className="font-medium mt-4">Identifying Patterns</h3>
							<p>Look for patterns in your progress data:</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									Weekly cycles: Do you make more progress on certain days?
								</li>
								<li>Plateaus: Are there periods where progress stalls?</li>
								<li>
									Bursts: Do you tend to make progress in concentrated bursts?
								</li>
							</ul>
							<p className="mt-2">
								Understanding these patterns can help you optimize your approach
								and schedule.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Troubleshooting Progress Tracking</CardTitle>
							<CardDescription>
								Solutions for common progress tracking issues.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-4">
								<div>
									<h3 className="font-medium">Progress not updating</h3>
									<p className="text-sm text-muted-foreground">
										If your progress isn't updating after marking tasks
										complete, try refreshing the page. If the issue persists,
										ensure you've clicked "Save" after making changes.
									</p>
								</div>
								<div>
									<h3 className="font-medium">
										Progress percentage seems incorrect
									</h3>
									<p className="text-sm text-muted-foreground">
										Remember that tasks may be weighted differently. Check the
										task weights by clicking on the task details. You can adjust
										weights in the task settings.
									</p>
								</div>
								<div>
									<h3 className="font-medium">Charts not displaying</h3>
									<p className="text-sm text-muted-foreground">
										Ensure you have at least two progress data points (updates
										on different days) for charts to display properly. If charts
										still don't appear, try using a different browser.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="bg-muted p-6 rounded-lg">
						<h2 className="text-xl font-semibold mb-4">
							Related Help Articles
						</h2>
						<div className="grid gap-3 md:grid-cols-2">
							<Link
								href="/help/action-plan-creation"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Creating Effective Action Plans</h3>
								<p className="text-sm text-muted-foreground">
									Learn how to create action plans that drive results.
								</p>
							</Link>
							<Link
								href="/help/goal-setting"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Goal Setting Best Practices</h3>
								<p className="text-sm text-muted-foreground">
									Tips for setting achievable and meaningful goals.
								</p>
							</Link>
							<Link
								href="/help/data-interpretation"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Interpreting Analysis Results</h3>
								<p className="text-sm text-muted-foreground">
									How to understand and act on your analysis data.
								</p>
							</Link>
							<Link
								href="/help/basic-features"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Using Basic Features</h3>
								<p className="text-sm text-muted-foreground">
									Get familiar with Next You's core functionality.
								</p>
							</Link>
						</div>
					</div>

					<div className="text-center py-6">
						<h2 className="text-xl font-semibold mb-4">Still need help?</h2>
						<p className="mb-4 text-muted-foreground">
							Our support team is ready to assist you with any questions about
							progress tracking.
						</p>
						<Button asChild>
							<Link href="/contact">Contact Support</Link>
						</Button>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
