export interface Category {
	id: string;
	name: string;
	description?: string;
	color: string;
	icon?: string;
	actionPlanCount: number;
	completedCount: number;
	userId: string;
	createdAt: string;
	updatedAt: string;
	parentId?: string;
	children?: Category[];
}

export interface CategoryStats {
	totalActionPlans: number;
	completedActionPlans: number;
	incompleteActionPlans: number;
	completionRate: number; // 0-100
	averageCompletionTime?: number; // in days
}

export interface CategoryFilter {
	search?: string;
	hasActionPlans?: boolean;
	parentOnly?: boolean;
}

export interface CategorySort {
	field: "name" | "actionPlanCount" | "completionRate" | "createdAt";
	direction: "asc" | "desc";
}
