import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import {
	ArrowLeft,
	Copy,
	FileText,
	Globe,
	Lock,
	Mail,
	Share2,
	Users,
} from "lucide-react";
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
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";

export const metadata: Metadata = {
	title: "Sharing Results - Help Center | NextYou",
	description: "Learn how to share your analyses and action plans with others",
};

export default function SharingResultsPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-4xl py-6 lg:py-10">
				<Button asChild variant="ghost" className="mb-6">
					<Link href="/help">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Help Center
					</Link>
				</Button>

				<div className="space-y-6">
					<h1 className="text-3xl font-bold tracking-tight">
						Sharing Your Results
					</h1>
					<p className="text-muted-foreground">
						Learn how to share your analyses, insights, and action plans with
						others.
					</p>

					<div className="space-y-8 mt-8">
						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Why Share Your Results?
							</h2>
							<p className="mb-4">
								Sharing your NextYou results can be beneficial for various
								reasons:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Get feedback and perspectives from trusted friends or mentors
								</li>
								<li>
									Collaborate with coaches or therapists on your personal growth
									journey
								</li>
								<li>
									Create accountability by sharing action plans with partners
								</li>
								<li>Demonstrate your progress and insights to others</li>
								<li>
									Use your analyses as discussion points in personal or
									professional development contexts
								</li>
							</ul>
						</section>

						<Tabs defaultValue="privacy" className="mt-8">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="privacy">Privacy Options</TabsTrigger>
								<TabsTrigger value="methods">Sharing Methods</TabsTrigger>
								<TabsTrigger value="collaboration">Collaboration</TabsTrigger>
							</TabsList>

							<TabsContent value="privacy" className="space-y-6 pt-4">
								<section>
									<h2 className="text-2xl font-semibold mb-4">
										Privacy & Sharing Options
									</h2>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<Card>
											<CardHeader className="pb-2">
												<CardTitle className="flex items-center">
													<Lock className="mr-2 h-5 w-5 text-rose-500" />
													Private
												</CardTitle>
												<CardDescription>Default setting</CardDescription>
											</CardHeader>
											<CardContent>
												<p className="text-sm">
													Your analyses and action plans are visible only to
													you. No one else can access your data.
												</p>
											</CardContent>
										</Card>

										<Card>
											<CardHeader className="pb-2">
												<CardTitle className="flex items-center">
													<Users className="mr-2 h-5 w-5 text-rose-500" />
													Shared with Specific People
												</CardTitle>
												<CardDescription>Controlled access</CardDescription>
											</CardHeader>
											<CardContent>
												<p className="text-sm">
													Share with specific individuals via email. You control
													exactly who can view your data.
												</p>
											</CardContent>
										</Card>

										<Card>
											<CardHeader className="pb-2">
												<CardTitle className="flex items-center">
													<Globe className="mr-2 h-5 w-5 text-rose-500" />
													Public Link
												</CardTitle>
												<CardDescription>Anyone with the link</CardDescription>
											</CardHeader>
											<CardContent>
												<p className="text-sm">
													Create a public link that can be accessed by anyone
													who has it. No login required.
												</p>
											</CardContent>
										</Card>
									</div>

									<div className="mt-6">
										<h3 className="text-xl font-medium mb-2">
											Setting Privacy Levels
										</h3>
										<ol className="list-decimal pl-6 space-y-2">
											<li>
												Navigate to the analysis or action plan you want to
												share
											</li>
											<li>Click the "Share" button in the top-right corner</li>
											<li>
												Select your desired privacy level from the dropdown menu
											</li>
											<li>
												If choosing "Shared with Specific People," enter email
												addresses of recipients
											</li>
											<li>Click "Apply" to save your privacy settings</li>
										</ol>
									</div>
								</section>
							</TabsContent>

							<TabsContent value="methods" className="space-y-6 pt-4">
								<section>
									<h2 className="text-2xl font-semibold mb-4">
										Ways to Share Your Results
									</h2>

									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-medium mb-2 flex items-center">
												<Share2 className="mr-2 h-5 w-5 text-rose-500" />
												Direct Link Sharing
											</h3>
											<p className="mb-2">
												Generate a link that provides access to your analysis or
												action plan:
											</p>
											<ol className="list-decimal pl-6 space-y-2">
												<li>Open the item you want to share</li>
												<li>Click the "Share" button</li>
												<li>Select "Create Link"</li>
												<li>
													Choose the access level (view only or can comment)
												</li>
												<li>
													Copy the generated link and share it via your
													preferred method
												</li>
											</ol>
											<div className="mt-4 flex items-center gap-2">
												<Button
													variant="outline"
													size="sm"
													className="flex items-center gap-2"
												>
													<Copy className="h-4 w-4" />
													Copy Link
												</Button>
												<p className="text-xs text-muted-foreground">
													You can revoke access to shared links at any time
												</p>
											</div>
										</div>

										<div>
											<h3 className="text-xl font-medium mb-2 flex items-center">
												<Mail className="mr-2 h-5 w-5 text-rose-500" />
												Email Sharing
											</h3>
											<p className="mb-2">
												Send your results directly to someone's email:
											</p>
											<ol className="list-decimal pl-6 space-y-2">
												<li>Open the item you want to share</li>
												<li>Click the "Share" button</li>
												<li>Select "Share via Email"</li>
												<li>Enter recipient email addresses</li>
												<li>Add an optional personal message</li>
												<li>Click "Send" to deliver the invitation</li>
											</ol>
											<p className="mt-2 text-sm text-muted-foreground">
												Recipients will receive an email with a link to view
												your shared content. They may need to create a free
												NextYou account if they don't already have one.
											</p>
										</div>

										<div>
											<h3 className="text-xl font-medium mb-2 flex items-center">
												<FileText className="mr-2 h-5 w-5 text-rose-500" />
												PDF Export
											</h3>
											<p className="mb-2">
												Create a PDF document of your analysis or action plan:
											</p>
											<ol className="list-decimal pl-6 space-y-2">
												<li>Open the item you want to share</li>
												<li>Click the "Export" button</li>
												<li>Select "PDF" as the export format</li>
												<li>Choose which sections to include in the export</li>
												<li>Click "Generate PDF"</li>
												<li>
													Download and share the PDF file through any method
												</li>
											</ol>
											<p className="mt-2 text-sm text-muted-foreground">
												PDF exports create a static snapshot of your data at the
												time of export. They won't update if you make changes to
												your analysis or action plan later.
											</p>
										</div>
									</div>
								</section>
							</TabsContent>

							<TabsContent value="collaboration" className="space-y-6 pt-4">
								<section>
									<h2 className="text-2xl font-semibold mb-4">
										Collaborative Features
									</h2>

									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-medium mb-2">
												Comments & Feedback
											</h3>
											<p className="mb-2">
												When you share your results with others, they can
												provide feedback through comments:
											</p>
											<ul className="list-disc pl-6 space-y-2">
												<li>
													Viewers can add comments to specific sections of your
													analysis or action plan
												</li>
												<li>
													You'll receive notifications when someone comments on
													your shared content
												</li>
												<li>
													Engage in threaded discussions to explore insights
													more deeply
												</li>
												<li>
													Control whether viewers can comment by adjusting
													sharing permissions
												</li>
											</ul>
										</div>

										<div>
											<h3 className="text-xl font-medium mb-2">
												Permission Levels
											</h3>
											<p className="mb-2">
												You can set different permission levels when sharing:
											</p>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<Card>
													<CardHeader className="pb-2">
														<CardTitle>View Only</CardTitle>
													</CardHeader>
													<CardContent>
														<ul className="list-disc pl-4 text-sm">
															<li>Can see all shared content</li>
															<li>Cannot add comments</li>
															<li>Cannot make any changes</li>
														</ul>
													</CardContent>
												</Card>

												<Card>
													<CardHeader className="pb-2">
														<CardTitle>Can Comment</CardTitle>
													</CardHeader>
													<CardContent>
														<ul className="list-disc pl-4 text-sm">
															<li>Can see all shared content</li>
															<li>Can add comments and reply to discussions</li>
															<li>Cannot make direct changes to content</li>
														</ul>
													</CardContent>
												</Card>
											</div>
										</div>

										<div>
											<h3 className="text-xl font-medium mb-2">
												Managing Shared Content
											</h3>
											<p className="mb-2">
												Keep track of and manage all your shared content:
											</p>
											<ol className="list-decimal pl-6 space-y-2">
												<li>Go to "Settings" in your dashboard</li>
												<li>Select the "Sharing" tab</li>
												<li>View a list of all items you've shared</li>
												<li>See who has access to each item</li>
												<li>
													Revoke access or change permission levels as needed
												</li>
												<li>See view statistics for shared content</li>
											</ol>
										</div>
									</div>
								</section>
							</TabsContent>
						</Tabs>

						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Best Practices for Sharing
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="font-medium">
										Be Selective About What You Share
									</h3>
									<p className="text-muted-foreground">
										Consider carefully what information you want to share. You
										can share specific analyses or action plans without sharing
										your entire profile or history.
									</p>
								</div>

								<div>
									<h3 className="font-medium">Review Before Sharing</h3>
									<p className="text-muted-foreground">
										Always review the content before sharing it. Use the
										"Preview" option to see exactly what others will see when
										you share your results.
									</p>
								</div>

								<div>
									<h3 className="font-medium">Set Clear Expectations</h3>
									<p className="text-muted-foreground">
										When sharing with others, let them know what kind of
										feedback you're looking for and how you plan to use their
										input.
									</p>
								</div>

								<div>
									<h3 className="font-medium">
										Regularly Audit Shared Content
									</h3>
									<p className="text-muted-foreground">
										Periodically review what you've shared and with whom. Revoke
										access when it's no longer needed.
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">
								Frequently Asked Questions
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="font-medium">
										Can I see who has viewed my shared content?
									</h3>
									<p className="text-muted-foreground">
										Yes, for content shared via direct links or email, you can
										see view statistics in the "Sharing" section of your
										Settings.
									</p>
								</div>

								<div>
									<h3 className="font-medium">
										How do I stop sharing something I've already shared?
									</h3>
									<p className="text-muted-foreground">
										Go to the "Sharing" tab in Settings, find the item you want
										to stop sharing, and click "Revoke Access." This will
										immediately prevent anyone from accessing the shared
										content.
									</p>
								</div>

								<div>
									<h3 className="font-medium">
										Do people need a NextYou account to view my shared content?
									</h3>
									<p className="text-muted-foreground">
										It depends on the sharing method. Public links can be viewed
										without an account, but email sharing typically requires
										recipients to create a free account for security purposes.
									</p>
								</div>

								<div>
									<h3 className="font-medium">
										Can I share only parts of an analysis or action plan?
									</h3>
									<p className="text-muted-foreground">
										Yes, when creating a PDF export, you can select which
										sections to include. For direct sharing, you can use the
										"Custom Sharing" option to select specific sections to
										share.
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
							<p>
								If you have additional questions about sharing your results or
								need assistance, please visit our
								<Link
									href="/help/common-issues"
									className="text-rose-500 hover:text-rose-600 mx-1"
								>
									Common Issues
								</Link>
								page or
								<Link
									href="/contact"
									className="text-rose-500 hover:text-rose-600 mx-1"
								>
									contact our support team
								</Link>
								.
							</p>
						</section>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
