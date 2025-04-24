import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/shared/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface ActionPlanProps {
	actionPlan: {
		id: string;
		title: string;
		description: string;
		dueDate: string;
		category: string;
		completed: boolean;
		priority: string;
	};
}

export function ActionPlanCard({ actionPlan }: ActionPlanProps) {
	// Priority color mapping
	const priorityColor =
		{
			High: "text-red-500 border-red-500",
			Medium: "text-amber-500 border-amber-500",
			Low: "text-blue-500 border-blue-500",
		}[actionPlan.priority] || "";

	return (
		<Card
			className={`flex flex-col ${actionPlan.completed ? "border-green-500/20 bg-green-500/5" : ""}`}
		>
			<CardHeader className="flex flex-row items-center gap-2">
				<div className="flex-1">
					<h3
						className={`font-medium ${actionPlan.completed ? "line-through text-muted-foreground" : ""}`}
					>
						{actionPlan.title}
					</h3>
					<p className="text-xs text-muted-foreground">
						Category: {actionPlan.category}
					</p>
				</div>
				<Badge variant="outline" className={priorityColor}>
					{actionPlan.priority}
				</Badge>
			</CardHeader>
			<CardContent className="flex-1">
				<p
					className={`text-sm text-muted-foreground line-clamp-2 ${actionPlan.completed ? "line-through" : ""}`}
				>
					{actionPlan.description}
				</p>
			</CardContent>
			<CardFooter className="flex items-center justify-between">
				<div className="flex items-center text-xs text-muted-foreground">
					<Calendar className="mr-1 h-3 w-3" />
					Due: {actionPlan.dueDate}
				</div>
				<Button variant="ghost" size="sm" asChild>
					<Link href={`/dashboard/action-plans/${actionPlan.id}`}>
						View
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
