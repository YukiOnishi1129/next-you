export interface Notification {
	id: string;
	type: NotificationType;
	title: string;
	message: string;
	read: boolean;
	createdAt: string;
	userId: string;
	data?: Record<string, unknown>;
	link?: string;
}

export type NotificationType =
	| "action_plan_due"
	| "action_plan_overdue"
	| "analysis_complete"
	| "system_announcement"
	| "reminder"
	| "achievement";

export interface NotificationPreferences {
	actionPlanReminders: boolean;
	actionPlanOverdue: boolean;
	analysisComplete: boolean;
	systemAnnouncements: boolean;
	achievements: boolean;
}

export interface NotificationFilter {
	read?: boolean;
	type?: NotificationType;
	dateRange?: {
		start: string;
		end: string;
	};
}
