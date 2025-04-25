import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import Link from "next/link";

export default function ActionPlanCreationPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Creating Effective Action Plans"
				description="Transform insights into concrete steps for personal growth with effective action plans."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							What Makes an Effective Action Plan?
						</h2>
						<p className="mb-4">
							Effective action plans share these key characteristics:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Specific</strong>: Clear, concrete actions rather than
								vague intentions
							</li>
							<li>
								<strong>Measurable</strong>: Progress can be tracked and
								evaluated
							</li>
							<li>
								<strong>Achievable</strong>: Realistic given your resources and
								constraints
							</li>
							<li>
								<strong>Relevant</strong>: Aligned with your interests and goals
							</li>
							<li>
								<strong>Time-bound</strong>: Has defined timeframes and
								deadlines
							</li>
							<li>
								<strong>Balanced</strong>: Includes both quick wins and
								longer-term objectives
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Creating a New Action Plan
						</h2>
						<p className="mb-4">
							Next You offers several ways to create action plans:
						</p>

						<h3 className="text-xl font-medium mb-3">From Analysis Results</h3>
						<HelpStepByStep
							steps={[
								"Navigate to an analysis result",
								"Find a topic or insight you want to develop",
								'Click "Create Action Plan" on that item',
								"Review and customize the AI-generated suggestions",
								"Add your own tasks and milestones",
								"Save and activate your plan",
							]}
						/>

						<h3 className="text-xl font-medium mb-3 mt-6">
							From the Action Plans Section
						</h3>
						<HelpStepByStep
							steps={[
								"Go to the Action Plans section in your dashboard",
								'Click "New Action Plan"',
								"Select a category or topic focus",
								"Define your overall goal and timeframe",
								"Add specific tasks and milestones",
								"Set reminders and tracking preferences",
							]}
						/>

						<h3 className="text-xl font-medium mb-3 mt-6">From Templates</h3>
						<HelpStepByStep
							steps={[
								"Go to the Action Plans section",
								'Click "New from Template"',
								"Browse available templates by category",
								"Select a template that aligns with your goals",
								"Customize the template to your specific needs",
								"Save and activate your plan",
							]}
						/>

						<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
							<h3 className="mb-2 text-lg font-medium">Template Examples</h3>
							<p className="mb-0">
								Next You offers templates for common growth areas:
								<br />• <strong>Skill Development</strong>: Structured learning
								paths for new skills
								<br />• <strong>Habit Formation</strong>: Gradual steps to build
								positive habits
								<br />• <strong>Knowledge Expansion</strong>: Guided exploration
								of new topics
								<br />• <strong>Project Completion</strong>: Frameworks for
								completing personal projects
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Action Plan Components
						</h2>
						<p className="mb-4">
							A complete action plan includes these elements:
						</p>

						<h3 className="text-xl font-medium mb-2">Goal Statement</h3>
						<p className="mb-4">
							A clear, concise statement of what you want to achieve. The best
							goal statements are specific and meaningful.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "Develop intermediate Python programming
							skills to automate data analysis tasks at work"
						</p>

						<h3 className="text-xl font-medium mb-2">Timeframe</h3>
						<p className="mb-4">
							The overall duration of your plan, with a defined end date. This
							creates urgency and helps with planning.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "12 weeks, from January 1 to March 31"
						</p>

						<h3 className="text-xl font-medium mb-2">Milestones</h3>
						<p className="mb-4">
							Major checkpoints that mark significant progress. Milestones break
							down your goal into manageable phases.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "Complete basic Python syntax (Week 2),
							Build first automation script (Week 6), Create comprehensive data
							analysis tool (Week 10)"
						</p>

						<h3 className="text-xl font-medium mb-2">Tasks</h3>
						<p className="mb-4">
							Specific actions that move you toward your milestones. Effective
							tasks are concrete and actionable.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "Complete Chapter 3 exercises in Python
							tutorial (1 hour)", "Watch video on list comprehensions (30
							minutes)", "Practice with sample dataset (45 minutes)"
						</p>

						<h3 className="text-xl font-medium mb-2">Resources</h3>
						<p className="mb-4">
							Materials, tools, or support you'll need to complete your plan.
							Identifying resources in advance prevents delays.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "Python for Data Analysis book, Online
							Python course, Sample datasets, GitHub repository for code
							storage"
						</p>

						<h3 className="text-xl font-medium mb-2">Tracking Method</h3>
						<p className="mb-4">
							How you'll measure progress. Clear metrics help you stay motivated
							and make adjustments.
						</p>
						<p className="mb-4">
							<strong>Example:</strong> "Weekly coding hours (target: 5 hours),
							Completed exercises (target: 3 per week), Working scripts created
							(target: 1 every two weeks)"
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Best Practices for Action Plans
						</h2>
						<p className="mb-4">
							Follow these guidelines to create more effective plans:
						</p>

						<h3 className="text-xl font-medium mb-2">Start Small</h3>
						<p className="mb-4">
							Begin with manageable plans that build confidence. You can always
							expand as you gain momentum.
						</p>

						<h3 className="text-xl font-medium mb-2">Be Specific</h3>
						<p className="mb-4">
							Define exactly what you'll do, when you'll do it, and how you'll
							know it's complete.
						</p>
						<p className="mb-4">
							<strong>Instead of:</strong> "Learn more about photography"
							<br />
							<strong>Try:</strong> "Complete one photography tutorial each
							weekend and practice new techniques for 30 minutes on Tuesday and
							Thursday evenings"
						</p>

						<h3 className="text-xl font-medium mb-2">Include Quick Wins</h3>
						<p className="mb-4">
							Add some easily achievable tasks early in your plan to build
							momentum and motivation.
						</p>

						<h3 className="text-xl font-medium mb-2">Plan for Obstacles</h3>
						<p className="mb-4">
							Identify potential challenges and create contingency plans. This
							increases your likelihood of success.
						</p>

						<h3 className="text-xl font-medium mb-2">
							Schedule Regular Reviews
						</h3>
						<p className="mb-4">
							Set specific times to review and adjust your plan based on
							progress and changing circumstances.
						</p>

						<h3 className="text-xl font-medium mb-2">Connect to Your Why</h3>
						<p className="mb-4">
							Include a brief statement about why this goal matters to you. This
							provides motivation during challenging periods.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Using AI Recommendations
						</h2>
						<p className="mb-4">
							Next You's AI can help you create more effective action plans:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Task Suggestions</strong>: The AI recommends specific
								tasks based on your goal
							</li>
							<li>
								<strong>Resource Recommendations</strong>: Suggested books,
								courses, or tools
							</li>
							<li>
								<strong>Timeline Optimization</strong>: Guidance on realistic
								timeframes
							</li>
							<li>
								<strong>Personalized Approaches</strong>: Suggestions tailored
								to your learning style and preferences
							</li>
						</ul>

						<p className="mt-4 mb-4">
							While AI recommendations provide a helpful starting point, always
							customize them to your specific situation and preferences.
						</p>

						<HelpTip>
							The most effective action plans combine AI recommendations with
							your personal knowledge of yourself. Use the AI suggestions as a
							foundation, then adjust based on your experience, preferences, and
							circumstances.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Managing Multiple Action Plans
						</h2>
						<p className="mb-4">
							As you grow with Next You, you may have several action plans
							running simultaneously:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>
								<strong>Prioritize</strong>: Identify your most important plans
								and focus on them first
							</li>
							<li>
								<strong>Balance</strong>: Combine different types of plans
								(skill-building, habits, projects)
							</li>
							<li>
								<strong>Stagger Start Dates</strong>: Begin new plans after
								establishing routines for existing ones
							</li>
							<li>
								<strong>Use Tags</strong>: Organize plans by category, priority,
								or time commitment
							</li>
							<li>
								<strong>Regular Review</strong>: Schedule weekly reviews of all
								active plans
							</li>
						</ul>
					</section>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">
							Ready to Create Your Action Plan?
						</h3>
						<p className="mb-4">
							Now that you understand how to create effective action plans,
							start building your own or learn how to track your progress.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/dashboard/action-plans/new"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Create New Action Plan
							</Link>
							<Link
								href="/help/progress-tracking"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Progress Tracking Guide
							</Link>
							<Link
								href="/help/goal-setting"
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								Goal Setting Guide
							</Link>
						</div>
					</div>

					<HelpRelatedArticles
						articles={[
							{ title: "Progress Tracking", href: "/help/progress-tracking" },
							{ title: "Goal Setting", href: "/help/goal-setting" },
							{
								title: "Data Interpretation",
								href: "/help/data-interpretation",
							},
							{ title: "Mind Maps", href: "/help/mind-map" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
