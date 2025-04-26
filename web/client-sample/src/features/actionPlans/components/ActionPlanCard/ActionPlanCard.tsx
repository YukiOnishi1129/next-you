"use client";
import type { ActionPlan } from "@/features/actionPlans/types";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight, Calendar, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ActionPlanCardProps {
	actionPlan: ActionPlan;
	onToggleCompletion?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export function ActionPlanCard({
	actionPlan,
	onToggleCompletion,
	onDelete,
}: ActionPlanCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	// Priority color mapping
	const priorityColor =
		{
			High: "text-red-500 border-red-500",
			Medium: "text-amber-500 border-amber-500",
			Low: "text-blue-500 border-blue-500",
		}[actionPlan.priority] || "";

	const handleToggleCompletion = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (onToggleCompletion) {
			onToggleCompletion(actionPlan.id);
		}
	};

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (onDelete) {
			onDelete(actionPlan.id);
		}
	};

	return (
		<Card
			className={`flex flex-col ${actionPlan.completed ? "border-green-500/20 bg-green-500/5" : ""} relative`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<CardHeader className="flex flex-row items-center gap-2">
				<div className="flex-1">
					<div className="flex items-center gap-2">
						<Checkbox
							checked={actionPlan.completed}
							onClick={handleToggleCompletion}
							className="mr-1"
						/>
						<h3
							className={`font-medium ${actionPlan.completed ? "line-through text-muted-foreground" : ""}`}
						>
							{actionPlan.title}
						</h3>
					</div>
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
					Due:{" "}
					{formatDistanceToNow(new Date(actionPlan.dueDate), {
						addSuffix: true,
					})}
				</div>
				<div className="flex items-center gap-1">
					{isHovered && (
						<>
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8"
								onClick={handleDelete}
							>
								<Trash2 className="h-4 w-4 text-red-500" />
							</Button>
							<Button variant="ghost" size="icon" className="h-8 w-8" asChild>
								<Link href={`/dashboard/action-plans/${actionPlan.id}/edit`}>
									<Edit className="h-4 w-4" />
								</Link>
							</Button>
						</>
					)}
					<Button variant="ghost" size="sm" asChild>
						<Link href={`/dashboard/action-plans/${actionPlan.id}`}>
							View
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
