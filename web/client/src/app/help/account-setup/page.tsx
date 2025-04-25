import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Account Setup Guide | Next You Help Center",
	description:
		"Learn how to set up and configure your Next You account for the best experience.",
};

export default function AccountSetupPage() {
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

				<h1 className="mb-6 text-3xl font-bold">Account Setup Guide</h1>

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

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">
							Converting a Guest Account
						</h3>
						<p className="mb-0">
							If you started with a guest account, you can convert it to a full
							account at any time without losing your data. Go to Settings &gt;
							Account and click "Convert to Full Account."
						</p>
					</div>

					<h2>Profile Information</h2>
					<p>Complete your profile to help us personalize your experience:</p>
					<ol>
						<li>Navigate to Settings &gt; Profile</li>
						<li>Add your name, profile picture, and bio</li>
						<li>Set your primary interests and goals</li>
						<li>Specify your preferred language and region</li>
					</ol>

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

					<div className="my-6 rounded-lg border border-border bg-muted/50 p-4">
						<h3 className="mb-2 text-lg font-medium">Payment Information</h3>
						<p className="mb-0">
							For premium plans, you'll need to add a payment method. We accept
							major credit cards, PayPal, and select regional payment methods.
							Your payment information is securely stored and processed.
						</p>
					</div>

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
					<ol>
						<li>Check your email for a verification link</li>
						<li>Click the link to verify your email address</li>
						<li>Complete any additional verification steps if required</li>
					</ol>

					<div className="mt-8 rounded-lg border border-border bg-primary/10 p-6">
						<h3 className="mb-2 text-xl font-semibold">Need More Help?</h3>
						<p className="mb-4">
							Check out our other help resources or contact our support team if
							you have any questions.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/help/getting-started"
								className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
							>
								Getting Started Guide
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
