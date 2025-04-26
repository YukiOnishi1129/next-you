export interface User {
	id: string;
	email: string;
	name?: string;
	image?: string;
	role: "user" | "admin";
	preferences: UserPreferences;
	createdAt: string;
	updatedAt: string;
	lastLoginAt?: string;
}

export interface UserPreferences {
	theme: "light" | "dark" | "system";
	emailNotifications: boolean;
	pushNotifications: boolean;
	reminderFrequency: "daily" | "weekly" | "monthly" | "never";
	defaultView: "grid" | "list";
	defaultTab: "list" | "calendar" | "progress";
	defaultSort: {
		field: string;
		direction: "asc" | "desc";
	};
}

export interface UserStats {
	totalActionPlans: number;
	completedActionPlans: number;
	completionRate: number;
	totalAnalyses: number;
	mostUsedCategories: Array<{
		id: string;
		name: string;
		count: number;
	}>;
	activityByDay: Record<string, number>; // ISO date string -> activity count
}

export interface AuthState {
	user: User | null;
	isLoading: boolean;
	error: string | null;
}
