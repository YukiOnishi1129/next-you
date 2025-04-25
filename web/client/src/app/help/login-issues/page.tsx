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

export default function LoginIssuesPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Login Problems"
				description="Troubleshoot and resolve common login issues with your Next You account."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Common Login Problems
						</h2>
						<p className="mb-4">
							Having trouble logging into your Next You account? This guide
							covers the most common login issues and provides step-by-step
							solutions to get you back into your account quickly.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Forgotten Password</h2>
						<p className="mb-4">
							If you can't remember your password, you can easily reset it:
						</p>

						<HelpStepByStep
							steps={[
								"Go to the login page at nextyou.com/login",
								"Click the 'Forgot Password' link below the login form",
								"Enter the email address associated with your account",
								"Click 'Send Reset Link'",
								"Check your email inbox for a message from Next You",
								"Click the password reset link in the email",
								"Create a new password that meets our security requirements",
								"Click 'Reset Password' to save your new password",
								"Log in with your new password",
							]}
						/>

						<HelpScreenshot
							src="/password-reset-email-form.png"
							alt="Password Reset Form"
							caption="The password reset form where you enter your email address"
						/>

						<HelpTip>
							Password reset links expire after 24 hours. If you don't use the
							link within that time, you'll need to request a new one.
						</HelpTip>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/password-reset">
									Detailed password reset guide
								</Link>
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Account Locked</h2>
						<p className="mb-4">
							Your account may be temporarily locked after multiple failed login
							attempts:
						</p>

						<HelpStepByStep
							steps={[
								"Wait 30 minutes for the automatic account unlock",
								"Use the 'Forgot Password' option to reset your password",
								"After resetting your password, you'll be able to log in again",
							]}
						/>

						<HelpWarning>
							If you didn't attempt these logins, your account may have been
							targeted. We recommend changing your password immediately and
							enabling two-factor authentication.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Email Not Recognized
						</h2>
						<p className="mb-4">
							If the system doesn't recognize your email address:
						</p>

						<HelpStepByStep
							steps={[
								"Check for typos in your email address",
								"Try alternative email addresses you might have used",
								"Check if you signed up using a social login (Google, Apple, etc.)",
								"If you're sure you have an account but can't access it, contact support",
							]}
						/>

						<HelpTip>
							If you previously logged in with a social account (Google, Apple,
							etc.), try clicking the appropriate social login button instead of
							entering an email and password.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Two-Factor Authentication Issues
						</h2>
						<p className="mb-4">
							If you're having trouble with two-factor authentication:
						</p>

						<HelpStepByStep
							steps={[
								"Ensure your device's time and date are set correctly",
								"If using an authenticator app, verify you're using the correct code",
								"Try using one of your backup codes (if you saved them)",
								"If you've lost access to your authentication device, contact support",
							]}
						/>

						<HelpWarning>
							Always save your backup codes in a secure location when setting up
							two-factor authentication.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Social Login Problems
						</h2>
						<p className="mb-4">
							If you're having trouble logging in with Google, Apple, or other
							social accounts:
						</p>

						<HelpStepByStep
							steps={[
								"Ensure you're selecting the same social login method you used when creating your account",
								"Make sure you're logged into your social account in another browser tab",
								"Clear your browser cookies and cache",
								"Try using a different browser",
								"If you've changed your social account email, you may need to contact support",
							]}
						/>

						<HelpTip>
							If you've previously used both email/password and social login,
							either method should work to access your account.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Browser Issues</h2>
						<p className="mb-4">
							Sometimes browser settings can interfere with login:
						</p>

						<HelpStepByStep
							steps={[
								"Enable cookies in your browser settings",
								"Disable any ad blockers or privacy extensions temporarily",
								"Clear your browser cache and cookies",
								"Try using a private/incognito window",
								"Try a different browser (Chrome, Firefox, Safari, or Edge)",
							]}
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Account Deactivated</h2>
						<p className="mb-4">
							If you receive a message that your account has been deactivated:
						</p>

						<HelpStepByStep
							steps={[
								"Check your email for any notifications about account deactivation",
								"If you deactivated it yourself, you can reactivate it by logging in within 30 days",
								"If you believe your account was deactivated in error, contact support",
							]}
						/>

						<HelpWarning>
							Accounts that have been deactivated for more than 30 days may be
							permanently deleted.
						</HelpWarning>
					</section>

					<HelpFAQ
						questions={[
							{
								question:
									"I never received the password reset email. What should I do?",
								answer:
									"First, check your spam or junk folder. If you still don't see it, try adding support@nextyou.com to your contacts and request another reset email. If you still don't receive it after 15 minutes, contact support.",
							},
							{
								question:
									"Can I log in with a different email than I signed up with?",
								answer:
									"No, you must use the same email address you used during registration. If you need to change your email address, log in first and then update it in your profile settings.",
							},
							{
								question:
									"What should I do if I suspect someone else is trying to access my account?",
								answer:
									"Immediately reset your password and enable two-factor authentication if you haven't already. Also contact support to report the suspicious activity.",
							},
							{
								question:
									"I'm getting an 'invalid credentials' error but I know my password is correct. Why?",
								answer:
									"This could be due to case sensitivity in your email address or password, or there might be invisible spaces in your input. Try typing your credentials carefully or copy-pasting from a plain text editor.",
							},
							{
								question:
									"How can I recover my account if I no longer have access to my email?",
								answer:
									"Contact our support team with as much information about your account as possible. They may ask for verification details to confirm your identity before helping you regain access.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Password Reset", href: "/help/password-reset" },
							{ title: "Account Security", href: "/help/account-security" },
							{
								title: "Two-Factor Authentication",
								href: "/help/two-factor-authentication",
							},
							{ title: "Common Issues", href: "/help/common-issues" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
