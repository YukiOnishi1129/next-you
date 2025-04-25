import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";

import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";

import { HelpWarning } from "@/features/help/components/HelpWarning";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";

import { CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function PasswordResetPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Password Reset"
				description="How to reset your password and regain access to your account."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Standard Password Reset Process
						</h2>
						<p className="mb-4">
							Follow these steps to reset your password if you can't log in.
						</p>

						<HelpStepByStep
							steps={[
								<>
									<h3 key="h3-1" className="font-medium">
										Go to the login page
									</h3>
									<p key="p-1" className="text-sm text-muted-foreground mt-1">
										Navigate to{" "}
										<Link
											href="/login"
											className="text-primary hover:underline"
										>
											nextYou.com/login
										</Link>{" "}
										in your web browser.
									</p>
								</>,
								<>
									<h3 key="h3-2" className="font-medium">
										Click "Forgot Password"
									</h3>
									<p key="p-2" className="text-sm text-muted-foreground mt-1">
										Look for the "Forgot Password?" link below the login form
										and click it.
									</p>
								</>,
								<>
									<h3 key="h3-3" className="font-medium">
										Enter your email address
									</h3>
									<p key="p-3" className="text-sm text-muted-foreground mt-1">
										Enter the email address associated with your Next You
										account and click "Send Reset Link".
									</p>
									<div
										key="div-1"
										className="mt-2 p-3 bg-muted rounded-md flex items-center"
									>
										<Mail className="h-5 w-5 text-primary mr-2" />
										<span className="text-sm">
											Make sure to use the email address you registered with.
										</span>
									</div>
								</>,
								<>
									<h3 key="h3-4" className="font-medium">
										Check your email
									</h3>
									<p key="p-4" className="text-sm text-muted-foreground mt-1">
										Open your email inbox and look for a message from Next You
										with the subject "Reset Your Password". If you don't see it,
										check your spam or junk folder.
									</p>
								</>,
								<>
									<h3 key="h3-5" className="font-medium">
										Click the reset link
									</h3>
									<p key="p-5" className="text-sm text-muted-foreground mt-1">
										Open the email and click the "Reset Password" button or link
										provided.
									</p>
									<HelpWarning key="warning-1">
										The reset link is valid for 30 minutes only. If it expires,
										you'll need to request a new one.
									</HelpWarning>
								</>,
								<>
									<h3 key="h3-6" className="font-medium">
										Create a new password
									</h3>
									<p key="p-6" className="text-sm text-muted-foreground mt-1">
										Enter your new password twice to confirm it. Make sure it's
										secure by using a mix of letters, numbers, and special
										characters.
									</p>
								</>,
								<>
									<h3 key="h3-7" className="font-medium">
										Submit and log in
									</h3>
									<p key="p-7" className="text-sm text-muted-foreground mt-1">
										Click "Reset Password" to save your new password. You'll be
										redirected to the login page where you can sign in with your
										new password.
									</p>
									<div
										key="div-2"
										className="mt-2 p-3 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-md flex items-start"
									>
										<CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
										<span className="text-sm">
											Success! Your password has been reset and you can now
											access your account.
										</span>
									</div>
								</>,
							]}
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Troubleshooting Password Reset Issues
						</h2>
						<p className="mb-4">
							Solutions for common problems during the password reset process.
						</p>

						<div className="space-y-4">
							<div>
								<h3 className="font-medium">
									I didn't receive the reset email
								</h3>
								<ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm text-muted-foreground">
									<li>Check your spam or junk folder</li>
									<li>Verify you entered the correct email address</li>
									<li>Wait 5-10 minutes as emails can sometimes be delayed</li>
									<li>Try requesting another reset email after 15 minutes</li>
									<li>
										Add no-reply@nextyou.com to your contacts/safe senders list
									</li>
								</ul>
							</div>

							<div className="mt-4">
								<h3 className="font-medium">The reset link has expired</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Reset links are valid for 30 minutes. If your link has
									expired, simply return to the login page and request a new
									password reset.
								</p>
							</div>

							<div className="mt-4">
								<h3 className="font-medium">
									I don't remember which email I used
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									If you have multiple email addresses and can't remember which
									one you used to register:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm text-muted-foreground">
									<li>Try each email address you might have used</li>
									<li>
										Check your email accounts for previous communications from
										Next You
									</li>
									<li>
										If you still can't access your account, contact support with
										as much information as possible about your account
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Account Security Best Practices
						</h2>
						<p className="mb-4">
							Tips for keeping your Next You account secure.
						</p>

						<div className="space-y-4">
							<div>
								<h3 className="font-medium">Create a strong password</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Use a unique password that is:
								</p>
								<ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm text-muted-foreground">
									<li>At least 12 characters long</li>
									<li>Contains uppercase and lowercase letters</li>
									<li>Includes numbers and special characters</li>
									<li>Not used for any other accounts</li>
								</ul>
							</div>

							<div className="mt-4">
								<h3 className="font-medium">
									Enable two-factor authentication
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									For additional security, enable two-factor authentication in
									your account settings. This adds an extra layer of protection
									by requiring a code from your mobile device when logging in.
								</p>
							</div>

							<div className="mt-4">
								<h3 className="font-medium">Regularly update your password</h3>
								<p className="text-sm text-muted-foreground mt-1">
									Change your password periodically, especially if you suspect
									any security issues with your account.
								</p>
							</div>
						</div>
					</section>

					<HelpRelatedArticles
						articles={[
							{ title: "Account Setup Guide", href: "/help/account-setup" },
							{ title: "Login Problems", href: "/help/login-issues" },
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
