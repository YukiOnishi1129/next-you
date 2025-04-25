import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { AlertCircle, ArrowLeft, CheckCircle, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

export const metadata: Metadata = {
	title: "Password Reset | Next You Help Center",
	description:
		"Learn how to reset your password and regain access to your Next You account.",
};

export default function PasswordResetPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-4xl py-10">
				<div className="mb-8">
					<Link
						href="/help"
						className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Help Center
					</Link>
					<h1 className="text-4xl font-bold mb-2">Password Reset</h1>
					<p className="text-xl text-muted-foreground">
						How to reset your password and regain access to your account.
					</p>
				</div>

				<div className="space-y-8">
					<Card>
						<CardHeader>
							<CardTitle>Standard Password Reset Process</CardTitle>
							<CardDescription>
								Follow these steps to reset your password if you can't log in.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ol className="space-y-6 mt-2">
								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">1</span>
									</div>
									<div>
										<h3 className="font-medium">Go to the login page</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Navigate to{" "}
											<Link
												href="/login"
												className="text-primary hover:underline"
											>
												nextYou.com/login
											</Link>{" "}
											in your web browser.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">2</span>
									</div>
									<div>
										<h3 className="font-medium">Click "Forgot Password"</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Look for the "Forgot Password?" link below the login form
											and click it.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">3</span>
									</div>
									<div>
										<h3 className="font-medium">Enter your email address</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Enter the email address associated with your Next You
											account and click "Send Reset Link".
										</p>
										<div className="mt-2 p-3 bg-muted rounded-md flex items-center">
											<Mail className="h-5 w-5 text-primary mr-2" />
											<span className="text-sm">
												Make sure to use the email address you registered with.
											</span>
										</div>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">4</span>
									</div>
									<div>
										<h3 className="font-medium">Check your email</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Open your email inbox and look for a message from Next You
											with the subject "Reset Your Password". If you don't see
											it, check your spam or junk folder.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">5</span>
									</div>
									<div>
										<h3 className="font-medium">Click the reset link</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Open the email and click the "Reset Password" button or
											link provided.
										</p>
										<div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded-r-md">
											<p className="text-sm flex items-start">
												<AlertCircle className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
												<span>
													The reset link is valid for 30 minutes only. If it
													expires, you'll need to request a new one.
												</span>
											</p>
										</div>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">6</span>
									</div>
									<div>
										<h3 className="font-medium">Create a new password</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Enter your new password twice to confirm it. Make sure
											it's secure by using a mix of letters, numbers, and
											special characters.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="mr-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<span className="font-medium text-primary">7</span>
									</div>
									<div>
										<h3 className="font-medium">Submit and log in</h3>
										<p className="text-sm text-muted-foreground mt-1">
											Click "Reset Password" to save your new password. You'll
											be redirected to the login page where you can sign in with
											your new password.
										</p>
										<div className="mt-2 p-3 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-md flex items-start">
											<CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
											<span className="text-sm">
												Success! Your password has been reset and you can now
												access your account.
											</span>
										</div>
									</div>
								</li>
							</ol>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Troubleshooting Password Reset Issues</CardTitle>
							<CardDescription>
								Solutions for common problems during the password reset process.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="font-medium">
										I didn't receive the reset email
									</h3>
									<ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm text-muted-foreground">
										<li>Check your spam or junk folder</li>
										<li>Verify you entered the correct email address</li>
										<li>
											Wait 5-10 minutes as emails can sometimes be delayed
										</li>
										<li>Try requesting another reset email after 15 minutes</li>
										<li>
											Add no-reply@nextyou.com to your contacts/safe senders
											list
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
										If you have multiple email addresses and can't remember
										which one you used to register:
									</p>
									<ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm text-muted-foreground">
										<li>Try each email address you might have used</li>
										<li>
											Check your email accounts for previous communications from
											Next You
										</li>
										<li>
											If you still can't access your account, contact support
											with as much information as possible about your account
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Account Security Best Practices</CardTitle>
							<CardDescription>
								Tips for keeping your Next You account secure.
							</CardDescription>
						</CardHeader>
						<CardContent>
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
										your account settings. This adds an extra layer of
										protection by requiring a code from your mobile device when
										logging in.
									</p>
								</div>

								<div className="mt-4">
									<h3 className="font-medium">
										Regularly update your password
									</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Change your password periodically, especially if you suspect
										any security issues with your account.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="bg-muted p-6 rounded-lg">
						<h2 className="text-xl font-semibold mb-4">
							Related Help Articles
						</h2>
						<div className="grid gap-3 md:grid-cols-2">
							<Link
								href="/help/account-setup"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Account Setup Guide</h3>
								<p className="text-sm text-muted-foreground">
									Learn how to set up and configure your account.
								</p>
							</Link>
							<Link
								href="/help/login-issues"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Login Problems</h3>
								<p className="text-sm text-muted-foreground">
									Troubleshoot common login issues.
								</p>
							</Link>
							<Link
								href="/help/privacy-settings"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Privacy Settings</h3>
								<p className="text-sm text-muted-foreground">
									Manage your account privacy and security settings.
								</p>
							</Link>
							<Link
								href="/help/account-deletion"
								className="block p-3 rounded-md hover:bg-background"
							>
								<h3 className="font-medium">Account Deletion</h3>
								<p className="text-sm text-muted-foreground">
									How to delete your account if needed.
								</p>
							</Link>
						</div>
					</div>

					<div className="text-center py-6">
						<h2 className="text-xl font-semibold mb-4">Still need help?</h2>
						<p className="mb-4 text-muted-foreground">
							If you're still having trouble resetting your password, our
							support team is ready to assist you.
						</p>
						<Button asChild>
							<Link href="/contact">Contact Support</Link>
						</Button>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
