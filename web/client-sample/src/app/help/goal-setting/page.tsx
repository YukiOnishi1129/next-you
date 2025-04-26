import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";

import { CheckCircle, Flag, Target, TrendingUp } from "lucide-react";

export default function GoalSettingPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Goal Setting Best Practices"
				description="Learn how to set meaningful, achievable goals that drive personal growth."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							The SMART Goal Framework
						</h2>
						<p className="mb-4">
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
										Set a clear timeframe for achieving your goal with deadlines
										for major milestones.
									</p>
								</div>
							</div>
						</div>

						<HelpTip>
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
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Setting Different Types of Goals
						</h2>
						<p className="mb-4">
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
									Focus on consistent actions and habits. Example: "Read for 30
									minutes every day."
								</p>
							</div>

							<div className="border rounded-lg p-4">
								<div className="flex items-center mb-2">
									<Flag className="h-5 w-5 text-primary mr-2" />
									<h3 className="font-medium">Milestone Goals</h3>
								</div>
								<p className="text-sm text-muted-foreground">
									Break larger goals into manageable chunks. Example: "Complete
									chapters 1-3 of certification course by month end."
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Common Goal Setting Pitfalls
						</h2>
						<div className="space-y-4">
							<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
								<h3 className="font-medium">Setting too many goals at once</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Focus on 2-3 significant goals at a time to avoid spreading
									yourself too thin. Next You allows you to prioritize your
									action plans.
								</p>
							</div>

							<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
								<h3 className="font-medium">Setting goals without a plan</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Every goal needs a concrete action plan. Use Next You's action
									plan templates to break down your goals into actionable steps.
								</p>
							</div>

							<div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
								<h3 className="font-medium">Not tracking progress</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Regular progress tracking increases motivation and allows for
									course correction. Use Next You's tracking features to monitor
									your advancement.
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
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Adjusting Goals Over Time
						</h2>
						<p className="mb-4">
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
								When you've consistently missed milestones despite best efforts
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

						<HelpTip>
							<h4 className="font-medium mb-2">Remember</h4>
							<p className="text-sm">
								Adjusting goals is not the same as giving up. It's a strategic
								decision to ensure your goals remain relevant, motivating, and
								achievable.
							</p>
						</HelpTip>
					</section>

					<HelpRelatedArticles
						articles={[
							{
								title: "Creating Effective Action Plans",
								href: "/help/action-plan-creation",
							},
							{
								title: "Tracking Your Progress",
								href: "/help/progress-tracking",
							},
							{
								title: "Interpreting Analysis Results",
								href: "/help/data-interpretation",
							},
							{ title: "Using Mind Maps", href: "/help/mind-map" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
