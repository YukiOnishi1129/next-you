"use client";

import type React from "react";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { ActionPlanForm } from "../ActionPlanForm";

export function AIActionPlanGenerator() {
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedPlan, setGeneratedPlan] = useState<null | {
		title: string;
		description: string;
		category: string;
		tasks: { title: string; description: string }[];
	}>(null);

	const handleGenerate = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsGenerating(true);

		// Simulate AI generation with a timeout
		setTimeout(() => {
			setGeneratedPlan({
				title: "Improve Programming Skills",
				description:
					"A structured plan to enhance my programming abilities and stay current with modern development practices.",
				category: "career",
				tasks: [
					{
						title: "Complete React Advanced Course",
						description:
							"Finish the advanced React course focusing on hooks, context, and performance optimization.",
					},
					{
						title: "Build a Full-Stack Project",
						description:
							"Create a full-stack application using Next.js, TypeScript, and a database of choice.",
					},
					{
						title: "Contribute to Open Source",
						description:
							"Make at least 3 contributions to open source projects on GitHub.",
					},
					{
						title: "Learn Testing Best Practices",
						description:
							"Master unit, integration, and E2E testing with Jest and Testing Library.",
					},
				],
			});
			setIsGenerating(false);
		}, 2000);
	};

	const handleReset = () => {
		setGeneratedPlan(null);
	};

	if (generatedPlan) {
		return (
			<div className="space-y-4">
				<div className="bg-muted rounded-md p-4 mb-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium flex items-center gap-2">
							<Sparkles className="h-5 w-5 text-primary" />
							AI Generated Plan
						</h3>
						<Button variant="outline" size="sm" onClick={handleReset}>
							Generate Another
						</Button>
					</div>
				</div>

				<ActionPlanForm
					defaultValues={{
						title: generatedPlan.title,
						description: generatedPlan.description,
						category: generatedPlan.category,
						tasks: generatedPlan.tasks,
					}}
				/>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="bg-muted rounded-md p-4 mb-4">
				<p className="text-sm">
					Let AI suggest an action plan based on your goals and interests.
					Provide some information about what you want to achieve, and we'll
					generate a personalized action plan for you.
				</p>
			</div>

			<form onSubmit={handleGenerate} className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="goal">What do you want to achieve?</Label>
					<Input
						id="goal"
						placeholder="e.g., Improve my programming skills, Learn a new language, Get better at public speaking"
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="timeframe">Timeframe</Label>
					<Select defaultValue="month">
						<SelectTrigger>
							<SelectValue placeholder="Select a timeframe" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="week">1 week</SelectItem>
							<SelectItem value="month">1 month</SelectItem>
							<SelectItem value="quarter">3 months</SelectItem>
							<SelectItem value="halfyear">6 months</SelectItem>
							<SelectItem value="year">1 year</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="details">Additional details (optional)</Label>
					<Textarea
						id="details"
						placeholder="Add any specific requirements, constraints, or preferences"
						rows={4}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="category">Category</Label>
					<Select defaultValue="personal">
						<SelectTrigger>
							<SelectValue placeholder="Select a category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="personal">Personal Development</SelectItem>
							<SelectItem value="career">Career</SelectItem>
							<SelectItem value="education">Education</SelectItem>
							<SelectItem value="health">Health & Wellness</SelectItem>
							<SelectItem value="finance">Finance</SelectItem>
							<SelectItem value="relationships">Relationships</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<Button type="submit" className="w-full" disabled={isGenerating}>
					{isGenerating ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Generating Plan...
						</>
					) : (
						<>
							<Sparkles className="mr-2 h-4 w-4" />
							Generate Action Plan
						</>
					)}
				</Button>
			</form>
		</div>
	);
}
