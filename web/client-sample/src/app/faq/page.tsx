import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "FAQ | Next You",
	description: "Frequently asked questions about Next You.",
};

export default function FAQPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-3xl py-10">
				<h1 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h1>

				<div className="space-y-8">
					<section>
						<h2 className="mb-4 text-xl font-semibold">About the Service</h2>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 font-medium">Q: What is Next You?</h3>
								<p className="text-muted-foreground">
									A: Next You is a self-analysis tool that helps you gain
									insights from your data and discover actions that drive your
									personal growth.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: Is Next You free to use?
								</h3>
								<p className="text-muted-foreground">
									A: Basic features are available for free. Advanced analysis
									features and expanded data storage are available with our
									premium plans.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: What devices can I use Next You on?
								</h3>
								<p className="text-muted-foreground">
									A: Next You is accessible on most devices with internet
									connectivity, including computers, tablets, and smartphones.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-xl font-semibold">
							Account & Registration
						</h2>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 font-medium">
									Q: Do I need to register for an account?
								</h3>
								<p className="text-muted-foreground">
									A: Yes, an account is required to use our services. You can
									register using your email address or through social media
									accounts.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: How do I delete my account?
								</h3>
								<p className="text-muted-foreground">
									A: You can delete your account through the account settings
									page. Please note that all your data will be permanently
									deleted.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-xl font-semibold">Analysis Features</h2>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 font-medium">
									Q: What types of analysis does Next You offer?
								</h3>
								<p className="text-muted-foreground">
									A: Next You offers various types of analysis including
									personality traits, thinking patterns, behavioral tendencies,
									strengths and weaknesses, and tracking changes over time.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: How accurate are the analysis results?
								</h3>
								<p className="text-muted-foreground">
									A: The accuracy of the analysis depends on the information you
									provide. More detailed and accurate input leads to more
									precise analysis results.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: Can I save my analysis results?
								</h3>
								<p className="text-muted-foreground">
									A: Yes, all analysis results are saved to your account and can
									be accessed at any time. You can also export them as PDF
									files.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-xl font-semibold">Privacy & Security</h2>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 font-medium">
									Q: Is my personal information protected?
								</h3>
								<p className="text-muted-foreground">
									A: Yes, we implement the latest security measures to protect
									your personal information. For more details, please see our{" "}
									<Link href="/privacy" className="text-primary underline">
										Privacy Policy
									</Link>
									.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: Is my data shared with third parties?
								</h3>
								<p className="text-muted-foreground">
									A: We do not share your personal data with third parties
									without your consent. We may use anonymized data for
									statistical analysis.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-xl font-semibold">Support</h2>

						<div className="space-y-6">
							<div>
								<h3 className="mb-2 font-medium">
									Q: What should I do if I encounter technical issues?
								</h3>
								<p className="text-muted-foreground">
									A: Please contact us through our{" "}
									<Link href="/contact" className="text-primary underline">
										Contact Form
									</Link>{" "}
									or email us at support@nextyou.com.
								</p>
							</div>

							<div>
								<h3 className="mb-2 font-medium">
									Q: How can I provide feedback?
								</h3>
								<p className="text-muted-foreground">
									A: We welcome feedback to improve our service. Please use our{" "}
									<Link href="/contact" className="text-primary underline">
										Contact Form
									</Link>{" "}
									and select "Feedback" as the subject.
								</p>
							</div>
						</div>
					</section>

					<div className="rounded-lg border border-border bg-muted/50 p-4 text-sm">
						<p>
							If you have other questions, please don't hesitate to{" "}
							<Link href="/contact" className="text-primary underline">
								contact us
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
