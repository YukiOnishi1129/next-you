import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Basic Features | Next You Help Center",
	description:
		"Learn about the core features of Next You and how to use them effectively.",
};

export default function BasicFeaturesPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-4xl py-10">
				<Link
					href="/help"
					className="mb-6 flex items-center text-sm text-muted-foreground hover:text-primary"
				>
					<ArrowLeft className="mr-1 h-4 w-4" />
					Back to Help Center
				</Link>

				<h1 className="mb-6 text-3xl font-bold">Using Basic Features</h1>

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
					<ol>
						<li>Navigate to the Analyses section</li>
						<li>Click "New Analysis"</li>
						<li>Upload a conversation file or paste text</li>
						<li>Select analysis options (depth, focus areas, etc.)</li>
						<li>Click "Start Analysis"</li>
					</ol>

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

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">Analysis Types</h3>
						<p className="mb-0">
							Next You offers different types of analyses depending on your
							goals:
							<br />• <strong>Quick Analysis</strong>: Fast overview of main
							topics
							<br />• <strong>Deep Analysis</strong>: Comprehensive exploration
							of patterns and connections
							<br />• <strong>Focused Analysis</strong>: Targeted analysis on
							specific areas of interest
							<br />• <strong>Comparative Analysis</strong>: Compare patterns
							across different time periods
						</p>
					</div>

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
					<ol>
						<li>Go to the Categories section</li>
						<li>Click "New Category"</li>
						<li>Name your category and add a description</li>
						<li>Select related topics or manually add content</li>
						<li>Save your custom category</li>
					</ol>

					<h2>Action Plans</h2>
					<p>Turn insights into concrete steps with action plans:</p>
					<h3>Creating an Action Plan</h3>
					<ol>
						<li>Navigate to Action Plans</li>
						<li>Click "New Action Plan"</li>
						<li>Select a category or topic focus</li>
						<li>Define your goals and timeline</li>
						<li>Add specific tasks and milestones</li>
						<li>Set reminders and tracking preferences</li>
					</ol>

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
							<Link
								href="/help/analysis-types"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Analysis Types Guide
							</Link>
							<Link
								href="/help/mind-map"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Mind Map Guide
							</Link>
							<Link
								href="/help/action-plan-creation"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Action Plan Guide
							</Link>
						</div>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
