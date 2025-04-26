import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpScreenshot } from "@/features/help/components/HelpScreenshot";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
export default function ProfileManagementPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Managing Your Profile"
				description="Learn how to update and manage your Next You profile information."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Your Next You Profile
						</h2>
						<p className="mb-4">
							Your profile contains your personal information, preferences, and
							settings. Keeping your profile up-to-date ensures you get the most
							out of Next You and helps us provide personalized recommendations
							and insights.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Accessing Your Profile Settings
						</h2>

						<HelpStepByStep
							steps={[
								"Click on your profile picture in the top-right corner of any page",
								"Select 'Settings' from the dropdown menu",
								"Click on the 'Profile' tab in the settings page",
							]}
						/>

						<HelpScreenshot
							src="/profile-settings-form.png"
							alt="Profile Settings Page"
							caption="The profile settings page where you can update your personal information"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Updating Personal Information
						</h2>
						<p className="mb-4">
							You can update the following personal information in your profile:
						</p>

						<ul className="list-disc pl-6 space-y-2 mb-4">
							<li>Full name</li>
							<li>Display name (shown to others)</li>
							<li>Email address</li>
							<li>Phone number (optional)</li>
							<li>Date of birth (optional)</li>
							<li>Location (optional)</li>
							<li>Bio/About me (optional)</li>
						</ul>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Profile",
								"Update the fields you wish to change",
								"Click 'Save Changes' at the bottom of the form",
								"You'll see a confirmation message when your changes are saved",
							]}
						/>

						<HelpTip>
							Changing your email address will require verification. We'll send
							a verification link to your new email address.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Profile Picture</h2>
						<p className="mb-4">
							Your profile picture helps personalize your Next You experience:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Profile",
								"Click on the profile picture or the 'Change Photo' button",
								"Choose to upload a new image or select from provided avatars",
								"For uploads: Select an image from your device (JPG, PNG, or GIF, max 5MB)",
								"Crop and adjust the image as needed",
								"Click 'Save' to update your profile picture",
							]}
						/>

						<HelpScreenshot
							src="/profile-upload-crop.png"
							alt="Profile Picture Upload"
							caption="The profile picture upload and crop interface"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Preferences and Interests
						</h2>
						<p className="mb-4">
							Setting your preferences and interests helps us provide more
							relevant insights and recommendations:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Profile",
								"Scroll down to the 'Interests & Preferences' section",
								"Select categories that interest you",
								"Adjust preference sliders for different types of content",
								"Click 'Save Preferences' to update",
							]}
						/>

						<HelpTip>
							Regularly updating your interests helps our AI provide more
							accurate and relevant action plans.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Language and Regional Settings
						</h2>
						<p className="mb-4">
							You can customize your language and regional preferences:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Profile",
								"Scroll down to the 'Language & Region' section",
								"Select your preferred language from the dropdown",
								"Choose your time zone",
								"Select date and time format preferences",
								"Click 'Save' to update your settings",
							]}
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Linked Accounts</h2>
						<p className="mb-4">
							You can link other accounts to your Next You profile for easier
							login and data integration:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Profile",
								"Scroll down to the 'Linked Accounts' section",
								"Click 'Connect' next to the service you want to link (Google, Apple, etc.)",
								"Follow the authentication process for that service",
								"Once connected, you'll see a 'Connected' status",
							]}
						/>

						<HelpTip>
							Linking accounts allows for single sign-on and can enable
							additional features like calendar integration.
						</HelpTip>
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
								"Choose your visibility preference (Public, Friends Only, Private)",
								"Use the toggles to control visibility of specific profile elements",
								"Click 'Save Privacy Settings' to update",
							]}
						/>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/privacy-settings">
									Learn more about privacy settings
								</Link>
							</Button>
						</div>
					</section>

					<HelpRelatedArticles
						articles={[
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
							{ title: "Account Setup", href: "/help/account-setup" },
							{ title: "Password Reset", href: "/help/password-reset" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
