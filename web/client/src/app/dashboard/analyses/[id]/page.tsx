import { ActionPlanCard } from "@/features/actionPlans/components/ActionPlanCard";
import { ObjectRelationship } from "@/shared/components/common/ObjectRelationship";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import { ArrowLeft, ArrowRight, Download, Plus, Share2 } from "lucide-react";
import Link from "next/link";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function AnalysisDetailPage({ params }: PageProps) {
	const { id } = await params;
	// Update the sample data to English
	const analysis = {
		id,
		date: "April 18, 2024",
		summary:
			"Conversations focused on programming learning and health management.",
		categories: ["Programming", "Health", "Productivity"],
		interests: [
			{
				name: "Programming",
				percentage: 42,
				description:
					"Many questions about React, TypeScript, and Next.js, showing strong interest in frontend development. Questions about TypeScript's type system have been increasing.",
				tags: ["React", "TypeScript", "Next.js"],
			},
			{
				name: "Health",
				percentage: 28,
				description:
					"Questions about exercise habits and diet management have been increasing. Particularly interested in establishing exercise habits using morning time.",
				tags: ["Exercise", "Diet Management", "Morning Routine"],
			},
			{
				name: "Productivity",
				percentage: 18,
				description:
					"Questions about task management and improving focus. Showing interest in time management methods like the Pomodoro Technique.",
				tags: ["Task Management", "Pomodoro", "Focus"],
			},
		],
		patterns: [
			{
				name: "Planning Oriented",
				description:
					"Enthusiastic about making detailed plans, but seems to feel barriers when it comes to execution. Planning is very specific, but may lack triggers for action and mechanisms for habit formation.",
			},
			{
				name: "Diverse Interests",
				description:
					"Strong curiosity about new technologies and methods, with interests in many areas. However, may find it challenging to focus on one thing. The breadth of interests is a strength, but focusing could lead to better results.",
			},
			{
				name: "Perfectionist Tendencies",
				description:
					"From the content of questions, it appears you set high standards for yourself. You may be postponing action due to seeking perfection. There seems to be a 'if I can't do it perfectly, I won't start' thought pattern.",
			},
		],
		recommendations: [
			{
				name: "Start with Small Steps",
				description:
					"Break down large plans into small steps and accumulate small daily successes. For example, break down the big goal of 'Learning TypeScript' into small steps like 'Read the official documentation for 15 minutes every day'.",
			},
			{
				name: "Prioritize",
				description:
					"Instead of trying to do everything at once, focus on the 1-3 most important areas. Based on current conversation history, 'Mastering TypeScript' and 'Establishing a morning exercise routine' could be considered top priorities.",
			},
			{
				name: "Establish a Reflection Habit",
				description:
					"Set aside time once a week to reflect on your progress. Record what went well, what was challenging, and how to improve next week to create a continuous improvement cycle.",
			},
		],
		relatedActionPlans: [
			{
				id: "1",
				title: "Complete Next.js Tutorial",
				description:
					"Work through the official documentation tutorial to understand the basic usage",
				dueDate: "2024-04-25",
				category: "Programming",
				completed: false,
				priority: "Medium",
			},
			{
				id: "2",
				title: "Establish Morning Walking Routine",
				description:
					"Develop a habit of walking for 20 minutes every morning and continue for a week",
				dueDate: "2024-04-20",
				category: "Health",
				completed: true,
				priority: "High",
			},
			{
				id: "3",
				title: "Try Pomodoro Technique",
				description:
					"Implement 25-minute work, 5-minute break cycles four times a day to improve focus",
				dueDate: "2024-04-22",
				category: "Productivity",
				completed: false,
				priority: "Low",
			},
		],
	};

	// Update UI text to English
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/analyses">
						<ArrowLeft className="h-4 w-4" />
						Back to Analyses
					</Link>
				</Button>
			</div>

			<PageHeader
				heading={`Analysis: ${analysis.date}`}
				description="Trends and insights extracted from ChatGPT history"
				action={
					<div className="flex space-x-2">
						<Button variant="outline" size="sm">
							<Download className="mr-2 h-4 w-4" />
							Export
						</Button>
						<Button variant="outline" size="sm">
							<Share2 className="mr-2 h-4 w-4" />
							Share
						</Button>
					</div>
				}
			/>

			<div className="flex flex-wrap gap-2 mb-6">
				{analysis.categories.map((category) => (
					<Badge key={category}>{category}</Badge>
				))}
			</div>

			<Tabs defaultValue="summary" className="space-y-6">
				<TabsList>
					<TabsTrigger value="summary">Summary</TabsTrigger>
					<TabsTrigger value="interests">Areas of Interest</TabsTrigger>
					<TabsTrigger value="patterns">Thought Patterns</TabsTrigger>
					<TabsTrigger value="recommendations">Recommendations</TabsTrigger>
				</TabsList>

				<TabsContent value="summary" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Analysis Overview</CardTitle>
							<CardDescription>
								Key insights from your ChatGPT history
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								This analysis examined your ChatGPT conversation history from
								the past 30 days. Conversations primarily focused on programming
								learning and health management, with frequent questions about
								React and TypeScript in particular. There's also growing
								interest in improving morning routines.
							</p>

							<div className="rounded-md bg-muted p-4">
								<h4 className="font-medium">Key Insights</h4>
								<ul className="mt-2 space-y-2 text-sm">
									<li>• Strong motivation for technical skill improvement</li>
									<li>
										• Tendency to make learning plans but may struggle with
										execution
									</li>
									<li>
										• Beginning to recognize the connection between health and
										productivity
									</li>
									<li>• Desire to make effective use of morning time</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					<ObjectRelationship
						title="Related Action Plans"
						description="Action plans suggested based on this analysis"
					>
						{analysis.relatedActionPlans.map((plan) => (
							<ActionPlanCard key={plan.id} actionPlan={plan} />
						))}
						<div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
							<Button
								variant="outline"
								asChild
								className="h-auto flex flex-col p-6 gap-2"
							>
								<Link
									href={`/dashboard/action-plans/new?analysisId=${analysis.id}`}
								>
									<Plus className="h-6 w-6" />
									<span>Create New Plan</span>
								</Link>
							</Button>
						</div>
					</ObjectRelationship>
				</TabsContent>

				<TabsContent value="interests" className="space-y-6">
					{analysis.interests.map((interest) => (
						<Card key={interest.name}>
							<CardHeader>
								<CardTitle>
									{interest.name} ({interest.percentage}%)
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="w-full bg-muted rounded-full h-2.5 mb-4">
									<div
										className="bg-primary h-2.5 rounded-full"
										style={{ width: `${interest.percentage}%` }}
									/>
								</div>
								<p className="text-muted-foreground mb-4">
									{interest.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{interest.tags.map((tag) => (
										<Badge key={tag} variant="outline">
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</TabsContent>

				<TabsContent value="patterns" className="space-y-6">
					{analysis.patterns.map((pattern) => (
						<Card key={pattern.name}>
							<CardHeader>
								<CardTitle>{pattern.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{pattern.description}</p>
							</CardContent>
						</Card>
					))}
				</TabsContent>

				<TabsContent value="recommendations" className="space-y-6">
					{analysis.recommendations.map((recommendation, index) => (
						<Card key={recommendation.name}>
							<CardHeader>
								<CardTitle>{recommendation.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									{recommendation.description}
								</p>
								<Button variant="link" className="px-0">
									View Related Action Plans
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</CardContent>
						</Card>
					))}
				</TabsContent>
			</Tabs>
		</DashboardShell>
	);
}
