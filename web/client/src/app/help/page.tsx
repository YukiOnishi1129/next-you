import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Help Center | Next You",
	description: "Find help and resources for using Next You.",
};

export default function HelpPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-4xl py-10">
				<h1 className="mb-8 text-3xl font-bold">Help Center</h1>

				<div className="grid gap-8 md:grid-cols-2">
					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/help/getting-started"
									className="text-primary underline"
								>
									How to Start with Next You
								</Link>
							</li>
							<li>
								<Link
									href="/help/account-setup"
									className="text-primary underline"
								>
									Account Setup Guide
								</Link>
							</li>
							<li>
								<Link
									href="/help/basic-features"
									className="text-primary underline"
								>
									Using Basic Features
								</Link>
							</li>
						</ul>
					</div>

					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Analysis Features</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/help/analysis-types"
									className="text-primary underline"
								>
									Types of Analysis
								</Link>
							</li>
							<li>
								<Link href="/help/mind-map" className="text-primary underline">
									Using Mind Maps
								</Link>
							</li>
							<li>
								<Link
									href="/help/data-interpretation"
									className="text-primary underline"
								>
									Interpreting Analysis Results
								</Link>
							</li>
						</ul>
					</div>

					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Action Plans</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/help/action-plan-creation"
									className="text-primary underline"
								>
									Creating Effective Action Plans
								</Link>
							</li>
							<li>
								<Link
									href="/help/progress-tracking"
									className="text-primary underline"
								>
									Tracking Your Progress
								</Link>
							</li>
							<li>
								<Link
									href="/help/goal-setting"
									className="text-primary underline"
								>
									Goal Setting Best Practices
								</Link>
							</li>
						</ul>
					</div>

					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Account & Settings</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/help/profile-management"
									className="text-primary underline"
								>
									Managing Your Profile
								</Link>
							</li>
							<li>
								<Link
									href="/help/privacy-settings"
									className="text-primary underline"
								>
									Privacy Settings
								</Link>
							</li>
							<li>
								<Link
									href="/help/subscription"
									className="text-primary underline"
								>
									Subscription Plans
								</Link>
							</li>
						</ul>
					</div>

					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Troubleshooting</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/help/common-issues"
									className="text-primary underline"
								>
									Common Issues & Solutions
								</Link>
							</li>
							<li>
								<Link
									href="/help/login-issues"
									className="text-primary underline"
								>
									Login Problems
								</Link>
							</li>
							<li>
								<Link
									href="/help/data-recovery"
									className="text-primary underline"
								>
									Data Recovery
								</Link>
							</li>
						</ul>
					</div>

					<div className="rounded-lg border border-border p-6">
						<h2 className="mb-4 text-xl font-semibold">Contact Support</h2>
						<p className="mb-4">
							If you can't find a solution, please contact our support team.
						</p>
						<Link
							href="/contact"
							className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
						>
							Contact Us
						</Link>
					</div>
				</div>

				<div className="mt-12 rounded-lg border border-border bg-muted/50 p-6">
					<h2 className="mb-4 text-xl font-semibold">Popular Topics</h2>
					<div className="flex flex-wrap gap-2">
						<Link
							href="/help/password-reset"
							className="rounded-full border border-border bg-background px-4 py-1 text-sm"
						>
							Password Reset
						</Link>
						<Link
							href="/help/data-export"
							className="rounded-full border border-border bg-background px-4 py-1 text-sm"
						>
							Data Export
						</Link>
						<Link
							href="/help/account-deletion"
							className="rounded-full border border-border bg-background px-4 py-1 text-sm"
						>
							Account Deletion
						</Link>
						<Link
							href="/help/sharing-results"
							className="rounded-full border border-border bg-background px-4 py-1 text-sm"
						>
							Sharing Results
						</Link>
						<Link
							href="/help/mobile-app"
							className="rounded-full border border-border bg-background px-4 py-1 text-sm"
						>
							Mobile App Usage
						</Link>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
