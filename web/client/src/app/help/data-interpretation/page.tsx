import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";

import Link from "next/link";

export default function DataInterpretationPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Interpreting Analysis Results"
				description="Learn how to interpret and get the most value from your Next You analysis results."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<p className="lead text-lg">
							Next You provides rich insights from your conversations. This
							guide will help you understand and get maximum value from your
							analysis results.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Analysis Results Overview
						</h2>
						<p className="mb-4">
							When an analysis is complete, you'll see several components:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Summary Dashboard</strong>: High-level overview of key
								findings
							</li>
							<li>
								<strong>Mind Map</strong>: Visual representation of topics and
								connections
							</li>
							<li>
								<strong>Topic Breakdown</strong>: Detailed analysis of
								identified topics
							</li>
							<li>
								<strong>Insight Cards</strong>: Specific observations about
								patterns and interests
							</li>
							<li>
								<strong>Suggested Actions</strong>: Recommended next steps based
								on your results
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Understanding the Summary Dashboard
						</h2>
						<p className="mb-4">
							The summary dashboard provides a quick overview of your analysis:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Primary Topics</strong>: The most prominent subjects in
								your conversations
							</li>
							<li>
								<strong>Interest Distribution</strong>: How your attention is
								distributed across topics
							</li>
							<li>
								<strong>Sentiment Overview</strong>: General emotional tone
								associated with different topics
							</li>
							<li>
								<strong>Key Insights</strong>: Important patterns or
								observations identified by the AI
							</li>
							<li>
								<strong>Analysis Metadata</strong>: Information about the
								analysis type, data source, and processing time
							</li>
						</ul>

						<HelpTip>
							<h3 className="mb-2 text-lg font-medium">
								Reading the Interest Distribution
							</h3>
							<p className="mb-0">
								The interest distribution chart shows how your attention is
								divided among topics. Topics with larger segments represent
								areas where you spend more time or engage more deeply. A very
								uneven distribution might indicate strong focus areas, while an
								even distribution could suggest diverse interests.
							</p>
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Topic Breakdown Analysis
						</h2>
						<p className="mb-4">
							The topic breakdown section provides detailed information about
							each identified topic:
						</p>
						<h3 className="text-xl font-medium mb-3">
							For Each Topic, You'll See:
						</h3>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Prominence Score</strong>: How significant this topic is
								in your conversations
							</li>
							<li>
								<strong>Related Subtopics</strong>: More specific areas within
								the main topic
							</li>
							<li>
								<strong>Sentiment Analysis</strong>: The emotional tone
								associated with this topic
							</li>
							<li>
								<strong>Engagement Pattern</strong>: How your interest in this
								topic has changed over time
							</li>
							<li>
								<strong>Related Topics</strong>: Other subjects that frequently
								appear alongside this one
							</li>
							<li>
								<strong>Key Phrases</strong>: Common expressions or terms
								associated with this topic
							</li>
						</ul>

						<h3 className="text-xl font-medium mb-3 mt-6">
							How to Use Topic Breakdowns:
						</h3>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								Identify topics with high prominence scores to understand your
								main interests
							</li>
							<li>
								Look for topics with positive sentiment as potential areas for
								action plans
							</li>
							<li>
								Notice topics with increasing engagement patterns as emerging
								interests
							</li>
							<li>
								Explore connections between related topics to find
								interdisciplinary opportunities
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Interpreting Insight Cards
						</h2>
						<p className="mb-4">
							Insight cards highlight specific patterns or observations from
							your data:
						</p>
						<h3 className="text-xl font-medium mb-3">Types of Insights:</h3>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Pattern Insights</strong>: Recurring behaviors or
								interests identified across conversations
							</li>
							<li>
								<strong>Growth Insights</strong>: Areas where your knowledge or
								interest is developing
							</li>
							<li>
								<strong>Connection Insights</strong>: Unexpected or notable
								relationships between topics
							</li>
							<li>
								<strong>Contrast Insights</strong>: Differences in how you
								engage with various topics
							</li>
							<li>
								<strong>Potential Insights</strong>: Areas that might benefit
								from further exploration
							</li>
						</ul>

						<h3 className="text-xl font-medium mb-3 mt-6">
							Acting on Insights:
						</h3>
						<p className="mb-4">
							Each insight card includes suggestions for how to use that
							information:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								Consider whether the insight resonates with your self-perception
							</li>
							<li>
								Look for insights that surprise you—these often offer the most
								valuable perspectives
							</li>
							<li>
								Use the "Take Action" button on relevant insights to create
								targeted action plans
							</li>
							<li>
								Save particularly meaningful insights to your personal growth
								journal
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Sentiment Analysis</h2>
						<p className="mb-4">
							Sentiment analysis shows the emotional tone associated with
							different topics:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Positive Sentiment</strong>: Topics you discuss with
								enthusiasm, joy, or optimism
							</li>
							<li>
								<strong>Neutral Sentiment</strong>: Topics discussed in a
								balanced or objective manner
							</li>
							<li>
								<strong>Negative Sentiment</strong>: Topics associated with
								frustration, concern, or other negative emotions
							</li>
							<li>
								<strong>Mixed Sentiment</strong>: Topics that evoke varied
								emotional responses
							</li>
						</ul>

						<HelpTip>
							<h3 className="mb-2 text-lg font-medium">
								Using Sentiment Information
							</h3>
							<p className="mb-0">
								Sentiment isn't inherently good or bad—it's informative.
								Negative sentiment might indicate challenges you're working
								through, areas of growth, or topics that need attention.
								Positive sentiment often highlights your passions and strengths.
								Both can be valuable for personal development.
							</p>
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Trend Analysis</h2>
						<p className="mb-4">
							If you've conducted multiple analyses over time, you'll see trend
							information:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Rising Interests</strong>: Topics that are becoming more
								prominent in your conversations
							</li>
							<li>
								<strong>Declining Interests</strong>: Topics that are appearing
								less frequently
							</li>
							<li>
								<strong>Consistent Interests</strong>: Topics that maintain
								steady engagement over time
							</li>
							<li>
								<strong>Cyclical Interests</strong>: Topics that regularly come
								and go in your focus
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							From Insights to Action
						</h2>
						<p className="mb-4">
							The most valuable part of analysis is how you use the insights:
						</p>
						<h3 className="text-xl font-medium mb-3">
							Creating Targeted Action Plans:
						</h3>
						<ol className="list-decimal list-inside space-y-2 ml-4">
							<li>Identify topics or insights that resonate with your goals</li>
							<li>
								Use the "Create Action Plan" feature to generate suggested
								activities
							</li>
							<li>Customize the plan based on your specific objectives</li>
							<li>Set realistic timelines and milestones</li>
							<li>Track your progress and adjust as needed</li>
						</ol>

						<h3 className="text-xl font-medium mb-3 mt-6">
							Reflection Questions:
						</h3>
						<p className="mb-4">
							Consider these questions when reviewing your analysis:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								Do the prominent topics align with how you want to spend your
								time and energy?
							</li>
							<li>
								Are there topics with positive sentiment that you'd like to
								explore further?
							</li>
							<li>
								Do you notice any surprising connections between different
								interest areas?
							</li>
							<li>
								Are there topics that appear less frequently than you'd like?
							</li>
							<li>
								How have your interests and focus areas evolved over time?
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Sharing and Discussing Results
						</h2>
						<p className="mb-4">
							Sometimes sharing your insights with others can provide additional
							perspective:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								Use the "Share" feature to export specific insights or summaries
							</li>
							<li>
								Consider discussing surprising results with trusted friends or
								mentors
							</li>
							<li>
								Join the Next You community to connect with others on similar
								growth journeys
							</li>
							<li>
								Use insights as conversation starters for meaningful discussions
							</li>
						</ul>
					</section>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">
							Ready to Apply Your Insights?
						</h3>
						<p className="mb-4">
							Now that you understand how to interpret your analysis results,
							learn how to create effective action plans.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/help/action-plan-creation"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Action Plan Guide
							</Link>
							<Link
								href="/help/goal-setting"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Goal Setting Guide
							</Link>
							<Link
								href="/dashboard/analyses/new"
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								Create New Analysis
							</Link>
						</div>
					</div>

					<HelpRelatedArticles
						articles={[
							{ title: "Analysis Types", href: "/help/analysis-types" },
							{ title: "Mind Maps", href: "/help/mind-map" },
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
