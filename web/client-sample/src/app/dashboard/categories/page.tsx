import { CategoryCard } from "@/features/categories/components/CategoryCard";
import { ObjectFilter } from "@/shared/components/common/ObjectFilter";
import { ObjectGrid } from "@/shared/components/common/ObjectGrid";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
	// Update the sample data to English
	const categories = [
		{ id: "1", name: "Programming", actionPlanCount: 8, completedCount: 2 },
		{ id: "2", name: "Health", actionPlanCount: 5, completedCount: 3 },
		{ id: "3", name: "Productivity", actionPlanCount: 6, completedCount: 1 },
		{ id: "4", name: "Reading", actionPlanCount: 3, completedCount: 1 },
		{ id: "5", name: "Career", actionPlanCount: 2, completedCount: 0 },
	];

	return (
		<DashboardShell>
			<PageHeader
				heading="Categories"
				description="Action plans classified by areas of interest"
				action={
					<Button asChild>
						<Link href="/dashboard/categories/new">
							<Plus className="mr-2 h-4 w-4" />
							New Category
						</Link>
					</Button>
				}
			/>

			<ObjectFilter
				filters={[
					{ name: "All", value: "all" },
					{ name: "In Progress", value: "in-progress" },
					{ name: "Completed", value: "completed" },
				]}
				sortOptions={[
					{ name: "By Name", value: "name" },
					{ name: "By Action Plan Count", value: "plan-count" },
					{ name: "By Progress", value: "progress" },
				]}
			/>

			<ObjectGrid>
				<div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
					<Button
						variant="outline"
						asChild
						className="h-auto flex flex-col p-8 gap-4"
					>
						<Link href="/dashboard/categories/new">
							<Plus className="h-8 w-8" />
							<span>New Category</span>
						</Link>
					</Button>
				</div>
				{categories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</ObjectGrid>
		</DashboardShell>
	);
}
