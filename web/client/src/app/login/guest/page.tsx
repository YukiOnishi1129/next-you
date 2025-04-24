"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Brain, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GuestLoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleGuestLogin = async () => {
		setIsLoading(true);
		try {
			// Simulate API call for guest login
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// In a real app, you would set some session/cookie to indicate guest mode
			// For now, we'll just redirect to the dashboard
			router.push("/dashboard");
		} catch (error) {
			console.error("Guest login failed:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center">
					<Link href="/" className="flex items-center space-x-2">
						<Brain className="h-6 w-6 text-rose-500" />
						<span className="font-bold">NextYou</span>
					</Link>
				</div>
			</header>
			<main className="flex-1 flex items-center justify-center p-6">
				<Card className="w-full max-w-md">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold">Guest Demo</CardTitle>
						<CardDescription>
							Try NextYou with a demo account. No registration required.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="rounded-lg border p-4 bg-muted/50">
							<h3 className="font-medium mb-2">What you'll get access to:</h3>
							<ul className="space-y-2 text-sm">
								<li>• Pre-populated sample data</li>
								<li>• Full dashboard experience</li>
								<li>• Action plans and analytics</li>
								<li>• Calendar and progress tracking</li>
							</ul>
							<p className="text-sm text-muted-foreground mt-4">
								Note: Changes made in guest mode will not be saved permanently.
							</p>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-4">
						<Button
							onClick={handleGuestLogin}
							className="w-full bg-rose-500 hover:bg-rose-600"
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Loading Demo...
								</>
							) : (
								"Continue as Guest"
							)}
						</Button>
						<div className="text-center text-sm">
							Want your own account?{" "}
							<Link href="/register" className="text-rose-500 hover:underline">
								Sign up
							</Link>{" "}
							or{" "}
							<Link href="/login" className="text-rose-500 hover:underline">
								Login
							</Link>
						</div>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}
