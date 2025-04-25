export type ID = string;

export interface BaseEntity {
	id: ID;
	createdAt: string;
	updatedAt: string;
}

export interface Timestamps {
	createdAt: string;
	updatedAt: string;
}

export type SortDirection = "asc" | "desc";

export interface SelectOption {
	label: string;
	value: string;
}

export interface FilterOption {
	name: string;
	value: string;
}

export interface SortOption {
	name: string;
	value: string;
}

export interface DateRange {
	start: Date | string;
	end: Date | string;
}

export type ViewMode = "grid" | "list" | "calendar";

export type ThemeMode = "light" | "dark" | "system";

export type Status = "idle" | "loading" | "success" | "error";
