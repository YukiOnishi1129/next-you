import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Using Mind Maps | Next You Help Center",
	description:
		"Learn how to use and interpret mind maps in Next You to gain deeper insights.",
};

export default function MindMapPage() {
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

				<h1 className="mb-6 text-3xl font-bold">Using Mind Maps</h1>

				<div className="prose prose-slate max-w-none dark:prose-invert">
					<p className="lead">
						Mind maps are powerful visual tools that help you understand
						connections between your interests, ideas, and patterns. This guide
						explains how to use and interpret mind maps in Next You.
					</p>

					<h2>Understanding Mind Maps</h2>
					<p>
						In Next You, mind maps visualize the relationships between topics
						identified in your conversations:
					</p>
					<ul>
						<li>
							<strong>Nodes</strong>: Represent topics, interests, or concepts
						</li>
						<li>
							<strong>Connections</strong>: Show relationships between nodes
						</li>
						<li>
							<strong>Node Size</strong>: Indicates the prominence or frequency
							of a topic
						</li>
						<li>
							<strong>Node Color</strong>: Represents categories or sentiment
						</li>
						<li>
							<strong>Connection Thickness</strong>: Shows the strength of
							relationships
						</li>
					</ul>

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">Mind Map Example</h3>
						<p className="mb-0">
							A central node might represent "Programming" with connected nodes
							for "JavaScript," "Python," and "Web Development." The thickness
							of connections shows how strongly these topics relate in your
							conversations.
						</p>
					</div>

					<h2>Navigating Your Mind Map</h2>
					<p>
						Mind maps in Next You are interactive. Here's how to navigate them:
					</p>
					<ul>
						<li>
							<strong>Zoom</strong>: Use the scroll wheel or pinch gesture to
							zoom in/out
						</li>
						<li>
							<strong>Pan</strong>: Click and drag to move around the map
						</li>
						<li>
							<strong>Select Nodes</strong>: Click on a node to see details and
							related information
						</li>
						<li>
							<strong>Expand/Collapse</strong>: Double-click nodes to expand or
							collapse their connections
						</li>
						<li>
							<strong>Reset View</strong>: Use the reset button to return to the
							default view
						</li>
					</ul>

					<h2>Mind Map Controls and Features</h2>
					<p>
						Next You provides several controls to customize your mind map view:
					</p>
					<h3>Filtering Options</h3>
					<ul>
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

					<h3>Display Options</h3>
					<ul>
						<li>
							<strong>Layout Style</strong>: Choose between radial,
							force-directed, or hierarchical layouts
						</li>
						<li>
							<strong>Color Scheme</strong>: Select different color schemes
							based on categories, sentiment, or time
						</li>
						<li>
							<strong>Label Visibility</strong>: Adjust when and how node labels
							appear
						</li>
						<li>
							<strong>Connection Style</strong>: Change how connections are
							displayed
						</li>
					</ul>

					<h2>Interpreting Your Mind Map</h2>
					<p>
						Mind maps reveal insights about your interests and thought patterns:
					</p>
					<h3>Central Nodes</h3>
					<p>
						Nodes with many connections represent central themes in your
						thinking. These are topics that connect to many other areas of
						interest.
					</p>

					<h3>Clusters</h3>
					<p>
						Groups of closely connected nodes indicate related interests or
						areas of focus. Identifying clusters helps you understand your main
						interest areas.
					</p>

					<h3>Bridges</h3>
					<p>
						Nodes that connect otherwise separate clusters are "bridges" between
						different interest areas. These often represent interdisciplinary
						interests or connecting concepts.
					</p>

					<h3>Isolated Nodes</h3>
					<p>
						Nodes with few connections may represent emerging interests,
						one-time mentions, or topics that aren't yet integrated into your
						broader thinking.
					</p>

					<h2>Using Mind Maps for Personal Growth</h2>
					<p>Mind maps can guide your personal development in several ways:</p>
					<ul>
						<li>
							<strong>Identify Focus Areas</strong>: Central nodes and dense
							clusters show where you're already investing attention
						</li>
						<li>
							<strong>Discover Connections</strong>: See how different interests
							relate to help integrate your knowledge
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

					<h2>Creating Action Plans from Mind Maps</h2>
					<p>Turn mind map insights into concrete actions:</p>
					<ol>
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

					<h2>Sharing and Exporting Mind Maps</h2>
					<p>You can share your insights with others:</p>
					<ul>
						<li>
							<strong>Export as Image</strong>: Save your mind map as PNG or SVG
						</li>
						<li>
							<strong>Export as PDF</strong>: Create a document with your mind
							map and key insights
						</li>
						<li>
							<strong>Share Link</strong>: Generate a private link to share with
							specific people
						</li>
						<li>
							<strong>Presentation Mode</strong>: Use the full-screen view for
							presentations
						</li>
					</ul>

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">Privacy Note</h3>
						<p className="mb-0">
							When sharing mind maps, you can choose what information is
							included. You can share just the visual structure without
							revealing the specific content of your conversations.
						</p>
					</div>

					<h2>Advanced Mind Map Features</h2>
					<p>Premium users have access to additional mind map features:</p>
					<ul>
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
							<strong>3D Visualization</strong>: Explore your mind map in three
							dimensions for complex maps
						</li>
						<li>
							<strong>AI Insights</strong>: Get AI-powered suggestions for
							connections you might want to develop
						</li>
					</ul>

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
				</div>
			</div>
		</PlainPageShell>
	);
}
