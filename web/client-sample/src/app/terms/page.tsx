import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service | Next You",
	description: "Please review the Terms of Service for Next You.",
};

export default function TermsPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-3xl py-10">
				<h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>

				<div className="space-y-6 text-sm">
					<section>
						<h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
						<p>
							These Terms of Service ("Terms") govern your use of Next You (the
							"Service"). By using the Service, you agree to be bound by these
							Terms. If you do not agree to these Terms, please do not use the
							Service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							2. Service Description
						</h2>
						<p>
							Next You is a self-analysis platform that helps users gain
							insights from their data and discover actions that drive personal
							growth.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							3. Account Registration
						</h2>
						<p>
							To use the Service, you must register for an account. You are
							responsible for providing accurate and current information and for
							maintaining the security of your account.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							4. Prohibited Activities
						</h2>
						<p>
							The following activities are prohibited when using the Service:
						</p>
						<ul className="list-disc pl-6 pt-2">
							<li>Violating any laws or regulations</li>
							<li>Engaging in any activity related to criminal conduct</li>
							<li>Interfering with the operation of the Service</li>
							<li>Harassing other users</li>
							<li>Infringing on intellectual property rights of others</li>
							<li>
								Attempting unauthorized access to the Service's systems or
								networks
							</li>
							<li>
								Any other activity deemed inappropriate by the Service operator
							</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							5. Intellectual Property
						</h2>
						<p>
							All intellectual property rights related to the Service belong to
							the Service operator or its rightful owners. While you retain
							rights to content you create, you grant the Service operator the
							right to analyze and use such content to improve and enhance the
							Service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">6. Disclaimer</h2>
						<p>
							The Service is provided "as is" without warranties of any kind,
							either express or implied. The Service operator is not liable for
							any damages arising from your use of the Service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							7. Service Changes and Termination
						</h2>
						<p>
							The Service operator reserves the right to modify or discontinue
							the Service, temporarily or permanently, with or without notice.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">8. Changes to Terms</h2>
						<p>
							The Service operator may update these Terms from time to time. The
							updated Terms will be effective when posted on the Service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">9. Governing Law</h2>
						<p>
							These Terms shall be governed by and construed in accordance with
							the laws of the jurisdiction in which the Service operator is
							established, without regard to its conflict of law provisions.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">10. Contact</h2>
						<p>
							If you have any questions about these Terms, please contact us
							through our{" "}
							<Link href="/contact" className="text-primary underline">
								Contact Form
							</Link>
							.
						</p>
					</section>

					<p className="pt-4 text-right">Last Updated: April 25, 2025</p>
				</div>
			</div>
		</PlainPageShell>
	);
}
