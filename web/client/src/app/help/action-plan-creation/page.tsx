import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Creating Effective Action Plans | Next You Help Center",
	description:
		"Learn how to create effective action plans based on your analysis insights.",
};

export default function ActionPlanCreationPage() {
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

				<h1 className="mb-6 text-3xl font-bold">
					Creating Effective Action Plans
				</h1>

				<div className="prose prose-slate max-w-none dark:prose-invert">
					<p className="lead">
						Action plans transform insights into concrete steps for personal
						growth. This guide will help you create effective action plans that
						drive meaningful progress.
					</p>

					<h2>What Makes an Effective Action Plan?</h2>
					<p>Effective action plans share these key characteristics:</p>
					<ul>
						<li>
							<strong>Specific</strong>: Clear, concrete actions rather than
							vague intentions
						</li>
						<li>
							<strong>Measurable</strong>: Progress can be tracked and evaluated
						</li>
						<li>
							<strong>Achievable</strong>: Realistic given your resources and
							constraints
						</li>
						<li>
							<strong>Relevant</strong>: Aligned with your interests and goals
						</li>
						<li>
							<strong>Time-bound</strong>: Has defined timeframes and deadlines
						</li>
						<li>
							<strong>Balanced</strong>: Includes both quick wins and
							longer-term objectives
						</li>
					</ul>

					<h2>Creating a New Action Plan</h2>
					<p>Next You offers several ways to create action plans:</p>
					<h3>From Analysis Results</h3>
					<ol>
						<li>Navigate to an analysis result</li>
						<li>Find a topic or insight you want to develop</li>
						<li>Click "Create Action Plan" on that item</li>
						<li>Review and customize the AI-generated suggestions</li>
						<li>Add your own tasks and milestones</li>
						<li>Save and activate your plan</li>
					</ol>

					<h3>From the Action Plans Section</h3>
					<ol>
						<li>Go to the Action Plans section in your dashboard</li>
						<li>Click "New Action Plan"</li>
						<li>Select a category or topic focus</li>
						<li>Define your overall goal and timeframe</li>
						<li>Add specific tasks and milestones</li>
						<li>Set reminders and tracking preferences</li>
					</ol>

					<h3>From Templates</h3>
					<ol>
						<li>Go to the Action Plans section</li>
						<li>Click "New from Template"</li>
						<li>Browse available templates by category</li>
						<li>Select a template that aligns with your goals</li>
						<li>Customize the template to your specific needs</li>
						<li>Save and activate your plan</li>
					</ol>

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

					<h2>Action Plan Components</h2>
					<p>A complete action plan includes these elements:</p>
					<h3>Goal Statement</h3>
					<p>
						A clear, concise statement of what you want to achieve. The best
						goal statements are specific and meaningful.
					</p>
					<p>
						<strong>Example:</strong> "Develop intermediate Python programming
						skills to automate data analysis tasks at work"
					</p>

					<h3>Timeframe</h3>
					<p>
						The overall duration of your plan, with a defined end date. This
						creates urgency and helps with planning.
					</p>
					<p>
						<strong>Example:</strong> "12 weeks, from January 1 to March 31"
					</p>

					<h3>Milestones</h3>
					<p>
						Major checkpoints that mark significant progress. Milestones break
						down your goal into manageable phases.
					</p>
					<p>
						<strong>Example:</strong> "Complete basic Python syntax (Week 2),
						Build first automation script (Week 6), Create comprehensive data
						analysis tool (Week 10)"
					</p>

					<h3>Tasks</h3>
					<p>
						Specific actions that move you toward your milestones. Effective
						tasks are concrete and actionable.
					</p>
					<p>
						<strong>Example:</strong> "Complete Chapter 3 exercises in Python
						tutorial (1 hour)", "Watch video on list comprehensions (30
						minutes)", "Practice with sample dataset (45 minutes)"
					</p>

					<h3>Resources</h3>
					<p>
						Materials, tools, or support you'll need to complete your plan.
						Identifying resources in advance prevents delays.
					</p>
					<p>
						<strong>Example:</strong> "Python for Data Analysis book, Online
						Python course, Sample datasets, GitHub repository for code storage"
					</p>

					<h3>Tracking Method</h3>
					<p>
						How you'll measure progress. Clear metrics help you stay motivated
						and make adjustments.
					</p>
					<p>
						<strong>Example:</strong> "Weekly coding hours (target: 5 hours),
						Completed exercises (target: 3 per week), Working scripts created
						(target: 1 every two weeks)"
					</p>

					<h2>Best Practices for Action Plans</h2>
					<p>Follow these guidelines to create more effective plans:</p>
					<h3>Start Small</h3>
					<p>
						Begin with manageable plans that build confidence. You can always
						expand as you gain momentum.
					</p>

					<h3>Be Specific</h3>
					<p>
						Define exactly what you'll do, when you'll do it, and how you'll
						know it's complete.
					</p>
					<p>
						<strong>Instead of:</strong> "Learn more about photography"
						<br />
						<strong>Try:</strong> "Complete one photography tutorial each
						weekend and practice new techniques for 30 minutes on Tuesday and
						Thursday evenings"
					</p>

					<h3>Include Quick Wins</h3>
					<p>
						Add some easily achievable tasks early in your plan to build
						momentum and motivation.
					</p>

					<h3>Plan for Obstacles</h3>
					<p>
						Identify potential challenges and create contingency plans. This
						increases your likelihood of success.
					</p>

					<h3>Schedule Regular Reviews</h3>
					<p>
						Set specific times to review and adjust your plan based on progress
						and changing circumstances.
					</p>

					<h3>Connect to Your Why</h3>
					<p>
						Include a brief statement about why this goal matters to you. This
						provides motivation during challenging periods.
					</p>

					<h2>Using AI Recommendations</h2>
					<p>Next You's AI can help you create more effective action plans:</p>
					<ul>
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
							<strong>Personalized Approaches</strong>: Suggestions tailored to
							your learning style and preferences
						</li>
					</ul>

					<p>
						While AI recommendations provide a helpful starting point, always
						customize them to your specific situation and preferences.
					</p>

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">Balancing AI Guidance</h3>
						<p className="mb-0">
							The most effective action plans combine AI recommendations with
							your personal knowledge of yourself. Use the AI suggestions as a
							foundation, then adjust based on your experience, preferences, and
							circumstances.
						</p>
					</div>

					<h2>Managing Multiple Action Plans</h2>
					<p>
						As you grow with Next You, you may have several action plans running
						simultaneously:
					</p>
					<ul>
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
				</div>
			</div>
		</PlainPageShell>
	);
}
