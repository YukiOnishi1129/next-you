export interface Achievement {
	id: string;
	title: string;
	description: string;
	icon: string;
	category: "action_plans" | "analyses" | "consistency" | "exploration";
	level: "bronze" | "silver" | "gold" | "platinum";
	progress: number; // 0-100
	completed: boolean;
	completedAt?: string;
	userId: string;
}

export interface AchievementCriteria {
	type: "count" | "streak" | "percentage" | "time";
	target: number;
	current: number;
	metric: string;
}

export interface AchievementCategory {
	id: string;
	name: string;
	description: string;
	achievements: Achievement[];
}

export interface UserAchievementStats {
	total: number;
	completed: number;
	bronze: number;
	silver: number;
	gold: number;
	platinum: number;
	recentlyUnlocked: Achievement[];
}
