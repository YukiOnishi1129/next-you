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
import Link from "next/link";

export default function PrivacySettingsPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Privacy Settings"
				description="Learn how to manage your privacy settings and control your data in Next You."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Understanding Your Privacy Options
						</h2>
						<p className="mb-4">
							Next You gives you control over your personal data and how it's
							used. This guide explains all the privacy settings available and
							how to configure them according to your preferences.
						</p>

						<HelpTip>
							We recommend reviewing your privacy settings regularly, especially
							after platform updates.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Accessing Privacy Settings
						</h2>

						<HelpStepByStep
							steps={[
								"Click on your profile picture in the top-right corner",
								"Select 'Settings' from the dropdown menu",
								"Click on the 'Privacy' tab in the settings page",
							]}
						/>

						<HelpScreenshot
							src="/privacy-settings-interface.png"
							alt="Privacy Settings Page"
							caption="The privacy settings page where you can control your data and visibility"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Profile Visibility</h2>
						<p className="mb-4">
							Control who can see your profile information:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Profile Visibility' section",
								"Choose your overall visibility preference:",
								"- Public: Anyone can see your profile",
								"- Friends Only: Only connections can see your profile",
								"- Private: Only you can see your profile",
							]}
						/>

						<p className="mt-4 mb-4">
							You can also set visibility for individual profile elements:
						</p>

						<ul className="list-disc pl-6 space-y-2 mb-4">
							<li>Full name visibility</li>
							<li>Profile picture visibility</li>
							<li>Bio/About me visibility</li>
							<li>Location visibility</li>
							<li>Interests visibility</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Data Usage & AI Training
						</h2>
						<p className="mb-4">
							Control how your data is used for AI training and personalization:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Data Usage' section",
								"Use toggles to control:",
								"- Allow data for personalization",
								"- Allow anonymized data for AI training",
								"- Allow usage analytics",
							]}
						/>

						<HelpTip>
							Allowing data for personalization improves your experience but is
							not required to use Next You.
						</HelpTip>

						<HelpWarning>
							Disabling all data usage may limit some personalization features.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Action Plan & Analysis Privacy
						</h2>
						<p className="mb-4">
							Control the visibility of your action plans and analyses:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Content Privacy' section",
								"Set default visibility for new action plans:",
								"- Private (only visible to you)",
								"- Shared (visible to specific people you choose)",
								"- Public (visible to anyone)",
							]}
						/>

						<p className="mt-4 mb-4">
							You can also set default visibility for:
						</p>

						<ul className="list-disc pl-6 space-y-2 mb-4">
							<li>Analysis results</li>
							<li>Mind maps</li>
							<li>Progress tracking</li>
							<li>Categories</li>
						</ul>

						<HelpTip>
							You can always override these defaults for individual items when
							you create them.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Third-Party Connections
						</h2>
						<p className="mb-4">
							Manage which third-party services can access your Next You data:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Connected Services' section",
								"Review the list of connected services",
								"Click 'Disconnect' next to any service you want to remove",
								"For each connected service, you can also click 'Manage Permissions' to adjust what data they can access",
							]}
						/>

						<HelpScreenshot
							src="/connected-services-permissions.png"
							alt="Connected Services"
							caption="The connected services section showing third-party integrations and their permissions"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Email & Notification Privacy
						</h2>
						<p className="mb-4">
							Control what information is included in emails and notifications:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Communications' section",
								"Use toggles to control:",
								"- Include personal data in emails",
								"- Include analysis results in notifications",
								"- Allow action plan reminders with details",
							]}
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
						<p className="mb-4">Control how long your data is kept:</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Data Retention' section",
								"Choose retention periods for different data types:",
								"- Chat history",
								"- Completed action plans",
								"- Analysis history",
								"- Usage logs",
							]}
						/>

						<HelpWarning>
							Setting shorter retention periods means your data will be
							permanently deleted after the specified time. Consider exporting
							important data before it's automatically deleted.
						</HelpWarning>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/data-export">Learn about data export</Link>
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Download Your Data</h2>
						<p className="mb-4">
							You can request a complete copy of your data:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Your Data' section",
								"Click 'Request Data Export'",
								"Choose what data to include in the export",
								"Click 'Submit Request'",
								"You'll receive an email when your data is ready to download",
							]}
						/>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/data-export">
									Learn more about data export
								</Link>
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Delete Your Data</h2>
						<p className="mb-4">
							You can request deletion of specific data or your entire account:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Privacy",
								"Scroll to the 'Your Data' section",
								"For specific data: Use the 'Delete Specific Data' option",
								"For account deletion: Click 'Delete Account'",
								"Follow the confirmation steps to complete the process",
							]}
						/>

						<HelpWarning>
							Account deletion is permanent and cannot be undone. All your data
							will be permanently removed.
						</HelpWarning>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/account-deletion">
									Learn more about account deletion
								</Link>
							</Button>
						</div>
					</section>

					<HelpFAQ
						questions={[
							{
								question:
									"Can I make my action plans private after sharing them?",
								answer:
									"Yes, you can change the visibility of any action plan at any time through its settings.",
							},
							{
								question: "Does Next You share my data with third parties?",
								answer:
									"Next You only shares your data with third parties when you explicitly connect those services. You can review and manage these connections in your privacy settings.",
							},
							{
								question:
									"How long does it take to process a data deletion request?",
								answer:
									"Data deletion requests are typically processed within 30 days, though most are completed much sooner.",
							},
							{
								question:
									"Can I use Next You without allowing any data collection?",
								answer:
									"You can use basic Next You features with minimal data collection, but personalization features will be limited.",
							},
							{
								question: "Are my chat conversations with AI private?",
								answer:
									"Yes, your conversations with the AI are private by default. You can control whether they're used for AI training in your privacy settings.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Data Export", href: "/help/data-export" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
							{ title: "Profile Management", href: "/help/profile-management" },
							{ title: "Data Recovery", href: "/help/data-recovery" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
