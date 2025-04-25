import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function GettingStartedPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="How to Start with Next You"
				description="Learn how to get started with Next You and make the most of your personal growth journey."
				lastUpdated="April 25, 2025"
			>
				<div className="prose prose-slate max-w-none dark:prose-invert">
					<p className="lead">
						Welcome to Next You! This guide will help you get started on your
						personal growth journey. Follow these simple steps to begin
						discovering insights about yourself and creating actionable plans.
					</p>

					<h2>Step 1: Create Your Account</h2>
					<p>
						To begin using Next You, you'll need to create an account. Visit our{" "}
						<Link href="/register">registration page</Link> and follow the
						instructions to set up your account. You can also try our platform
						with a <Link href="/login/guest">guest account</Link>
						before committing to a full registration.
					</p>

					<h2>Step 2: Complete Your Profile</h2>
					<p>
						After registering, take a moment to complete your profile. This
						helps us personalize your experience and provide more relevant
						insights. You can add information about your interests, goals, and
						preferences.
					</p>

					<h2>Step 3: Upload Your First Conversation</h2>
					<p>
						Next You works by analyzing your digital conversations to identify
						patterns and insights. To get started:
					</p>
					<HelpStepByStep
						steps={[
							"Navigate to the Analyses section in your dashboard",
							"Click on New Analysis",
							"Upload a conversation file or paste text from your digital conversations",
							"Give your analysis a name and description",
							"Click Analyze to begin the process",
						]}
					/>

					<HelpTip>
						The most insightful analyses come from meaningful conversations.
						Consider uploading chats where you've discussed your interests,
						challenges, goals, or reflections. Longer conversations typically
						provide more comprehensive insights.
					</HelpTip>

					<h2>Step 4: Explore Your Dashboard</h2>
					<p>
						Once your analysis is complete, you'll be able to explore your
						dashboard. Here you'll find:
					</p>
					<ul>
						<li>
							<strong>Mind Maps</strong>: Visual representations of your
							interests and thought patterns
						</li>
						<li>
							<strong>Categories</strong>: Groupings of related topics from your
							conversations
						</li>
						<li>
							<strong>Action Plans</strong>: Suggested activities based on your
							interests and goals
						</li>
						<li>
							<strong>Analysis History</strong>: A record of all your previous
							analyses
						</li>
					</ul>

					<h2>Step 5: Create Your First Action Plan</h2>
					<p>
						Based on your analysis, you can create personalized action plans:
					</p>
					<HelpStepByStep
						steps={[
							"Navigate to the Action Plans section",
							"Click New Action Plan",
							"Choose a category or topic you'd like to focus on",
							"Set goals and milestones",
							"Add specific tasks and deadlines",
							"Save your plan and begin tracking your progress",
						]}
					/>

					<h2>Next Steps</h2>
					<p>
						Now that you've set up your account and created your first analysis
						and action plan, you can:
					</p>
					<ul>
						<li>Explore different types of analyses to gain deeper insights</li>
						<li>Track your progress on action plans</li>
						<li>Discover new categories and interests</li>
						<li>Adjust your settings and preferences</li>
					</ul>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">Need More Help?</h3>
						<p className="mb-4">
							Check out our other help resources or contact our support team if
							you have any questions.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								<Link href="/help/account-setup">Account Setup Guide</Link>
							</Button>
							<Button
								asChild
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								<Link href="/help/basic-features">Basic Features Guide</Link>
							</Button>
							<Button
								asChild
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								<Link href="/contact">Contact Support</Link>
							</Button>
						</div>
					</div>
				</div>

				<HelpRelatedArticles
					articles={[
						{ title: "Account Setup", href: "/help/account-setup" },
						{ title: "Basic Features", href: "/help/basic-features" },
						{ title: "Analysis Types", href: "/help/analysis-types" },
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
