import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy | Next You",
	description: "Please review the Privacy Policy for Next You.",
};

export default function PrivacyPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-3xl py-10">
				<h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

				<div className="space-y-6 text-sm">
					<section>
						<h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
						<p>
							Next You ("we", "our", or "us") respects your privacy and is
							committed to protecting your personal information. This Privacy
							Policy explains how we collect, use, and safeguard your
							information when you use our service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							2. Information We Collect
						</h2>
						<p>We may collect the following types of information:</p>
						<ul className="list-disc pl-6 pt-2">
							<li>Account information (name, email address, password)</li>
							<li>Profile information (age, gender, occupation)</li>
							<li>Self-analysis data (responses, analysis results)</li>
							<li>Usage data (access times, features used)</li>
							<li>Device information (IP address, browser type)</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							3. How We Use Your Information
						</h2>
						<p>We use the collected information for the following purposes:</p>
						<ul className="list-disc pl-6 pt-2">
							<li>To provide, maintain, and improve our services</li>
							<li>To authenticate users and verify accounts</li>
							<li>To provide customer support</li>
							<li>To send service-related notifications</li>
							<li>To create statistical data and analysis</li>
							<li>To develop new features and services</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							4. Information Sharing
						</h2>
						<p>
							We do not share your personal information with third parties
							except in the following cases:
						</p>
						<ul className="list-disc pl-6 pt-2">
							<li>With your consent</li>
							<li>To comply with legal obligations</li>
							<li>To protect our rights or property</li>
							<li>With service providers who assist in our operations</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">5. Data Protection</h2>
						<p>
							We implement appropriate technical and organizational measures to
							protect your personal information. However, please understand that
							no data transmission over the internet is 100% secure.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							6. Cookies and Similar Technologies
						</h2>
						<p>
							We use cookies and similar technologies to enhance your experience
							and improve our services. You can disable cookies in your browser
							settings, but this may affect the functionality of our service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">7. Your Rights</h2>
						<p>
							You have the following rights regarding your personal information:
						</p>
						<ul className="list-disc pl-6 pt-2">
							<li>Right to access your personal information</li>
							<li>Right to rectify or update your personal information</li>
							<li>Right to erasure (right to be forgotten)</li>
							<li>Right to restrict processing</li>
							<li>Right to data portability</li>
							<li>Right to object</li>
						</ul>
						<p className="mt-2">
							To exercise these rights, please contact us through our{" "}
							<Link href="/contact" className="text-primary underline">
								Contact Form
							</Link>
							.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">8. Data Retention</h2>
						<p>
							We retain your personal information for as long as necessary to
							provide our services or to comply with legal obligations. When you
							delete your account, we will delete or anonymize your personal
							information, except where retention is required by law.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							9. Children's Privacy
						</h2>
						<p>
							Our service is not intended for children under 13 years of age. We
							do not knowingly collect personal information from children under
							13. If we discover that we have collected personal information
							from a child under 13, we will promptly delete it.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">
							10. Changes to Privacy Policy
						</h2>
						<p>
							We may update this Privacy Policy from time to time. We will
							notify you of any changes by posting the new Privacy Policy on
							this page. We recommend that you review this Privacy Policy
							periodically.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-semibold">11. Contact Us</h2>
						<p>
							If you have any questions or concerns about our Privacy Policy,
							please contact us through our{" "}
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
