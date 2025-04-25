export interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	categoryId: string;
	completed: boolean;
	priority: "Low" | "Medium" | "High";
	color: string;
	tasks: ActionPlanTask[];
	progress: number;
	userId: string;
	createdAt: string;
	updatedAt: string;
}

export interface ActionPlanTask {
	id: string;
	title: string;
	completed: boolean;
	dueDate: string | null;
	notes: string | null;
}

export interface ActionPlanFilter {
	search: string;
	category: string | null;
	priority: string | null;
	status: "all" | "completed" | "active";
	sortBy: "dueDate" | "priority" | "title" | "createdAt";
	sortDirection: "asc" | "desc";
}
