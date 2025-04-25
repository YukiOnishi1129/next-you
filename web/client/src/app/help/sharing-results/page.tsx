import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpFAQ } from "@/features/help/components/HelpFAQ";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import { Copy, FileText, Globe, Lock, Mail, Share2, Users } from "lucide-react";

export default function SharingResultsPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Sharing Your Results"
				description="Learn how to share your analyses, insights, and action plans with others."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
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
									<div className="border rounded-lg p-6">
										<div className="flex items-center mb-2">
											<Lock className="mr-2 h-5 w-5 text-rose-500" />
											<h3 className="text-xl font-medium">Private</h3>
										</div>
										<p className="text-sm text-muted-foreground mb-2">
											Default setting
										</p>
										<p className="text-sm">
											Your analyses and action plans are visible only to you. No
											one else can access your data.
										</p>
									</div>

									<div className="border rounded-lg p-6">
										<div className="flex items-center mb-2">
											<Users className="mr-2 h-5 w-5 text-rose-500" />
											<h3 className="text-xl font-medium">
												Shared with Specific People
											</h3>
										</div>
										<p className="text-sm text-muted-foreground mb-2">
											Controlled access
										</p>
										<p className="text-sm">
											Share with specific individuals via email. You control
											exactly who can view your data.
										</p>
									</div>

									<div className="border rounded-lg p-6">
										<div className="flex items-center mb-2">
											<Globe className="mr-2 h-5 w-5 text-rose-500" />
											<h3 className="text-xl font-medium">Public Link</h3>
										</div>
										<p className="text-sm text-muted-foreground mb-2">
											Anyone with the link
										</p>
										<p className="text-sm">
											Create a public link that can be accessed by anyone who
											has it. No login required.
										</p>
									</div>
								</div>

								<div className="mt-6">
									<h3 className="text-xl font-medium mb-2">
										Setting Privacy Levels
									</h3>
									<HelpStepByStep
										steps={[
											"Navigate to the analysis or action plan you want to share",
											"Click the 'Share' button in the top-right corner",
											"Select your desired privacy level from the dropdown menu",
											"If choosing 'Shared with Specific People,' enter email addresses of recipients",
											"Click 'Apply' to save your privacy settings",
										]}
									/>
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
										<HelpStepByStep
											steps={[
												"Open the item you want to share",
												"Click the 'Share' button",
												"Select 'Create Link'",
												"Choose the access level (view only or can comment)",
												"Copy the generated link and share it via your preferred method",
											]}
										/>
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
										<HelpStepByStep
											steps={[
												"Open the item you want to share",
												"Click the 'Share' button",
												"Select 'Share via Email'",
												"Enter recipient email addresses",
												"Add an optional personal message",
												"Click 'Send' to deliver the invitation",
											]}
										/>
										<HelpTip>
											Recipients will receive an email with a link to view your
											shared content. They may need to create a free NextYou
											account if they don't already have one.
										</HelpTip>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2 flex items-center">
											<FileText className="mr-2 h-5 w-5 text-rose-500" />
											PDF Export
										</h3>
										<p className="mb-2">
											Create a PDF document of your analysis or action plan:
										</p>
										<HelpStepByStep
											steps={[
												"Open the item you want to share",
												"Click the 'Export' button",
												"Select 'PDF' as the export format",
												"Choose which sections to include in the export",
												"Click 'Generate PDF'",
												"Download and share the PDF file through any method",
											]}
										/>
										<HelpTip>
											PDF exports create a static snapshot of your data at the
											time of export. They won't update if you make changes to
											your analysis or action plan later.
										</HelpTip>
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
											When you share your results with others, they can provide
											feedback through comments:
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
												Engage in threaded discussions to explore insights more
												deeply
											</li>
											<li>
												Control whether viewers can comment by adjusting sharing
												permissions
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
											<div className="border rounded-lg p-6">
												<h4 className="font-medium">View Only</h4>
												<ul className="list-disc pl-4 text-sm mt-2">
													<li>Can see all shared content</li>
													<li>Cannot add comments</li>
													<li>Cannot make any changes</li>
												</ul>
											</div>

											<div className="border rounded-lg p-6">
												<h4 className="font-medium">Can Comment</h4>
												<ul className="list-disc pl-4 text-sm mt-2">
													<li>Can see all shared content</li>
													<li>Can add comments and reply to discussions</li>
													<li>Cannot make direct changes to content</li>
												</ul>
											</div>
										</div>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">
											Managing Shared Content
										</h3>
										<p className="mb-2">
											Keep track of and manage all your shared content:
										</p>
										<HelpStepByStep
											steps={[
												"Go to 'Settings' in your dashboard",
												"Select the 'Sharing' tab",
												"View a list of all items you've shared",
												"See who has access to each item",
												"Revoke access or change permission levels as needed",
												"See view statistics for shared content",
											]}
										/>
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
									Consider carefully what information you want to share. You can
									share specific analyses or action plans without sharing your
									entire profile or history.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Review Before Sharing</h3>
								<p className="text-muted-foreground">
									Always review the content before sharing it. Use the "Preview"
									option to see exactly what others will see when you share your
									results.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Set Clear Expectations</h3>
								<p className="text-muted-foreground">
									When sharing with others, let them know what kind of feedback
									you're looking for and how you plan to use their input.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Regularly Audit Shared Content</h3>
								<p className="text-muted-foreground">
									Periodically review what you've shared and with whom. Revoke
									access when it's no longer needed.
								</p>
							</div>
						</div>
					</section>

					<HelpFAQ
						questions={[
							{
								question: "Can I see who has viewed my shared content?",
								answer:
									"Yes, for content shared via direct links or email, you can see view statistics in the 'Sharing' section of your Settings.",
							},
							{
								question:
									"How do I stop sharing something I've already shared?",
								answer:
									"Go to the 'Sharing' tab in Settings, find the item you want to stop sharing, and click 'Revoke Access.' This will immediately prevent anyone from accessing the shared content.",
							},
							{
								question:
									"Do people need a NextYou account to view my shared content?",
								answer:
									"It depends on the sharing method. Public links can be viewed without an account, but email sharing typically requires recipients to create a free account for security purposes.",
							},
							{
								question:
									"Can I share only parts of an analysis or action plan?",
								answer:
									"Yes, when creating a PDF export, you can select which sections to include. For direct sharing, you can use the 'Custom Sharing' option to select specific sections to share.",
							},
							{
								question: "Is my shared content secure?",
								answer:
									"Yes, we use encryption and secure access controls for all shared content. You can revoke access at any time, and all sharing links have unique identifiers that cannot be guessed.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
							{ title: "Data Export", href: "/help/data-export" },
							{ title: "Collaboration Features", href: "/help/collaboration" },
							{ title: "Account Security", href: "/help/account-security" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
