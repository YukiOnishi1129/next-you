import { TopPageShell } from "@/shared/components/layout/shell/TopPageShell/TopPageShell";
import { Button } from "@/shared/components/ui/button";
import {
	ArrowRight,
	BarChart2,
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
		<TopPageShell>
			<div>
				{/* Hero Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-background dark:from-gray-950 dark:to-background">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
										From <span className="text-primary">Current You</span> to{" "}
										<span className="text-primary">Next You</span>
									</h1>
									<p className="max-w-[600px] text-gray-400 md:text-xl">
										Optimize your future self. Gain insights from your ChatGPT
										history and discover actions that drive your personal
										growth.
									</p>
								</div>
								<div className="flex flex-col sm:flex-row gap-3">
									<Button asChild size="lg">
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
											<LineChart className="h-6 w-6 text-primary" />
											<h3 className="font-medium text-white">
												Personal Growth
											</h3>
										</div>
										<div className="mt-2 h-2 w-full rounded-full bg-gray-800">
											<div className="h-full w-4/5 rounded-full bg-primary" />
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
									<FileUp className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Upload & Analyze</h3>
								<p className="text-center text-muted-foreground">
									Upload your ChatGPT history and our AI will analyze your
									conversations to identify patterns and interests.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
								<div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900">
									<BarChart2 className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Discover Insights</h3>
								<p className="text-center text-muted-foreground">
									Get personalized insights about your interests, thought
									patterns, and growth opportunities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
								<div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900">
									<ListTodo className="h-6 w-6 text-primary" />
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

				{/* How It Works Section - Added with proper ID */}
				<section
					id="how-it-works"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									The Next You Process
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Our simple 4-step process to transform your insights into
									actionable growth
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 mt-12">
							{[
								{
									step: "1",
									title: "Upload",
									description:
										"Upload your ChatGPT conversation history to our secure platform",
								},
								{
									step: "2",
									title: "Analyze",
									description:
										"Our AI analyzes your conversations to identify patterns and interests",
								},
								{
									step: "3",
									title: "Discover",
									description:
										"Review personalized insights about your interests and growth opportunities",
								},
								{
									step: "4",
									title: "Act",
									description:
										"Follow tailored action plans to achieve your personal growth goals",
								},
							].map((step, index) => (
								<div
									key={`${step.title}-${index}`}
									className="flex flex-col items-center space-y-4"
								>
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
										{step.step}
									</div>
									<h3 className="text-xl font-bold">{step.title}</h3>
									<p className="text-center text-muted-foreground">
										{step.description}
									</p>
									{index < 3 && (
										<div className="hidden md:block h-0.5 w-full bg-rose-500/20 absolute left-1/2 top-8 -z-10" />
									)}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="w-full py-12 md:py-24 lg:py-32">
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
										<Check className="h-5 w-5 text-primary" />
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
								<Button asChild size="lg">
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
			</div>
		</TopPageShell>
	);
}
