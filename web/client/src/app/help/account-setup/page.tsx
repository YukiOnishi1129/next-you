import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function AccountSetupPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Account Setup Guide"
				description="Learn how to set up and configure your Next You account for the best experience."
				lastUpdated="April 25, 2025"
			>
				<div className="prose prose-slate max-w-none dark:prose-invert">
					<p className="lead">
						Setting up your Next You account properly ensures you get the most
						personalized experience. This guide walks you through the essential
						account setup steps.
					</p>

					<h2>Creating Your Account</h2>
					<p>There are several ways to create your Next You account:</p>
					<ul>
						<li>
							<strong>Email Registration</strong>: Sign up with your email
							address and create a password
						</li>
						<li>
							<strong>Social Login</strong>: Connect with your Google, Facebook,
							or Apple account
						</li>
						<li>
							<strong>Guest Account</strong>: Try the platform before creating a
							full account
						</li>
					</ul>

					<HelpTip>
						If you started with a guest account, you can convert it to a full
						account at any time without losing your data. Go to Settings &gt;
						Account and click "Convert to Full Account."
					</HelpTip>

					<h2>Profile Information</h2>
					<p>Complete your profile to help us personalize your experience:</p>
					<HelpStepByStep
						steps={[
							"Navigate to Settings > Profile",
							"Add your name, profile picture, and bio",
							"Set your primary interests and goals",
							"Specify your preferred language and region",
						]}
					/>

					<h2>Privacy Settings</h2>
					<p>
						Next You takes your privacy seriously. Configure your privacy
						settings:
					</p>
					<ul>
						<li>
							<strong>Data Usage</strong>: Control how your data is used for
							analysis
						</li>
						<li>
							<strong>Sharing Preferences</strong>: Decide if and how your
							insights can be shared
						</li>
						<li>
							<strong>Third-party Connections</strong>: Manage connections to
							other services
						</li>
					</ul>

					<h2>Notification Preferences</h2>
					<p>Stay updated on your progress and new insights:</p>
					<ul>
						<li>
							<strong>Email Notifications</strong>: Weekly summaries, analysis
							completions, etc.
						</li>
						<li>
							<strong>Push Notifications</strong>: Real-time updates on your
							desktop or mobile
						</li>
						<li>
							<strong>Reminder Frequency</strong>: Set how often you want to be
							reminded about your action plans
						</li>
					</ul>

					<h2>Account Security</h2>
					<p>Protect your account with these security features:</p>
					<ul>
						<li>
							<strong>Strong Password</strong>: Create a unique, complex
							password
						</li>
						<li>
							<strong>Two-Factor Authentication</strong>: Add an extra layer of
							security
						</li>
						<li>
							<strong>Login History</strong>: Monitor where your account has
							been accessed
						</li>
						<li>
							<strong>Connected Devices</strong>: Manage devices that have
							access to your account
						</li>
					</ul>

					<h2>Subscription Plans</h2>
					<p>Choose the plan that best fits your needs:</p>
					<ul>
						<li>
							<strong>Free Plan</strong>: Basic analysis and limited action
							plans
						</li>
						<li>
							<strong>Premium Plan</strong>: Advanced insights, unlimited action
							plans, and priority support
						</li>
						<li>
							<strong>Team Plan</strong>: Collaborative features for groups and
							organizations
						</li>
					</ul>

					<HelpTip>
						For premium plans, you'll need to add a payment method. We accept
						major credit cards, PayPal, and select regional payment methods.
						Your payment information is securely stored and processed.
					</HelpTip>

					<h2>Data Import Options</h2>
					<p>Jump-start your experience by importing existing data:</p>
					<ul>
						<li>
							<strong>Chat History</strong>: Import conversations from supported
							platforms
						</li>
						<li>
							<strong>Journal Entries</strong>: Upload personal reflections and
							notes
						</li>
						<li>
							<strong>Previous Goals</strong>: Import goals from other tracking
							systems
						</li>
					</ul>

					<h2>Account Verification</h2>
					<p>Verify your account to access all features:</p>
					<HelpStepByStep
						steps={[
							"Check your email for a verification link",
							"Click the link to verify your email address",
							"Complete any additional verification steps if required",
						]}
					/>

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
								<Link href="/help/getting-started">Getting Started Guide</Link>
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
						{ title: "Getting Started", href: "/help/getting-started" },
						{ title: "Privacy Settings", href: "/help/privacy-settings" },
						{ title: "Password Reset", href: "/help/password-reset" },
						{ title: "Subscription Plans", href: "/help/subscription" },
					]}
				/>

				<HelpContactSupport />
			</HelpPageLayout>
		</PlainPageShell>
	);
}
