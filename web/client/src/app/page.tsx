import { Button } from "@/shared/components/ui/button";
import {
	ArrowRight,
	BarChart2,
	Brain,
	Check,
	FileUp,
	LineChart,
	ListTodo,
	Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center">
					<div className="mr-4 flex">
						<Link href="/" className="flex items-center space-x-2">
							<Brain className="h-6 w-6 text-rose-500" />
							<span className="font-bold">NextYou</span>
						</Link>
					</div>
					<div className="ml-auto flex items-center space-x-4">
						<Button variant="outline" asChild>
							<Link href="/login">Login</Link>
						</Button>
						<Button asChild className="bg-rose-500 hover:bg-rose-600">
							<Link href="/register">Sign Up</Link>
						</Button>
					</div>
				</div>
			</header>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-background dark:from-gray-950 dark:to-background">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
										From <span className="text-rose-500">Current You</span> to{" "}
										<span className="text-rose-500">Next You</span>
									</h1>
									<p className="max-w-[600px] text-gray-400 md:text-xl">
										Optimize your future self. Gain insights from your ChatGPT
										history and discover actions that drive your personal
										growth.
									</p>
								</div>
								<div className="flex flex-col sm:flex-row gap-3">
									<Button
										asChild
										size="lg"
										className="bg-rose-500 hover:bg-rose-600"
									>
										<Link href="/register">
											Get Started
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button
										variant="outline"
										size="lg"
										asChild
										className="border-gray-700 text-gray-300 hover:text-white"
									>
										<Link href="#features">Learn More</Link>
									</Button>
									<Button variant="secondary" size="lg" asChild>
										<Link href="/login/guest">
											Try Guest Demo
											<Sparkles className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</div>
							<div className="mx-auto lg:mx-0 relative">
								<div className="relative">
									<Image
										src="/images/dashboard-screenshot.png"
										alt="NextYou Dashboard Preview"
										width={600}
										height={400}
										className="rounded-lg border border-gray-800 shadow-xl"
										priority
									/>
									<div className="absolute -bottom-6 -left-6 h-[150px] w-[200px] rounded-lg border border-gray-800 bg-gray-900 p-4 shadow-lg">
										<div className="flex items-center space-x-2">
											<LineChart className="h-6 w-6 text-rose-500" />
											<h3 className="font-medium text-white">
												Personal Growth
											</h3>
										</div>
										<div className="mt-2 h-2 w-full rounded-full bg-gray-800">
											<div className="h-full w-4/5 rounded-full bg-rose-500" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									How NextYou Works
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Transform your ChatGPT conversations into actionable insights
									and growth plans
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
								<div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900">
									<FileUp className="h-6 w-6 text-rose-500" />
								</div>
								<h3 className="text-xl font-bold">Upload & Analyze</h3>
								<p className="text-center text-muted-foreground">
									Upload your ChatGPT history and our AI will analyze your
									conversations to identify patterns and interests.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
								<div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900">
									<BarChart2 className="h-6 w-6 text-rose-500" />
								</div>
								<h3 className="text-xl font-bold">Discover Insights</h3>
								<p className="text-center text-muted-foreground">
									Get personalized insights about your interests, thought
									patterns, and growth opportunities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
								<div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900">
									<ListTodo className="h-6 w-6 text-rose-500" />
								</div>
								<h3 className="text-xl font-bold">Take Action</h3>
								<p className="text-center text-muted-foreground">
									Follow personalized action plans designed to help you grow in
									the areas that matter most to you.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Why Choose NextYou
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Our platform offers unique benefits to help you achieve your
									personal growth goals
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
							{[
								{
									title: "AI-Powered Insights",
									description:
										"Our advanced AI analyzes your conversations to identify patterns and opportunities you might miss.",
								},
								{
									title: "Personalized Action Plans",
									description:
										"Get tailored action plans based on your unique interests, goals, and conversation history.",
								},
								{
									title: "Progress Tracking",
									description:
										"Track your growth journey with visual progress indicators and completion metrics.",
								},
								{
									title: "Organized Categories",
									description:
										"Keep your action plans organized by categories that matter to you, from career to health.",
								},
							].map((benefit, index) => (
								<div
									key={`${benefit.title}-${index}`}
									className="flex items-start space-x-4"
								>
									<div className="mt-1 rounded-full bg-rose-100 p-1 dark:bg-rose-900">
										<Check className="h-5 w-5 text-rose-500" />
									</div>
									<div>
										<h3 className="text-xl font-bold">{benefit.title}</h3>
										<p className="text-muted-foreground">
											{benefit.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 border-t">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Ready to Transform Your Growth?
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Join thousands of users who are already optimizing their
									personal development with NextYou.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3">
								<Button
									asChild
									size="lg"
									className="bg-rose-500 hover:bg-rose-600"
								>
									<Link href="/register">
										Sign Up Now
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button variant="secondary" size="lg" asChild>
									<Link href="/login/guest">
										Try Guest Demo
										<Sparkles className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full border-t py-6">
				<div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
					<p className="text-center text-sm leading-loose text-muted-foreground">
						© 2025 NextYou. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
