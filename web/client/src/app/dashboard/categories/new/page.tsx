import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewCategoryPage() {
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/categories">
						<ArrowLeft className="h-4 w-4" />
						Back to Categories
					</Link>
				</Button>
			</div>

			<PageHeader
				heading="Create New Category"
				description="Create a new category to organize your action plans"
			/>

			<Card>
				<CardHeader>
					<CardTitle>Category Information</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-6">
						<div className="grid w-full gap-1.5">
							<Label htmlFor="name">Category Name</Label>
							<Input id="name" placeholder="Enter category name" />
						</div>

						<div className="grid w-full gap-1.5">
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								placeholder="Enter category description"
								className="min-h-[100px]"
							/>
						</div>

						<div className="grid w-full gap-1.5">
							<Label htmlFor="color">Color</Label>
							<div className="flex gap-2">
								{[
									"bg-primary",
									"bg-blue-500",
									"bg-green-500",
									"bg-amber-500",
									"bg-purple-500",
								].map((color) => (
									<div
										key={color}
										className={`w-8 h-8 rounded-full cursor-pointer ${color} border-2 ${
											color === "bg-primary"
												? "border-black dark:border-white"
												: "border-transparent"
										}`}
									/>
								))}
							</div>
						</div>

						<div className="grid w-full gap-1.5">
							<Label htmlFor="related">Related Categories</Label>
							<Input
								id="related"
								placeholder="Enter related categories separated by commas"
							/>
							<p className="text-sm text-muted-foreground">
								Example: Programming, Learning, Technology
							</p>
						</div>

						<Button className="w-full">Create Category</Button>
					</form>
				</CardContent>
			</Card>
		</DashboardShell>
	);
}
