import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import Link from "next/link";

export default function AnalysisTypesPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Types of Analysis"
				description="Learn about the different types of analyses available in Next You and when to use each one."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<p className="lead text-lg">
							Next You offers several types of analyses to help you gain
							different insights from your conversations. Understanding when to
							use each type will help you get the most valuable results.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Quick Analysis</h2>
						<div className="mb-8 rounded-lg border border-border p-6">
							<h3 className="mb-2 text-xl font-semibold">Overview</h3>
							<p className="mb-4">
								Quick Analysis provides a rapid overview of the main topics and
								themes in your conversations. It's designed to give you
								immediate insights without requiring a lot of time.
							</p>

							<h4 className="mt-4 font-medium">Best Used For:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Getting a high-level summary of conversation topics</li>
								<li>Identifying prominent themes quickly</li>
								<li>When you have limited time but want some insights</li>
								<li>
									Preliminary exploration before deciding on deeper analysis
								</li>
							</ul>

							<h4 className="mt-4 font-medium">Processing Time:</h4>
							<p>1-3 minutes depending on conversation length</p>

							<h4 className="mt-4 font-medium">Output Includes:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Top 5-10 topics</li>
								<li>Basic mind map</li>
								<li>Key sentiment indicators</li>
								<li>Suggested action areas</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Deep Analysis</h2>
						<div className="mb-8 rounded-lg border border-border p-6">
							<h3 className="mb-2 text-xl font-semibold">Overview</h3>
							<p className="mb-4">
								Deep Analysis thoroughly examines your conversations to uncover
								subtle patterns, connections, and insights. It provides
								comprehensive results with detailed breakdowns of topics and
								relationships.
							</p>

							<h4 className="mt-4 font-medium">Best Used For:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									Comprehensive understanding of your interests and patterns
								</li>
								<li>Discovering subtle connections between topics</li>
								<li>Identifying underlying themes and motivations</li>
								<li>
									Creating detailed action plans based on thorough insights
								</li>
							</ul>

							<h4 className="mt-4 font-medium">Processing Time:</h4>
							<p>
								5-10 minutes depending on conversation length and complexity
							</p>

							<h4 className="mt-4 font-medium">Output Includes:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Comprehensive topic analysis</li>
								<li>Detailed mind map with multiple connection levels</li>
								<li>Sentiment analysis across topics</li>
								<li>Pattern recognition across conversations</li>
								<li>Personalized insights and recommendations</li>
								<li>Suggested action plans with specific steps</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Focused Analysis</h2>
						<div className="mb-8 rounded-lg border border-border p-6">
							<h3 className="mb-2 text-xl font-semibold">Overview</h3>
							<p className="mb-4">
								Focused Analysis concentrates on specific areas or topics you
								select. It provides detailed insights about particular interests
								rather than a broad overview.
							</p>

							<h4 className="mt-4 font-medium">Best Used For:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Deep-diving into specific topics of interest</li>
								<li>
									Exploring particular aspects of your personality or interests
								</li>
								<li>Following up on insights from previous analyses</li>
								<li>Creating targeted action plans for specific goals</li>
							</ul>

							<h4 className="mt-4 font-medium">Processing Time:</h4>
							<p>3-7 minutes depending on focus area and conversation volume</p>

							<h4 className="mt-4 font-medium">Output Includes:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>In-depth analysis of selected topics</li>
								<li>Sub-topic breakdown</li>
								<li>Related interests and connections</li>
								<li>Targeted recommendations</li>
								<li>Specific action steps for your area of focus</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Comparative Analysis
						</h2>
						<div className="mb-8 rounded-lg border border-border p-6">
							<h3 className="mb-2 text-xl font-semibold">Overview</h3>
							<p className="mb-4">
								Comparative Analysis examines how your interests, focus, and
								patterns have changed over time by comparing conversations from
								different periods.
							</p>

							<h4 className="mt-4 font-medium">Best Used For:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Tracking personal growth and changes</li>
								<li>Identifying evolving interests</li>
								<li>Measuring progress toward goals</li>
								<li>Understanding how life events impact your focus areas</li>
							</ul>

							<h4 className="mt-4 font-medium">Processing Time:</h4>
							<p>7-12 minutes depending on the amount of data being compared</p>

							<h4 className="mt-4 font-medium">Output Includes:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Side-by-side comparison of time periods</li>
								<li>Trend graphs showing changes over time</li>
								<li>New and fading interests</li>
								<li>Consistency analysis</li>
								<li>Growth indicators</li>
								<li>Recommendations based on your evolution</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Thematic Analysis</h2>
						<div className="mb-8 rounded-lg border border-border p-6">
							<h3 className="mb-2 text-xl font-semibold">Overview</h3>
							<p className="mb-4">
								Thematic Analysis identifies recurring themes and patterns
								across all your conversations, helping you understand the
								broader narratives in your life and interests.
							</p>

							<h4 className="mt-4 font-medium">Best Used For:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Discovering overarching themes in your life</li>
								<li>Understanding your core values and motivations</li>
								<li>
									Identifying consistent patterns across different contexts
								</li>
								<li>Creating holistic personal development plans</li>
							</ul>

							<h4 className="mt-4 font-medium">Processing Time:</h4>
							<p>
								8-15 minutes depending on the breadth of conversations analyzed
							</p>

							<h4 className="mt-4 font-medium">Output Includes:</h4>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Core theme identification</li>
								<li>Value and motivation analysis</li>
								<li>Cross-contextual patterns</li>
								<li>Theme-based mind map</li>
								<li>Holistic recommendations</li>
								<li>Long-term development suggestions</li>
							</ul>
						</div>
					</section>

					<HelpTip>
						<h3 className="mb-2 text-lg font-medium">
							Premium Analysis Features
						</h3>
						<p className="mb-0">
							Premium subscribers have access to additional analysis types and
							features:
							<br />• <strong>Predictive Analysis</strong>: Forecasts future
							interests and trends
							<br />• <strong>Expert Insights</strong>: AI-enhanced analysis
							with domain expertise
							<br />• <strong>Unlimited Historical Data</strong>: Analyze your
							entire conversation history
							<br />• <strong>Custom Analysis Parameters</strong>: Fine-tune
							analysis settings
						</p>
					</HelpTip>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Choosing the Right Analysis Type
						</h2>
						<p className="mb-4">
							Consider these factors when selecting an analysis type:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Time Available</strong>: Quick Analysis for limited
								time, Deep Analysis when you can wait for comprehensive results
							</li>
							<li>
								<strong>Specificity Needed</strong>: Focused Analysis for
								specific topics, Thematic for broader understanding
							</li>
							<li>
								<strong>Growth Tracking</strong>: Comparative Analysis to see
								how you've changed over time
							</li>
							<li>
								<strong>Data Volume</strong>: Consider how much conversation
								data you're analyzing
							</li>
						</ul>
					</section>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">
							Ready to Start Analyzing?
						</h3>
						<p className="mb-4">
							Now that you understand the different analysis types, try creating
							your first analysis or learn more about interpreting results.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/dashboard/analyses/new"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Create New Analysis
							</Link>
							<Link
								href="/help/data-interpretation"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Interpreting Results Guide
							</Link>
							<Link
								href="/help/mind-map"
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								Mind Map Guide
							</Link>
						</div>
					</div>

					<HelpRelatedArticles
						articles={[
							{
								title: "Data Interpretation",
								href: "/help/data-interpretation",
							},
							{ title: "Mind Maps", href: "/help/mind-map" },
							{
								title: "Action Plan Creation",
								href: "/help/action-plan-creation",
							},
							{ title: "Basic Features", href: "/help/basic-features" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
