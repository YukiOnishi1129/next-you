export interface DashboardStats {
	actionPlans: {
		total: number;
		completed: number;
		overdue: number;
		upcoming: number;
		completionRate: number;
	};
	categories: {
		total: number;
		mostUsed: Array<{
			id: string;
			name: string;
			count: number;
		}>;
	};
	analyses: {
		total: number;
		recent: number;
		insightsGenerated: number;
	};
	activity: {
		daily: Array<{
			date: string;
			count: number;
		}>;
		weekly: Array<{
			week: string;
			count: number;
		}>;
	};
}

export interface DashboardFilter {
	timeRange: "today" | "week" | "month" | "year" | "all";
	categories?: string[];
}

export interface RecentActivity {
	id: string;
	type:
		| "action_plan_created"
		| "action_plan_completed"
		| "analysis_created"
		| "category_created";
	entityId: string;
	entityTitle: string;
	timestamp: string;
	userId: string;
}

export interface UpcomingTask {
	id: string;
	title: string;
	dueDate: string;
	category: string;
	priority: "High" | "Medium" | "Low";
	actionPlanId: string;
}
