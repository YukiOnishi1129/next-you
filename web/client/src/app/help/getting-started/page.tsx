import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Getting Started | Next You Help Center",
	description:
		"Learn how to get started with Next You and make the most of your personal growth journey.",
};

export default function GettingStartedPage() {
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

				<h1 className="mb-6 text-3xl font-bold">How to Start with Next You</h1>

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
					<ol>
						<li>
							Navigate to the <strong>Analyses</strong> section in your
							dashboard
						</li>
						<li>
							Click on <strong>New Analysis</strong>
						</li>
						<li>
							Upload a conversation file or paste text from your digital
							conversations
						</li>
						<li>Give your analysis a name and description</li>
						<li>
							Click <strong>Analyze</strong> to begin the process
						</li>
					</ol>

					<div className="my-8 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">
							Tip: What Conversations Work Best?
						</h3>
						<p className="mb-0">
							The most insightful analyses come from meaningful conversations.
							Consider uploading chats where you've discussed your interests,
							challenges, goals, or reflections. Longer conversations typically
							provide more comprehensive insights.
						</p>
					</div>

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
					<ol>
						<li>
							Navigate to the <strong>Action Plans</strong> section
						</li>
						<li>
							Click <strong>New Action Plan</strong>
						</li>
						<li>Choose a category or topic you'd like to focus on</li>
						<li>Set goals and milestones</li>
						<li>Add specific tasks and deadlines</li>
						<li>Save your plan and begin tracking your progress</li>
					</ol>

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
							<Link
								href="/help/account-setup"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Account Setup Guide
							</Link>
							<Link
								href="/help/basic-features"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Basic Features Guide
							</Link>
							<Link
								href="/contact"
								className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
							>
								Contact Support
							</Link>
						</div>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
