import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function BasicFeaturesPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Using Basic Features"
				description="Learn about the core features of Next You and how to use them effectively."
				lastUpdated="April 25, 2025"
			>
				<div className="prose prose-slate max-w-none dark:prose-invert">
					<p className="lead">
						Next You offers a range of powerful features to help you gain
						insights and drive personal growth. This guide covers the core
						features you'll use regularly.
					</p>

					<h2>Dashboard Overview</h2>
					<p>
						Your dashboard is the central hub for all your Next You activities.
						Here you'll find:
					</p>
					<ul>
						<li>
							<strong>Summary Cards</strong>: Quick overview of your recent
							analyses and progress
						</li>
						<li>
							<strong>Activity Feed</strong>: Timeline of your recent actions
							and insights
						</li>
						<li>
							<strong>Quick Actions</strong>: Shortcuts to common tasks like
							creating a new analysis
						</li>
						<li>
							<strong>Progress Indicators</strong>: Visual representation of
							your action plan progress
						</li>
					</ul>

					<h2>Creating and Managing Analyses</h2>
					<p>Analyses are at the core of the Next You experience:</p>
					<h3>Creating a New Analysis</h3>
					<HelpStepByStep
						steps={[
							"Navigate to the Analyses section",
							"Click 'New Analysis'",
							"Upload a conversation file or paste text",
							"Select analysis options (depth, focus areas, etc.)",
							"Click 'Start Analysis'",
						]}
					/>

					<h3>Viewing Analysis Results</h3>
					<p>
						After an analysis is complete, you can explore the results through:
					</p>
					<ul>
						<li>
							<strong>Mind Maps</strong>: Interactive visualizations of topics
							and connections
						</li>
						<li>
							<strong>Topic Breakdowns</strong>: Detailed exploration of key
							topics
						</li>
						<li>
							<strong>Insight Cards</strong>: Specific observations about your
							patterns and interests
						</li>
						<li>
							<strong>Trend Analysis</strong>: How your interests and focus have
							changed over time
						</li>
					</ul>

					<HelpTip>
						Next You offers different types of analyses depending on your goals:
						<br />• <strong>Quick Analysis</strong>: Fast overview of main
						topics
						<br />• <strong>Deep Analysis</strong>: Comprehensive exploration of
						patterns and connections
						<br />• <strong>Focused Analysis</strong>: Targeted analysis on
						specific areas of interest
						<br />• <strong>Comparative Analysis</strong>: Compare patterns
						across different time periods
					</HelpTip>

					<h2>Working with Categories</h2>
					<p>Categories help organize insights from your analyses:</p>
					<h3>Exploring Categories</h3>
					<ul>
						<li>
							Browse automatically generated categories based on your analyses
						</li>
						<li>See how categories relate to each other</li>
						<li>Track your engagement with different categories over time</li>
					</ul>

					<h3>Creating Custom Categories</h3>
					<HelpStepByStep
						steps={[
							"Go to the Categories section",
							"Click 'New Category'",
							"Name your category and add a description",
							"Select related topics or manually add content",
							"Save your custom category",
						]}
					/>

					<h2>Action Plans</h2>
					<p>Turn insights into concrete steps with action plans:</p>
					<h3>Creating an Action Plan</h3>
					<HelpStepByStep
						steps={[
							"Navigate to Action Plans",
							"Click 'New Action Plan'",
							"Select a category or topic focus",
							"Define your goals and timeline",
							"Add specific tasks and milestones",
							"Set reminders and tracking preferences",
						]}
					/>

					<h3>Tracking Progress</h3>
					<ul>
						<li>Mark tasks as complete</li>
						<li>Update milestone progress</li>
						<li>Add notes and reflections</li>
						<li>View progress statistics and trends</li>
					</ul>

					<h2>Mind Maps</h2>
					<p>
						Mind maps visualize connections between your interests and ideas:
					</p>
					<ul>
						<li>
							<strong>Interactive Navigation</strong>: Click and drag to explore
							connections
						</li>
						<li>
							<strong>Zoom Controls</strong>: Focus on specific areas or see the
							big picture
						</li>
						<li>
							<strong>Filtering Options</strong>: Show only certain types of
							connections
						</li>
						<li>
							<strong>Customization</strong>: Adjust colors, layout, and display
							options
						</li>
					</ul>

					<h2>Search and Filter</h2>
					<p>Quickly find what you're looking for:</p>
					<ul>
						<li>
							<strong>Global Search</strong>: Search across all your data
						</li>
						<li>
							<strong>Advanced Filters</strong>: Narrow results by date, type,
							category, etc.
						</li>
						<li>
							<strong>Saved Searches</strong>: Save common searches for quick
							access
						</li>
						<li>
							<strong>Recent Activity</strong>: Quickly return to recently
							viewed items
						</li>
					</ul>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">
							Ready to Explore Advanced Features?
						</h3>
						<p className="mb-4">
							Now that you understand the basics, check out our guides on more
							advanced features.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								<Link href="/help/analysis-types">Analysis Types Guide</Link>
							</Button>
							<Button
								asChild
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								<Link href="/help/mind-map">Mind Map Guide</Link>
							</Button>
							<Button
								asChild
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								<Link href="/help/action-plan-creation">Action Plan Guide</Link>
							</Button>
						</div>
					</div>
				</div>

				<HelpRelatedArticles
					articles={[
						{ title: "Getting Started", href: "/help/getting-started" },
						{ title: "Analysis Types", href: "/help/analysis-types" },
						{ title: "Mind Map Guide", href: "/help/mind-map" },
						{
							title: "Action Plan Creation",
							href: "/help/action-plan-creation",
						},
					]}
				/>

				<HelpContactSupport />
			</HelpPageLayout>
		</PlainPageShell>
	);
}
