import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { BarChart2, FileUp, LineChart, ListTodo } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
	return (
		<PlainPageShell>
			<div className="container max-w-5xl py-10">
				<div className="mb-10 space-y-2">
					<h1 className="text-3xl font-bold tracking-tight">
						How Next You Works
					</h1>
					<p className="text-muted-foreground">
						Learn how to get the most out of Next You and accelerate your
						personal growth
					</p>
				</div>

				<div className="space-y-12">
					{/* Process Overview */}
					<section>
						<h2 className="mb-6 text-2xl font-semibold">
							The Next You Process
						</h2>
						<div className="grid gap-8 md:grid-cols-4">
							{[
								{
									step: "1",
									title: "Upload",
									description:
										"Upload your ChatGPT conversation history to our secure platform",
									icon: FileUp,
								},
								{
									step: "2",
									title: "Analyze",
									description:
										"Our AI analyzes your conversations to identify patterns and interests",
									icon: BarChart2,
								},
								{
									step: "3",
									title: "Discover",
									description:
										"Review personalized insights about your interests and growth opportunities",
									icon: LineChart,
								},
								{
									step: "4",
									title: "Act",
									description:
										"Follow tailored action plans to achieve your personal growth goals",
									icon: ListTodo,
								},
							].map((step, index) => (
								<Card
									key={`${step.title}-${index}`}
									className="overflow-hidden"
								>
									<div className="bg-primary p-2 text-white">
										<div className="flex items-center gap-2">
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-rose-500 font-bold">
												{step.step}
											</div>
											<h3 className="font-medium">{step.title}</h3>
										</div>
									</div>
									<CardContent className="pt-4">
										<div className="mb-4 flex justify-center">
											<step.icon className="h-12 w-12 text-primary" />
										</div>
										<p className="text-sm text-muted-foreground">
											{step.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					{/* Getting Started */}
					<section>
						<h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<Card>
								<CardContent className="pt-6">
									<h3 className="mb-2 text-xl font-medium">
										Upload Your First Analysis
									</h3>
									<p className="mb-4 text-muted-foreground">
										Start by uploading your ChatGPT history to generate your
										first analysis. You can export your history directly from
										ChatGPT or upload a text file.
									</p>
									<Button asChild >
										<Link href="/dashboard/analyses/new">
											Create New Analysis
										</Link>
									</Button>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="pt-6">
									<h3 className="mb-2 text-xl font-medium">
										Create Categories
									</h3>
									<p className="mb-4 text-muted-foreground">
										Organize your insights and action plans by creating
										categories that matter to you, such as Career, Health, or
										Learning.
									</p>
									<Button asChild >
										<Link href="/dashboard/categories/new">
											Create New Category
										</Link>
									</Button>
								</CardContent>
							</Card>
						</div>
					</section>

					{/* Tips & Best Practices */}
					<section>
						<h2 className="mb-6 text-2xl font-semibold">
							Tips & Best Practices
						</h2>
						<div className="space-y-4">
							<div className="rounded-lg border p-4">
								<h3 className="mb-2 font-medium">Regular Uploads</h3>
								<p className="text-sm text-muted-foreground">
									For the best results, upload your ChatGPT history regularly to
									track your evolving interests and progress over time.
								</p>
							</div>
							<div className="rounded-lg border p-4">
								<h3 className="mb-2 font-medium">Complete Action Plans</h3>
								<p className="text-sm text-muted-foreground">
									Mark action items as complete to track your progress and see
									how you're growing in different areas.
								</p>
							</div>
							<div className="rounded-lg border p-4">
								<h3 className="mb-2 font-medium">Review Insights</h3>
								<p className="text-sm text-muted-foreground">
									Take time to review the insights generated from your analyses
									to better understand your interests and growth opportunities.
								</p>
							</div>
						</div>
					</section>

					{/* Need Help? */}
					<section>
						<h2 className="mb-6 text-2xl font-semibold">Need Help?</h2>
						<div className="grid gap-6 md:grid-cols-3">
							<Card>
								<CardContent className="pt-6">
									<h3 className="mb-2 font-medium">FAQ</h3>
									<p className="mb-4 text-sm text-muted-foreground">
										Find answers to commonly asked questions about Next You.
									</p>
									<Button variant="outline" asChild className="w-full">
										<Link href="/faq">View FAQ</Link>
									</Button>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="pt-6">
									<h3 className="mb-2 font-medium">Help Center</h3>
									<p className="mb-4 text-sm text-muted-foreground">
										Browse our comprehensive help documentation and guides.
									</p>
									<Button variant="outline" asChild className="w-full">
										<Link href="/help">Visit Help Center</Link>
									</Button>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="pt-6">
									<h3 className="mb-2 font-medium">Contact Support</h3>
									<p className="mb-4 text-sm text-muted-foreground">
										Still have questions? Our support team is here to help.
									</p>
									<Button variant="outline" asChild className="w-full">
										<Link href="/contact">Contact Us</Link>
									</Button>
								</CardContent>
							</Card>
						</div>
					</section>
				</div>
			</div>
		</PlainPageShell>
	);
}
