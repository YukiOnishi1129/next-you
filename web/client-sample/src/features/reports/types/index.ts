export interface Report {
	id: string;
	title: string;
	type: "weekly" | "monthly" | "custom";
	dateRange: {
		start: string;
		end: string;
	};
	createdAt: string;
	userId: string;
	data: ReportData;
}

export interface ReportData {
	actionPlans: {
		total: number;
		completed: number;
		created: number;
		completionRate: number;
		byCategory: Record<string, number>;
		byPriority: Record<string, number>;
	};
	analyses: {
		total: number;
		insightsGenerated: number;
		topCategories: Array<{
			name: string;
			percentage: number;
		}>;
	};
	timeSpent: {
		total: number; // in minutes
		byCategory: Record<string, number>;
	};
	progress: {
		previousPeriod: {
			completionRate: number;
			actionPlansCompleted: number;
		};
		change: {
			completionRate: number;
			actionPlansCompleted: number;
		};
	};
}

export interface ReportOptions {
	includeCategories: boolean;
	includeAnalyses: boolean;
	includeTimeSpent: boolean;
	includeComparison: boolean;
	format: "pdf" | "csv" | "json";
}
