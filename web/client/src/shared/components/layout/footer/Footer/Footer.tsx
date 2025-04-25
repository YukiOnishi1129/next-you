"use client";

import { useAuth } from "@/features/auth/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
	const currentYear = new Date().getFullYear();
	const { user } = useAuth();
	const isLoggedIn = !!user;
	const pathname = usePathname();

	// Check if we're on the landing page
	const isLandingPage = pathname === "/";

	return (
		<footer className="border-t border-border bg-background">
			<div className="container py-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="space-y-3">
						<h3 className="text-lg font-medium">Next You</h3>
						<p className="text-sm text-muted-foreground">
							From Current You to Next You: Gain insights and drive personal
							growth
						</p>
					</div>

					{isLoggedIn ? (
						// Show dashboard links when logged in
						<div>
							<h3 className="mb-3 text-sm font-medium">About</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<Link
										href="/how-it-works"
										className="text-muted-foreground hover:text-foreground"
									>
										How It Works
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard"
										className="text-muted-foreground hover:text-foreground"
									>
										Dashboard
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/analyses"
										className="text-muted-foreground hover:text-foreground"
									>
										Analyses
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/action-plans"
										className="text-muted-foreground hover:text-foreground"
									>
										Action Plans
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/categories"
										className="text-muted-foreground hover:text-foreground"
									>
										Categories
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/settings"
										className="text-muted-foreground hover:text-foreground"
									>
										Settings
									</Link>
								</li>
							</ul>
						</div>
					) : (
						// Show about section with landing page links when not logged in
						<div>
							<h3 className="mb-3 text-sm font-medium">About</h3>
							<ul className="space-y-2 text-sm">
								{isLandingPage ? (
									// If on landing page, use anchor links
									<>
										<li>
											<Link
												href="/#features"
												className="text-muted-foreground hover:text-foreground"
											>
												Features
											</Link>
										</li>
										<li>
											<Link
												href="/#how-it-works"
												className="text-muted-foreground hover:text-foreground"
											>
												How It Works
											</Link>
										</li>
									</>
								) : (
									// If not on landing page, link to landing page
									<>
										<li>
											<Link
												href="/"
												className="text-muted-foreground hover:text-foreground"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/dashboard"
												className="text-muted-foreground hover:text-foreground"
											>
												Dashboard
											</Link>
										</li>
										<li>
											<Link
												href="/analyses"
												className="text-muted-foreground hover:text-foreground"
											>
												Analyses
											</Link>
										</li>
										<li>
											<Link
												href="/action-plan"
												className="text-muted-foreground hover:text-foreground"
											>
												Action Plans
											</Link>
										</li>
										<li>
											<Link
												href="/categories"
												className="text-muted-foreground hover:text-foreground"
											>
												Categories
											</Link>
										</li>
										<li>
											<Link
												href="/settings"
												className="text-muted-foreground hover:text-foreground"
											>
												Settings
											</Link>
										</li>
										<li>
											<Link
												href="/how-it-works"
												className="text-muted-foreground hover:text-foreground"
											>
												How It Works
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					)}

					<div>
						<h3 className="mb-3 text-sm font-medium">Support</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-foreground"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="text-muted-foreground hover:text-foreground"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/help"
									className="text-muted-foreground hover:text-foreground"
								>
									Help Center
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-medium">Legal</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/terms"
									className="text-muted-foreground hover:text-foreground"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-muted-foreground hover:text-foreground"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
					<p>© {currentYear} Next You. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
