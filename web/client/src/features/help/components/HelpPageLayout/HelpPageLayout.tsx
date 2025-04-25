import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface HelpPageLayoutProps {
	title: string;
	description: string;
	lastUpdated?: string;
	children: React.ReactNode;
}

export function HelpPageLayout({
	title,
	description,
	lastUpdated,
	children,
}: HelpPageLayoutProps) {
	return (
		<div className="container max-w-4xl py-6 lg:py-10">
			<Button asChild variant="ghost" className="mb-6">
				<Link href="/help">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Help Center
				</Link>
			</Button>

			<div className="space-y-6">
				<h1 className="text-3xl font-bold tracking-tight">{title}</h1>
				<p className="text-muted-foreground">{description}</p>

				{children}

				{lastUpdated && (
					<div className="mt-12 border-t pt-4">
						<p className="text-sm text-muted-foreground">
							Last updated: {lastUpdated}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
