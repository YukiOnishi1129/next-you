import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpFAQ } from "@/features/help/components/HelpFAQ";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpScreenshot } from "@/features/help/components/HelpScreenshot";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { HelpWarning } from "@/features/help/components/HelpWarning";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";

export default function SubscriptionPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Subscription Plans"
				description="Learn about Next You subscription plans, pricing, and features."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Next You Subscription Plans
						</h2>
						<p className="mb-4">
							Next You offers different subscription plans to meet your personal
							growth needs. This guide explains the available plans, their
							features, and how to manage your subscription.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Available Plans</h2>

						<div className="grid md:grid-cols-3 gap-6 mt-6">
							{/* Free Plan */}
							<div className="border rounded-lg p-6 flex flex-col">
								<h3 className="text-xl font-bold mb-2">Free</h3>
								<p className="text-2xl font-bold mb-4">$0</p>
								<ul className="list-disc pl-6 space-y-2 mb-6 flex-grow">
									<li>Basic analysis of uploaded data</li>
									<li>Up to 3 action plans</li>
									<li>Limited mind map visualization</li>
									<li>Basic progress tracking</li>
									<li>Community support</li>
								</ul>
								<Button className="w-full" variant="outline">
									Current Plan
								</Button>
							</div>

							{/* Plus Plan */}
							<div className="border rounded-lg p-6 flex flex-col bg-gray-50 dark:bg-gray-900">
								<h3 className="text-xl font-bold mb-2">Plus</h3>
								<p className="text-2xl font-bold mb-1">$9.99</p>
								<p className="text-sm text-muted-foreground mb-4">per month</p>
								<ul className="list-disc pl-6 space-y-2 mb-6 flex-grow">
									<li>Advanced data analysis</li>
									<li>Unlimited action plans</li>
									<li>Full mind map visualization</li>
									<li>Detailed progress tracking</li>
									<li>Priority support</li>
									<li>AI-generated action plans</li>
									<li>Export capabilities</li>
								</ul>
								<Button className="w-full">Upgrade to Plus</Button>
							</div>

							{/* Premium Plan */}
							<div className="border rounded-lg p-6 flex flex-col border-rose-200 dark:border-rose-900">
								<div className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-2">
									MOST POPULAR
								</div>
								<h3 className="text-xl font-bold mb-2">Premium</h3>
								<p className="text-2xl font-bold mb-1">$19.99</p>
								<p className="text-sm text-muted-foreground mb-4">per month</p>
								<ul className="list-disc pl-6 space-y-2 mb-6 flex-grow">
									<li>Everything in Plus</li>
									<li>Advanced AI insights</li>
									<li>Personalized coaching</li>
									<li>Integration with other apps</li>
									<li>Team sharing capabilities</li>
									<li>White-glove support</li>
									<li>Early access to new features</li>
								</ul>
								<Button className="w-full bg-rose-500 hover:bg-rose-600">
									Upgrade to Premium
								</Button>
							</div>
						</div>

						<HelpTip className="mt-6">
							Annual billing offers a 20% discount compared to monthly billing.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Feature Comparison</h2>

						<div className="overflow-x-auto">
							<table className="w-full border-collapse">
								<thead>
									<tr className="border-b">
										<th className="text-left py-4 px-4">Feature</th>
										<th className="text-left py-4 px-4">Free</th>
										<th className="text-left py-4 px-4">Plus</th>
										<th className="text-left py-4 px-4">Premium</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<td className="py-4 px-4">Analysis Uploads</td>
										<td className="py-4 px-4">3 per month</td>
										<td className="py-4 px-4">Unlimited</td>
										<td className="py-4 px-4">Unlimited</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Action Plans</td>
										<td className="py-4 px-4">3 total</td>
										<td className="py-4 px-4">Unlimited</td>
										<td className="py-4 px-4">Unlimited</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Mind Map Complexity</td>
										<td className="py-4 px-4">Basic</td>
										<td className="py-4 px-4">Advanced</td>
										<td className="py-4 px-4">Advanced+</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">AI-Generated Plans</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">✅</td>
										<td className="py-4 px-4">✅</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Progress Tracking</td>
										<td className="py-4 px-4">Basic</td>
										<td className="py-4 px-4">Detailed</td>
										<td className="py-4 px-4">Advanced</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Export Options</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">✅</td>
										<td className="py-4 px-4">✅</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Personalized Coaching</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">✅</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">App Integrations</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">Limited</td>
										<td className="py-4 px-4">Full</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Team Sharing</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">❌</td>
										<td className="py-4 px-4">✅</td>
									</tr>
									<tr className="border-b">
										<td className="py-4 px-4">Support</td>
										<td className="py-4 px-4">Community</td>
										<td className="py-4 px-4">Priority</td>
										<td className="py-4 px-4">White-glove</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Subscribing to a Plan
						</h2>
						<p className="mb-4">
							Ready to upgrade your Next You experience? Follow these steps:
						</p>

						<HelpStepByStep
							steps={[
								"Click on your profile picture in the top-right corner",
								"Select 'Settings' from the dropdown menu",
								"Click on the 'Subscription' tab",
								"Review the available plans",
								"Click 'Upgrade' on your desired plan",
								"Choose between monthly or annual billing",
								"Enter your payment information",
								"Review your order and click 'Subscribe'",
							]}
						/>

						<HelpScreenshot
							src="/placeholder.svg?height=300&width=600&query=screenshot of subscription page with payment form"
							alt="Subscription Page"
							caption="The subscription page where you can upgrade your plan"
						/>

						<HelpTip>
							Annual subscriptions include a 20% discount compared to monthly
							billing.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Managing Your Subscription
						</h2>
						<p className="mb-4">
							You can manage your subscription at any time:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Subscription",
								"View your current plan and billing information",
								"To change plans: Click 'Change Plan' and select a new option",
								"To update payment method: Click 'Update Payment Method'",
								"To cancel: Click 'Cancel Subscription' at the bottom of the page",
							]}
						/>

						<HelpWarning>
							When canceling, your premium features will remain active until the
							end of your current billing period.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Billing and Receipts
						</h2>
						<p className="mb-4">Access your billing history and receipts:</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Subscription",
								"Scroll down to the 'Billing History' section",
								"View a list of all past transactions",
								"Click 'View Receipt' next to any transaction to download a PDF receipt",
								"For invoice requests, click 'Request Invoice' next to the transaction",
							]}
						/>
					</section>

					<HelpFAQ
						questions={[
							{
								question: "Can I switch between monthly and annual billing?",
								answer:
									"Yes, you can switch between billing cycles when renewing your subscription or changing plans.",
							},
							{
								question: "What happens to my data if I downgrade?",
								answer:
									"If you downgrade to a plan with more limited features, you'll retain access to all your data, but some features may become unavailable. For example, if you have more than 3 action plans and downgrade to Free, you won't be able to create new ones until you're below the limit.",
							},
							{
								question: "Do you offer refunds?",
								answer:
									"We offer a 14-day money-back guarantee for new subscriptions. Contact support within 14 days of your initial purchase for a full refund.",
							},
							{
								question: "Is there a student discount?",
								answer:
									"Yes, we offer a 50% discount for verified students. Contact support with proof of enrollment to apply for the student discount.",
							},
							{
								question: "Can I try premium features before subscribing?",
								answer:
									"New users can access a 7-day free trial of Premium features. Navigate to Settings > Subscription to start your trial.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Account Setup", href: "/help/account-setup" },
							{ title: "Profile Management", href: "/help/profile-management" },
							{ title: "Data Export", href: "/help/data-export" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
