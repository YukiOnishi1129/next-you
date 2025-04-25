export interface Settings {
	profile: ProfileSettings;
	account: AccountSettings;
	notifications: NotificationSettings;
	appearance: AppearanceSettings;
	privacy: PrivacySettings;
	integrations: IntegrationSettings[];
}

export interface ProfileSettings {
	name: string;
	bio?: string;
	image?: string;
	timezone: string;
	language: string;
}

export interface AccountSettings {
	email: string;
	password?: string;
	twoFactorEnabled: boolean;
	connectedAccounts: ConnectedAccount[];
}

export interface ConnectedAccount {
	provider: "google" | "github" | "twitter" | "facebook";
	id: string;
	email: string;
	name?: string;
	image?: string;
	connectedAt: string;
}

export interface NotificationSettings {
	email: {
		actionPlanReminders: boolean;
		weeklyDigest: boolean;
		newAnalysisAvailable: boolean;
		systemAnnouncements: boolean;
	};
	push: {
		actionPlanReminders: boolean;
		newAnalysisAvailable: boolean;
		systemAnnouncements: boolean;
	};
	reminderTime?: string; // HH:MM format
	reminderDays: Array<
		| "monday"
		| "tuesday"
		| "wednesday"
		| "thursday"
		| "friday"
		| "saturday"
		| "sunday"
	>;
}

export interface AppearanceSettings {
	theme: "light" | "dark" | "system";
	fontSize: "small" | "medium" | "large";
	reducedMotion: boolean;
	colorScheme: "default" | "blue" | "green" | "purple" | "orange" | "pink";
}

export interface PrivacySettings {
	dataCollection: boolean;
	shareAnalytics: boolean;
	cookiePreferences: {
		necessary: boolean;
		functional: boolean;
		analytics: boolean;
		advertising: boolean;
	};
	dataRetention: "30days" | "90days" | "1year" | "forever";
}

export interface IntegrationSettings {
	id: string;
	provider: string;
	name: string;
	enabled: boolean;
	connectedAt: string;
	lastSyncAt?: string;
	config: Record<string, unknown>;
}
