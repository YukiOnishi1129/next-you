import { Button } from "@/shared/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";

export const UnauthenticatedPageHeader = () => (
	<div className="container flex h-16 items-center">
		<div className="mr-4 flex">
			<Link href="/" className="flex items-center space-x-2">
				<Brain className="h-6 w-6 text-primary" />
				<span className="font-bold">NextYou</span>
			</Link>
		</div>
		<div className="ml-auto flex items-center space-x-4">
			<Button variant="outline" asChild>
				<Link href="/login">Login</Link>
			</Button>
			<Button asChild>
				<Link href="/register">Sign Up</Link>
			</Button>
		</div>
	</div>
);
