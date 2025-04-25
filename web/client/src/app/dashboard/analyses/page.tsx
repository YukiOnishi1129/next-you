import { AnalysisCard } from "@/features/analysis/components/AnalysisCard";
import { ObjectFilter } from "@/shared/components/common/ObjectFilter";
import { ObjectGrid } from "@/shared/components/common/ObjectGrid";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Button } from "@/shared/components/ui/button";
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AnalysesPage() {
	// Update the sample data to English
	const analyses = [
		{
			id: "1",
			date: "April 18, 2024",
			summary:
				"Conversations focused on programming learning and health management.",
			categories: ["Programming", "Health", "Productivity"],
		},
		{
			id: "2",
			date: "April 15, 2024",
			summary:
				"Increased questions about health management and exercise habits. Interest in improving morning routines.",
			categories: ["Health", "Morning Routine", "Habit Formation"],
		},
		{
			id: "3",
			date: "April 10, 2024",
			summary:
				"Questions centered on career development and skill improvement. Particularly thoughts about job changes.",
			categories: ["Career", "Skill Development", "Job Change"],
		},
		{
			id: "4",
			date: "April 5, 2024",
			summary:
				"Increased conversations about reading habits and knowledge management. Interest in efficient information organization methods.",
			categories: [
				"Reading",
				"Knowledge Management",
				"Information Organization",
			],
		},
		{
			id: "5",
			date: "April 1, 2024",
			summary:
				"Many questions about project management and time management. Feeling challenged with managing tasks with deadlines.",
			categories: ["Project Management", "Time Management", "Task Management"],
		},
	];

	// Extended list of categories for demonstration
	const allCategories = [
		{ name: "All", value: "all" },
		{ name: "Recent", value: "recent" },
		{ name: "Programming", value: "programming" },
		{ name: "Health", value: "health" },
		{ name: "Productivity", value: "productivity" },
		{ name: "Career", value: "career" },
		{ name: "Reading", value: "reading" },
		{ name: "Knowledge Management", value: "knowledge-management" },
		{ name: "Time Management", value: "time-management" },
		{ name: "Task Management", value: "task-management" },
		{ name: "Skill Development", value: "skill-development" },
		{ name: "Job Change", value: "job-change" },
		{ name: "Morning Routine", value: "morning-routine" },
		{ name: "Habit Formation", value: "habit-formation" },
		{ name: "Information Organization", value: "information-organization" },
		{ name: "Project Management", value: "project-management" },
		{ name: "Learning", value: "learning" },
		{ name: "Personal Growth", value: "personal-growth" },
		{ name: "Relationships", value: "relationships" },
		{ name: "Finance", value: "finance" },
	];

	// Update the page header and button text
	return (
		<DashboardShell>
			<PageHeader
				heading="Analysis"
				description="View analysis results and insights from your ChatGPT history"
				action={
					<Button asChild className="bg-rose-500 hover:bg-rose-600">
						<Link href="/dashboard/analyses/new">
							<Plus className="mr-2 h-4 w-4" />
							New Analysis
						</Link>
					</Button>
				}
			/>

			<div className="mb-6">
				<ScrollArea className="w-full whitespace-nowrap">
					<div className="flex space-x-2 p-1">
						{allCategories.map((filter) => (
							<Button
								key={filter.value}
								variant={filter.value === "all" ? "default" : "outline"}
								size="sm"
								className={
									filter.value === "all" ? "bg-rose-500 hover:bg-rose-600" : ""
								}
							>
								{filter.name}
							</Button>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>

			<div className="flex items-center justify-between mb-4">
				<ObjectFilter
					sortOptions={[
						{ name: "Newest", value: "newest" },
						{ name: "Oldest", value: "oldest" },
						{ name: "By Category", value: "category" },
					]}
				/>
			</div>

			<ObjectGrid>
				<div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
					<Button
						variant="outline"
						asChild
						className="h-auto flex flex-col p-8 gap-4"
					>
						<Link href="/dashboard/analyses/new">
							<Plus className="h-8 w-8" />
							<span>New Analysis</span>
						</Link>
					</Button>
				</div>
				{analyses.map((analysis) => (
					<AnalysisCard key={analysis.id} analysis={analysis} />
				))}
			</ObjectGrid>
		</DashboardShell>
	);
}
