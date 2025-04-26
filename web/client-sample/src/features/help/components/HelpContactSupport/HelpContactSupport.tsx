import { Button } from "@/shared/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function HelpContactSupport() {
	return (
		<div className="mt-8 border-t pt-6">
			<h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
			<p className="mb-4">
				If you couldn't find the answer to your question, our support team is
				here to help.
			</p>
			<div className="flex flex-col sm:flex-row gap-4">
				<Button asChild variant="outline" className="flex items-center gap-2">
					<Link href="/contact">
						<MessageSquare className="h-4 w-4" />
						Contact Support
					</Link>
				</Button>
				<Button asChild variant="outline" className="flex items-center gap-2">
					<a href="mailto:support@nextyou.com">
						<Mail className="h-4 w-4" />
						Email: support@nextyou.com
					</a>
				</Button>
			</div>
		</div>
	);
}
