import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import { ArrowRight, CalendarIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	completed: boolean;
	priority: string;
	color: string;
}

interface ActionPlanListProps {
	actionPlans: ActionPlan[];
}

export function ActionPlanList({ actionPlans }: ActionPlanListProps) {
	return (
		<div className="space-y-3">
			{actionPlans.map((plan) => (
				<Card key={plan.id} className="p-0 overflow-hidden">
					<Link href={`/dashboard/action-plans/${plan.id}`} className="block">
						<div className="flex flex-col sm:flex-row items-start">
							<div
								className="w-full sm:w-1 h-2 sm:h-full"
								style={{ backgroundColor: plan.color }}
							/>
							<div className="p-4 flex-1">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<h3 className="text-lg font-medium line-clamp-1">
											{plan.title}
											{plan.completed && (
												<CheckCircle2 className="inline-block ml-2 h-4 w-4 text-green-500" />
											)}
										</h3>
										<p className="text-sm text-muted-foreground line-clamp-1">
											{plan.description}
										</p>
									</div>

									<div className="flex flex-wrap items-center gap-2">
										<Badge variant="outline" className="border-gray-700">
											{plan.category}
										</Badge>
										<Badge
											className={
												plan.priority === "High"
													? "bg-red-500"
													: plan.priority === "Medium"
														? "bg-amber-500"
														: "bg-blue-500"
											}
										>
											{plan.priority}
										</Badge>
										<div className="flex items-center text-xs text-muted-foreground">
											<CalendarIcon className="mr-1 h-3 w-3" />
											<span>{new Date(plan.dueDate).toLocaleDateString()}</span>
										</div>
										<ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
									</div>
								</div>
							</div>
						</div>
					</Link>
				</Card>
			))}
		</div>
	);
}
