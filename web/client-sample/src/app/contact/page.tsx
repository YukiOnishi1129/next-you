import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Next You",
	description: "Get in touch with the Next You team.",
};

export default function ContactPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-2xl py-10">
				<h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

				<div className="space-y-6">
					<p>
						Have questions or feedback about Next You? Please use the form below
						to get in touch. We typically respond within 2 business days.
					</p>

					<form className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="John Doe" required />
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="example@email.com"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Input
								id="subject"
								placeholder="Subject of your inquiry"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Please enter your message here"
								className="min-h-[150px]"
								required
							/>
						</div>

						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>

					<div className="rounded-lg border border-border bg-muted/50 p-4 text-sm">
						<h2 className="mb-2 font-semibold">Other Ways to Reach Us</h2>
						<p>
							For urgent inquiries, please email us at:
							<br />
							<a
								href="mailto:support@nextyou.com"
								className="text-primary underline"
							>
								support@nextyou.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</PlainPageShell>
	);
}
