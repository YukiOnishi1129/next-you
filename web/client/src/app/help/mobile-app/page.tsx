import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpFAQ } from "@/features/help/components/HelpFAQ";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpScreenshot } from "@/features/help/components/HelpScreenshot";
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
import { Laptop, RotateCw, Shield, Smartphone, Wifi } from "lucide-react";

export default function MobileAppPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="NextYou Mobile App"
				description="Access your personal growth journey on the go with our mobile application."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<div className="flex flex-col md:flex-row gap-6">
						<div className="md:w-1/3">
							<div className="rounded-lg overflow-hidden border shadow-sm">
								<HelpScreenshot
									src="/action-plan-dashboard.png"
									alt="NextYou Mobile App"
									width={300}
									height={600}
								/>
							</div>
						</div>

						<div className="md:w-2/3 space-y-6">
							<section>
								<h2 className="text-2xl font-semibold mb-4">
									Download the App
								</h2>
								<div className="flex flex-wrap gap-4">
									<Button className="bg-black text-white hover:bg-gray-800">
										<svg
											className="mr-2 h-5 w-5"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-label="App Store"
										>
											<title>App Store</title>
											<path d="M17.5,12.5a5,5,0,0,1,5-5h1v11h-1a5,5,0,0,1-5-5Z" />
											<path d="M0,7.5a2,2,0,0,1,2-2H17.5v14H2a2,2,0,0,1-2-2Z" />
										</svg>
										App Store
									</Button>
									<Button className="bg-green-600 text-white hover:bg-green-700">
										<svg
											className="mr-2 h-5 w-5"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-label="Google Play"
										>
											<title>Google Play</title>
											<path d="M22.018,13.298l-3.919,2.218l-3.515-3.493l3.543-3.521l3.891,2.202a1.49,1.49,0,0,1,0,2.594Z" />
											<path d="M1.549,0.106l11.478,11.47L3.5,20.984,1.549,0.106Z" />
											<path d="M1.524,0.106,13.335,6.6h0l-2.743,2.743L1.524,0.106Z" />
											<path d="M14.655,15.95,3.5,20.984l2.745-2.745,8.41-8.38Z" />
										</svg>
										Google Play
									</Button>
								</div>

								<div className="mt-4 flex items-center text-sm text-muted-foreground">
									<Shield className="mr-1 h-4 w-4" />
									<span>Secure download from official app stores only</span>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold mb-4">Key Features</h2>
								<ul className="space-y-2">
									<li className="flex items-start">
										<div className="mr-2 mt-1 rounded-full bg-rose-100 p-1 dark:bg-rose-900">
											<Smartphone className="h-4 w-4 text-rose-500" />
										</div>
										<div>
											<span className="font-medium">On-the-go Access</span>
											<p className="text-sm text-muted-foreground">
												View your analyses, action plans, and track progress
												from anywhere
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="mr-2 mt-1 rounded-full bg-rose-100 p-1 dark:bg-rose-900">
											<RotateCw className="h-4 w-4 text-rose-500" />
										</div>
										<div>
											<span className="font-medium">Real-time Sync</span>
											<p className="text-sm text-muted-foreground">
												All changes sync automatically between mobile and web
												versions
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="mr-2 mt-1 rounded-full bg-rose-100 p-1 dark:bg-rose-900">
											<Wifi className="h-4 w-4 text-rose-500" />
										</div>
										<div>
											<span className="font-medium">Offline Mode</span>
											<p className="text-sm text-muted-foreground">
												Access key features even without an internet connection
											</p>
										</div>
									</li>
								</ul>
							</section>
						</div>
					</div>

					<Tabs defaultValue="getting-started" className="mt-8">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="getting-started">Getting Started</TabsTrigger>
							<TabsTrigger value="features">Features</TabsTrigger>
							<TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
						</TabsList>
						<TabsContent value="getting-started" className="space-y-6 pt-4">
							<section>
								<h2 className="text-2xl font-semibold mb-4">
									Setting Up the Mobile App
								</h2>

								<HelpStepByStep
									steps={[
										"Download and install the app from your device's app store",
										"Open the app and tap 'Sign In' if you have an existing account, or 'Create Account' if you're new",
										"Enter your credentials or complete the registration process",
										"Allow notifications when prompted (recommended for action plan reminders)",
										"Complete the brief onboarding tour to learn about key features",
										"Sync your existing data by pulling down on the main screen",
									]}
								/>

								<HelpTip>
									If you already have a NextYou account, use the same email and
									password to ensure all your data syncs properly.
								</HelpTip>
							</section>
						</TabsContent>

						<TabsContent value="features" className="space-y-6 pt-4">
							<section>
								<h2 className="text-2xl font-semibold mb-4">
									Mobile App Features
								</h2>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="border rounded-lg p-6">
										<h3 className="text-xl font-medium mb-2">Dashboard</h3>
										<p className="text-sm text-muted-foreground mb-2">
											Quick overview of your progress
										</p>
										<p className="text-sm">
											The mobile dashboard provides a snapshot of your current
											action plans, recent analyses, and progress metrics. Swipe
											between different views to access your categories,
											analyses, and action plans.
										</p>
									</div>

									<div className="border rounded-lg p-6">
										<h3 className="text-xl font-medium mb-2">
											Action Plan Tracking
										</h3>
										<p className="text-sm text-muted-foreground mb-2">
											Stay on top of your goals
										</p>
										<p className="text-sm">
											Mark action items as complete, set reminders, and track
											your progress through the mobile interface. The calendar
											view helps you see upcoming tasks and deadlines.
										</p>
									</div>

									<div className="border rounded-lg p-6">
										<h3 className="text-xl font-medium mb-2">Quick Notes</h3>
										<p className="text-sm text-muted-foreground mb-2">
											Capture thoughts on the go
										</p>
										<p className="text-sm">
											Add quick notes to your analyses or action plans from
											anywhere. These notes sync with your account and can be
											reviewed later on any device.
										</p>
									</div>

									<div className="border rounded-lg p-6">
										<h3 className="text-xl font-medium mb-2">Offline Access</h3>
										<p className="text-sm text-muted-foreground mb-2">
											Work without internet
										</p>
										<p className="text-sm">
											Access your most recent data even without an internet
											connection. Changes made offline will automatically sync
											when you reconnect.
										</p>
									</div>
								</div>
							</section>
						</TabsContent>

						<TabsContent value="troubleshooting" className="space-y-6 pt-4">
							<section>
								<h2 className="text-2xl font-semibold mb-4">
									Common Issues & Solutions
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="font-medium">App Won't Open or Crashes</h3>
										<ol className="list-decimal pl-6 text-sm text-muted-foreground">
											<li>
												Ensure your device's operating system is up to date
											</li>
											<li>Force close the app and restart it</li>
											<li>Uninstall and reinstall the app</li>
											<li>
												Check if your device meets the minimum requirements
											</li>
										</ol>
									</div>

									<div>
										<h3 className="font-medium">Sync Issues</h3>
										<ol className="list-decimal pl-6 text-sm text-muted-foreground">
											<li>Verify you have a stable internet connection</li>
											<li>
												Pull down on the screen to manually trigger a sync
											</li>
											<li>Log out and log back in to refresh your session</li>
											<li>
												Check that you're using the same account across all
												devices
											</li>
										</ol>
									</div>

									<div>
										<h3 className="font-medium">Login Problems</h3>
										<ol className="list-decimal pl-6 text-sm text-muted-foreground">
											<li>
												Reset your password through the "Forgot Password" option
											</li>
											<li>Ensure you're using the correct email address</li>
											<li>
												Check if caps lock is enabled when entering your
												password
											</li>
											<li>
												Try logging in through the web version to verify your
												credentials
											</li>
										</ol>
									</div>

									<div>
										<h3 className="font-medium">Battery Drain</h3>
										<ol className="list-decimal pl-6 text-sm text-muted-foreground">
											<li>
												Disable background refresh for the app in your device
												settings
											</li>
											<li>Reduce notification frequency in the app settings</li>
											<li>
												Close the app when not in use instead of leaving it
												running in the background
											</li>
											<li>
												Update to the latest version, which may include battery
												optimization improvements
											</li>
										</ol>
									</div>
								</div>
							</section>
						</TabsContent>
					</Tabs>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Device Compatibility
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-medium mb-2 flex items-center">
									<Smartphone className="mr-2 h-5 w-5 text-rose-500" />
									Mobile Requirements
								</h3>
								<ul className="space-y-2 text-sm">
									<li>
										<strong>iOS:</strong> iOS 14.0 or later. Compatible with
										iPhone, iPad, and iPod touch.
									</li>
									<li>
										<strong>Android:</strong> Android 8.0 (Oreo) or later. 4GB
										RAM recommended.
									</li>
									<li>
										<strong>Storage:</strong> At least 100MB of free space for
										installation.
									</li>
									<li>
										<strong>Permissions:</strong> Camera (optional, for scanning
										documents), Notifications, Storage.
									</li>
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2 flex items-center">
									<Laptop className="mr-2 h-5 w-5 text-rose-500" />
									Web vs. Mobile Comparison
								</h3>
								<ul className="space-y-2 text-sm">
									<li>
										<strong>Feature Parity:</strong> Most features available on
										both platforms with minor UI differences.
									</li>
									<li>
										<strong>Offline Access:</strong> Mobile app offers more
										robust offline capabilities.
									</li>
									<li>
										<strong>Data Visualization:</strong> Web version provides
										more detailed charts and graphs.
									</li>
									<li>
										<strong>File Upload:</strong> Web version supports larger
										file uploads for analysis.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<HelpFAQ
						questions={[
							{
								question:
									"Can I use the mobile app without creating an account?",
								answer:
									"No, you need to create an account or log in to an existing account to use the NextYou mobile app. This ensures your data syncs across devices and is securely stored.",
							},
							{
								question: "Does the mobile app use a lot of data?",
								answer:
									"The NextYou app is designed to be data-efficient. Initial syncing may use more data, but regular usage typically consumes minimal data. You can also enable 'Data Saver Mode' in the app settings.",
							},
							{
								question: "Can I switch between devices seamlessly?",
								answer:
									"Yes, your data automatically syncs between all your devices when connected to the internet. Start on your phone and continue on your computer without missing a beat.",
							},
							{
								question: "Is the mobile app secure?",
								answer:
									"Yes, the NextYou mobile app uses the same security standards as our web platform, including encryption for data in transit and at rest. We recommend enabling biometric authentication for an additional layer of security.",
							},
							{
								question: "Can I download my data from the mobile app?",
								answer:
									"Currently, data export is only available through the web version. However, you can access all your data on the mobile app and make changes that will sync to your account.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Getting Started", href: "/help/getting-started" },
							{ title: "Data Sync", href: "/help/data-export" },
							{ title: "Common Issues", href: "/help/common-issues" },
							{ title: "Account Setup", href: "/help/account-setup" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
