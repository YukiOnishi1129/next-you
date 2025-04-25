import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft, CheckCircle, Flag, Target, TrendingUp } from "lucide-react";
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
	title: "Goal Setting Best Practices | Next You Help Center",
	description:
		"Learn effective goal setting techniques to maximize your personal growth with Next You.",
};

export default function GoalSettingPage() {
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
					<h1 className="text-4xl font-bold mb-2">
						Goal Setting Best Practices
					</h1>
					<p className="text-xl text-muted-foreground">
						Learn how to set meaningful, achievable goals that drive personal
						growth.
					</p>
				</div>

				<div className="space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>The SMART Goal Framework</CardTitle>
							<CardDescription>
								A proven approach to setting effective goals.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Next You recommends using the SMART framework for setting goals
								that are more likely to be achieved:
							</p>
							<div className="grid gap-4 md:grid-cols-2 mt-4">
								<div className="flex items-start space-x-3">
									<div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
										<span className="font-semibold text-primary">S</span>
									</div>
									<div>
										<h3 className="font-medium">Specific</h3>
										<p className="text-sm text-muted-foreground">
											Clearly define what you want to accomplish. Avoid vague
											goals like "get better" in favor of specific outcomes.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
										<span className="font-semibold text-primary">M</span>
									</div>
									<div>
										<h3 className="font-medium">Measurable</h3>
										<p className="text-sm text-muted-foreground">
											Include metrics that allow you to track progress and know
											when you've achieved your goal.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
										<span className="font-semibold text-primary">A</span>
									</div>
									<div>
										<h3 className="font-medium">Achievable</h3>
										<p className="text-sm text-muted-foreground">
											Set goals that are challenging but realistic given your
											resources and constraints.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
										<span className="font-semibold text-primary">R</span>
									</div>
									<div>
										<h3 className="font-medium">Relevant</h3>
										<p className="text-sm text-muted-foreground">
											Ensure your goals align with your broader life objectives
											and personal values.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3 md:col-span-2">
									<div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
										<span className="font-semibold text-primary">T</span>
									</div>
									<div>
										<h3 className="font-medium">Time-bound</h3>
										<p className="text-sm text-muted-foreground">
											Set a clear timeframe for achieving your goal with
											deadlines for major milestones.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-6 p-4 bg-muted rounded-lg">
								<h4 className="font-medium mb-2">Example</h4>
								<p className="text-sm mb-2">
									<span className="font-medium">Poor goal:</span> "Learn a new
									language"
								</p>
								<p className="text-sm">
									<span className="font-medium">SMART goal:</span> "Complete
									beginner-level Spanish course and hold a 5-minute conversation
									by December 31st"
								</p>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Setting Different Types of Goals</CardTitle>
							<CardDescription>
								Balance different goal types for holistic personal growth.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Next You helps you track various types of goals. For balanced
								personal growth, consider setting goals across these categories:
							</p>

							<div className="grid gap-4 md:grid-cols-2 mt-4">
								<div className="border rounded-lg p-4">
									<div className="flex items-center mb-2">
										<TrendingUp className="h-5 w-5 text-primary mr-2" />
										<h3 className="font-medium">Performance Goals</h3>
									</div>
									<p className="text-sm text-muted-foreground">
										Focus on improving specific skills or abilities. Example:
										"Increase typing speed from 60 to 80 WPM."
									</p>
								</div>

								<div className="border rounded-lg p-4">
									<div className="flex items-center mb-2">
										<Target className="h-5 w-5 text-primary mr-2" />
										<h3 className="font-medium">Outcome Goals</h3>
									</div>
									<p className="text-sm text-muted-foreground">
										Focus on specific results or achievements. Example: "Get
										promoted to senior position."
									</p>
								</div>

								<div className="border rounded-lg p-4">
									<div className="flex items-center mb-2">
										<CheckCircle className="h-5 w-5 text-primary mr-2" />
										<h3 className="font-medium">Process Goals</h3>
									</div>
									<p className="text-sm text-muted-foreground">
										Focus on consistent actions and habits. Example: "Read for
										30 minutes every day."
									</p>
								</div>

								<div className="border rounded-lg p-4">
									<div className="flex items-center mb-2">
										<Flag className="h-5 w-5 text-primary mr-2" />
										<h3 className="font-medium">Milestone Goals</h3>
									</div>
									<p className="text-sm text-muted-foreground">
										Break larger goals into manageable chunks. Example:
										"Complete chapters 1-3 of certification course by month
										end."
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Common Goal Setting Pitfalls</CardTitle>
							<CardDescription>
								Avoid these mistakes to increase your chances of success.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
									<h3 className="font-medium">
										Setting too many goals at once
									</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Focus on 2-3 significant goals at a time to avoid spreading
										yourself too thin. Next You allows you to prioritize your
										action plans.
									</p>
								</div>

								<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
									<h3 className="font-medium">Setting goals without a plan</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Every goal needs a concrete action plan. Use Next You's
										action plan templates to break down your goals into
										actionable steps.
									</p>
								</div>

								<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
									<h3 className="font-medium">Not tracking progress</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Regular progress tracking increases motivation and allows
										for course correction. Use Next You's tracking features to
										monitor your advancement.
									</p>
								</div>

								<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
									<h3 className="font-medium">
										Setting goals based on others' expectations
									</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Ensure your goals align with your personal values and
										aspirations. Next You's analysis features help you identify
										what truly matters to you.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Adjusting Goals Over Time</CardTitle>
							<CardDescription>
								Learn when and how to revise your goals.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p>
								Goals aren't set in stone. It's important to periodically review
								and adjust them as circumstances change:
							</p>

							<h3 className="font-medium mt-4">When to Adjust Goals</h3>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									When you've gained new information that impacts feasibility
								</li>
								<li>When external circumstances have significantly changed</li>
								<li>
									When you've consistently missed milestones despite best
									efforts
								</li>
								<li>When your priorities or values have shifted</li>
							</ul>

							<h3 className="font-medium mt-4">
								How to Adjust Goals in Next You
							</h3>
							<ol className="list-decimal list-inside space-y-2 ml-4">
								<li>Navigate to your Action Plan</li>
								<li>Click the "Edit" button in the top right</li>
								<li>
									Modify your goal description, timeline, or tasks as needed
								</li>
								<li>
									Add a note explaining why the goal was adjusted (for your
									records)
								</li>
								<li>Click "Save Changes"</li>
							</ol>

							<div className="mt-6 p-4 bg-muted rounded-lg">
								<h4 className="font-medium mb-2">Remember</h4>
								<p className="text-sm">
									Adjusting goals is not the same as giving up. It's a strategic
									decision to ensure your goals remain relevant, motivating, and
									achievable.
								</p>
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
								href="/help/progress-tracking"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Tracking Your Progress</h3>
								<p className="text-sm text-muted-foreground">
									How to monitor advancement toward your goals.
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
								href="/help/mind-map"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Using Mind Maps</h3>
								<p className="text-sm text-muted-foreground">
									How to use mind maps for goal exploration.
								</p>
							</Link>
						</div>
					</div>

					<div className="text-center py-6">
						<h2 className="text-xl font-semibold mb-4">Still need help?</h2>
						<p className="mb-4 text-muted-foreground">
							Our support team is ready to assist you with any questions about
							goal setting.
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
