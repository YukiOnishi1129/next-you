export interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	completed: boolean;
	priority: "High" | "Medium" | "Low";
	color?: string;
	steps?: ActionPlanStep[];
	tags?: string[];
	createdAt: string;
	updatedAt: string;
	userId: string;
	categoryId: string;
}

export interface ActionPlanStep {
	id: string;
	title: string;
	description?: string;
	completed: boolean;
	dueDate?: string;
	actionPlanId: string;
	order: number;
	createdAt: string;
	updatedAt: string;
}

export interface ActionPlanComment {
	id: string;
	content: string;
	actionPlanId: string;
	userId: string;
	createdAt: string;
	updatedAt: string;
}

export interface ActionPlanFilter {
	status?: "all" | "completed" | "incomplete" | "overdue";
	priority?: "High" | "Medium" | "Low";
	category?: string;
	startDate?: string;
	endDate?: string;
	search?: string;
}

export interface ActionPlanSort {
	field:
		| "dueDate"
		| "startDate"
		| "title"
		| "priority"
		| "category"
		| "createdAt"
		| "updatedAt";
	direction: "asc" | "desc";
}

export interface ActionPlanStats {
	total: number;
	completed: number;
	incomplete: number;
	overdue: number;
	upcomingDue: number;
	byCategory: Record<string, { total: number; completed: number }>;
	byPriority: Record<string, { total: number; completed: number }>;
}
