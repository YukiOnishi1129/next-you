import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import Link from "next/link";

export default function MindMapPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Using Mind Maps"
				description="Learn how to use and interpret mind maps in Next You to gain deeper insights."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<p className="lead text-lg">
							Mind maps are powerful visual tools that help you understand
							connections between your interests, ideas, and patterns. This
							guide explains how to use and interpret mind maps in Next You.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Understanding Mind Maps
						</h2>
						<p className="mb-4">
							In Next You, mind maps visualize the relationships between topics
							identified in your conversations:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Nodes</strong>: Represent topics, interests, or concepts
							</li>
							<li>
								<strong>Connections</strong>: Show relationships between nodes
							</li>
							<li>
								<strong>Node Size</strong>: Indicates the prominence or
								frequency of a topic
							</li>
							<li>
								<strong>Node Color</strong>: Represents categories or sentiment
							</li>
							<li>
								<strong>Connection Thickness</strong>: Shows the strength of
								relationships
							</li>
						</ul>

						<HelpTip>
							<h3 className="mb-2 text-lg font-medium">Mind Map Example</h3>
							<p className="mb-0">
								A central node might represent "Programming" with connected
								nodes for "JavaScript," "Python," and "Web Development." The
								thickness of connections shows how strongly these topics relate
								in your conversations.
							</p>
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Navigating Your Mind Map
						</h2>
						<p className="mb-4">
							Mind maps in Next You are interactive. Here's how to navigate
							them:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Zoom</strong>: Use the scroll wheel or pinch gesture to
								zoom in/out
							</li>
							<li>
								<strong>Pan</strong>: Click and drag to move around the map
							</li>
							<li>
								<strong>Select Nodes</strong>: Click on a node to see details
								and related information
							</li>
							<li>
								<strong>Expand/Collapse</strong>: Double-click nodes to expand
								or collapse their connections
							</li>
							<li>
								<strong>Reset View</strong>: Use the reset button to return to
								the default view
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Mind Map Controls and Features
						</h2>
						<p className="mb-4">
							Next You provides several controls to customize your mind map
							view:
						</p>
						<h3 className="text-xl font-medium mb-3">Filtering Options</h3>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Category Filter</strong>: Show only nodes from specific
								categories
							</li>
							<li>
								<strong>Time Period Filter</strong>: View how your mind map has
								evolved over time
							</li>
							<li>
								<strong>Connection Strength</strong>: Filter by connection
								strength to focus on strong or weak relationships
							</li>
							<li>
								<strong>Node Size</strong>: Adjust the minimum node size to show
								only significant topics
							</li>
						</ul>

						<h3 className="text-xl font-medium mb-3 mt-6">Display Options</h3>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Layout Style</strong>: Choose between radial,
								force-directed, or hierarchical layouts
							</li>
							<li>
								<strong>Color Scheme</strong>: Select different color schemes
								based on categories, sentiment, or time
							</li>
							<li>
								<strong>Label Visibility</strong>: Adjust when and how node
								labels appear
							</li>
							<li>
								<strong>Connection Style</strong>: Change how connections are
								displayed
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Interpreting Your Mind Map
						</h2>
						<p className="mb-4">
							Mind maps reveal insights about your interests and thought
							patterns:
						</p>
						<h3 className="text-xl font-medium mb-3">Central Nodes</h3>
						<p className="mb-4">
							Nodes with many connections represent central themes in your
							thinking. These are topics that connect to many other areas of
							interest.
						</p>

						<h3 className="text-xl font-medium mb-3">Clusters</h3>
						<p className="mb-4">
							Groups of closely connected nodes indicate related interests or
							areas of focus. Identifying clusters helps you understand your
							main interest areas.
						</p>

						<h3 className="text-xl font-medium mb-3">Bridges</h3>
						<p className="mb-4">
							Nodes that connect otherwise separate clusters are "bridges"
							between different interest areas. These often represent
							interdisciplinary interests or connecting concepts.
						</p>

						<h3 className="text-xl font-medium mb-3">Isolated Nodes</h3>
						<p className="mb-4">
							Nodes with few connections may represent emerging interests,
							one-time mentions, or topics that aren't yet integrated into your
							broader thinking.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Using Mind Maps for Personal Growth
						</h2>
						<p className="mb-4">
							Mind maps can guide your personal development in several ways:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Identify Focus Areas</strong>: Central nodes and dense
								clusters show where you're already investing attention
							</li>
							<li>
								<strong>Discover Connections</strong>: See how different
								interests relate to help integrate your knowledge
							</li>
							<li>
								<strong>Find Gaps</strong>: Look for missing connections that
								could enhance your understanding
							</li>
							<li>
								<strong>Track Evolution</strong>: Compare mind maps over time to
								see how your interests develop
							</li>
							<li>
								<strong>Generate Ideas</strong>: Use unexpected connections as
								inspiration for new projects or learning paths
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Creating Action Plans from Mind Maps
						</h2>
						<p className="mb-4">
							Turn mind map insights into concrete actions:
						</p>
						<ol className="list-decimal list-inside space-y-2 ml-4">
							<li>Identify a node or cluster you want to develop</li>
							<li>Click on the node and select "Create Action Plan"</li>
							<li>
								Next You will suggest activities based on the selected topic
							</li>
							<li>
								Customize the suggested plan with your own goals and timeline
							</li>
							<li>Save and begin tracking your progress</li>
						</ol>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Sharing and Exporting Mind Maps
						</h2>
						<p className="mb-4">You can share your insights with others:</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Export as Image</strong>: Save your mind map as PNG or
								SVG
							</li>
							<li>
								<strong>Export as PDF</strong>: Create a document with your mind
								map and key insights
							</li>
							<li>
								<strong>Share Link</strong>: Generate a private link to share
								with specific people
							</li>
							<li>
								<strong>Presentation Mode</strong>: Use the full-screen view for
								presentations
							</li>
						</ul>

						<HelpTip>
							<h3 className="mb-2 text-lg font-medium">Privacy Note</h3>
							<p className="mb-0">
								When sharing mind maps, you can choose what information is
								included. You can share just the visual structure without
								revealing the specific content of your conversations.
							</p>
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Advanced Mind Map Features
						</h2>
						<p className="mb-4">
							Premium users have access to additional mind map features:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Custom Node Grouping</strong>: Create your own node
								categories and groupings
							</li>
							<li>
								<strong>Annotation</strong>: Add notes and comments to specific
								nodes or connections
							</li>
							<li>
								<strong>Comparative View</strong>: See how your mind map has
								changed over time with side-by-side comparison
							</li>
							<li>
								<strong>3D Visualization</strong>: Explore your mind map in
								three dimensions for complex maps
							</li>
							<li>
								<strong>AI Insights</strong>: Get AI-powered suggestions for
								connections you might want to develop
							</li>
						</ul>
					</section>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">
							Ready to Explore Further?
						</h3>
						<p className="mb-4">
							Now that you understand mind maps, learn more about other analysis
							features or create your own mind map.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/dashboard/analyses/new"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Create New Mind Map
							</Link>
							<Link
								href="/help/data-interpretation"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Interpreting Results
							</Link>
							<Link
								href="/help/action-plan-creation"
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								Creating Action Plans
							</Link>
						</div>
					</div>

					<HelpRelatedArticles
						articles={[
							{
								title: "Data Interpretation",
								href: "/help/data-interpretation",
							},
							{ title: "Analysis Types", href: "/help/analysis-types" },
							{
								title: "Action Plan Creation",
								href: "/help/action-plan-creation",
							},
							{ title: "Goal Setting", href: "/help/goal-setting" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
