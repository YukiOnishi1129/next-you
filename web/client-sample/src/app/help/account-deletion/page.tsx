import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpFAQ } from "@/features/help/components/HelpFAQ";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpScreenshot } from "@/features/help/components/HelpScreenshot";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpWarning } from "@/features/help/components/HelpWarning";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { AlertTriangle, HelpCircle } from "lucide-react";

import Link from "next/link";

export default function AccountDeletionPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Account Deletion"
				description="Learn how to delete your NextYou account and understand what happens to your data."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<HelpWarning className="mt-6">
						<div className="font-semibold flex items-center">
							<AlertTriangle className="h-4 w-4 mr-2" />
							Warning: Account deletion is permanent
						</div>
						<p className="mt-1">
							Once your account is deleted, all your data will be permanently
							removed and cannot be recovered. We recommend exporting your data
							before proceeding with account deletion.
						</p>
					</HelpWarning>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Before You Delete Your Account
						</h2>
						<p className="mb-4">
							We're sorry to see you go. Before proceeding with account
							deletion, please consider:
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong>Exporting your data:</strong> Once your account is
								deleted, all your analyses, action plans, and categories will be
								permanently removed.
								<Link
									href="/help/data-export"
									className="text-rose-500 hover:text-rose-600 ml-1"
								>
									Learn how to export your data
								</Link>
								.
							</li>
							<li>
								<strong>Active subscriptions:</strong> If you have an active
								paid subscription, you should cancel it before deleting your
								account to avoid future charges.
								<Link
									href="/help/subscription"
									className="text-rose-500 hover:text-rose-600 ml-1"
								>
									Learn how to manage subscriptions
								</Link>
								.
							</li>
							<li>
								<strong>Shared resources:</strong> If you've shared analyses or
								action plans with other users, deleting your account will remove
								their access to these resources.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							How to Delete Your Account
						</h2>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Account",
								"Scroll down to the bottom of the page to find the 'Delete Account' section",
								"Click the 'Delete My Account' button",
								"Enter your password to confirm your identity",
								"Type 'DELETE' in the confirmation field to verify your intention",
								"Click the final 'Permanently Delete My Account' button to complete the process",
							]}
						/>

						<HelpScreenshot
							src="/account-deletion-dialog.png"
							alt="Account Deletion Confirmation"
							caption="The account deletion confirmation screen requiring password verification"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							What Happens to Your Data
						</h2>

						<div className="border rounded-lg p-6">
							<h3 className="text-xl font-medium mb-4">
								Data Deletion Timeline
							</h3>
							<div className="space-y-4">
								<div>
									<h4 className="font-medium">Immediate Actions</h4>
									<ul className="list-disc pl-6">
										<li>
											Your account is deactivated and you can no longer log in
										</li>
										<li>
											Your personal profile information is removed from our
											active systems
										</li>
										<li>
											Your analyses, action plans, and categories are no longer
											accessible
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-medium">Within 30 Days</h4>
									<ul className="list-disc pl-6">
										<li>
											All your personal data is permanently deleted from our
											primary databases
										</li>
										<li>
											Your email address is removed from our mailing lists
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-medium">Within 90 Days</h4>
									<ul className="list-disc pl-6">
										<li>
											All backups containing your data are overwritten as part
											of our regular backup cycle
										</li>
										<li>
											Any cached data is completely purged from our systems
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-medium">Retained Information</h4>
									<p className="text-sm text-muted-foreground">
										We may retain certain information as required by law or for
										legitimate business purposes, such as:
									</p>
									<ul className="list-disc pl-6">
										<li>
											Records of financial transactions for tax and accounting
											purposes
										</li>
										<li>
											Aggregated, anonymized usage data that cannot be linked
											back to you
										</li>
										<li>Information necessary to detect and prevent fraud</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Alternatives to Account Deletion
						</h2>

						<p className="mb-4">
							If you're considering account deletion due to specific concerns,
							there might be alternatives:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="border rounded-lg p-6">
								<div className="flex items-center mb-2">
									<HelpCircle className="mr-2 h-5 w-5 text-rose-500" />
									<h3 className="text-xl font-medium">Taking a Break</h3>
								</div>
								<p className="text-sm">
									Instead of deleting your account, you can simply log out and
									take a break. Your data will be preserved for when you're
									ready to return.
								</p>
							</div>

							<div className="border rounded-lg p-6">
								<div className="flex items-center mb-2">
									<HelpCircle className="mr-2 h-5 w-5 text-rose-500" />
									<h3 className="text-xl font-medium">
										Adjusting Privacy Settings
									</h3>
								</div>
								<p className="text-sm">
									If you're concerned about privacy, you can adjust your
									<Link
										href="/help/privacy-settings"
										className="text-rose-500 hover:text-rose-600 mx-1"
									>
										privacy settings
									</Link>
									to control how your data is used.
								</p>
							</div>
						</div>
					</section>

					<HelpFAQ
						questions={[
							{
								question: "Can I reactivate my account after deletion?",
								answer:
									"No, once your account is deleted, it cannot be recovered. You would need to create a new account if you wish to use NextYou again.",
							},
							{
								question:
									"What happens to my subscription if I delete my account?",
								answer:
									"We recommend canceling your subscription before deleting your account. If you delete your account without canceling, we will automatically cancel your subscription, but you should verify this with your payment provider.",
							},
							{
								question:
									"How do I request a copy of all my data before deletion?",
								answer:
									"You can export all your data through the Data & Privacy section in Settings. See our Data Export guide for detailed instructions.",
							},
							{
								question:
									"I'm having trouble deleting my account. What should I do?",
								answer:
									"If you're experiencing issues with account deletion, please contact our support team for assistance.",
							},
							{
								question:
									"Will deleting my account remove me from all email lists?",
								answer:
									"Yes, deleting your account will remove you from all NextYou marketing and notification emails. If you continue to receive emails after account deletion, please contact support.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Data Export", href: "/help/data-export" },
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
							{ title: "Subscription Management", href: "/help/subscription" },
							{ title: "Data Recovery", href: "/help/data-recovery" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
