export interface ActionPlan {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	completed: boolean;
	priority: string;
	color?: string;
	steps?: Array<{
		id: string;
		title: string;
		completed: boolean;
	}>;
}
