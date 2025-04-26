import { mockActionPlans } from "../data/mockData";
import type { ActionPlan, ActionPlanFilter } from "../types";

// Helper function to filter action plans
const filterActionPlans = (
	actionPlans: ActionPlan[],
	filter: ActionPlanFilter,
): ActionPlan[] => {
	return actionPlans.filter((plan) => {
		// Filter by search term
		if (
			filter.search &&
			!plan.title.toLowerCase().includes(filter.search.toLowerCase()) &&
			!plan.description.toLowerCase().includes(filter.search.toLowerCase())
		) {
			return false;
		}

		// Filter by category
		if (filter.category && plan.categoryId !== filter.category) {
			return false;
		}

		// Filter by priority
		if (
			filter.priority &&
			plan.priority.toLowerCase() !== filter.priority.toLowerCase()
		) {
			return false;
		}

		// Filter by status
		if (filter.status === "completed" && !plan.completed) {
			return false;
		}
		if (filter.status === "active" && plan.completed) {
			return false;
		}

		return true;
	});
};

// Helper function to sort action plans
const sortActionPlans = (
	actionPlans: ActionPlan[],
	sortBy: string,
	sortDirection: "asc" | "desc",
): ActionPlan[] => {
	return [...actionPlans].sort((a, b) => {
		let comparison = 0;

		switch (sortBy) {
			case "dueDate":
				comparison =
					new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
				break;
			case "priority": {
				const priorityValues = { High: 3, Medium: 2, Low: 1 };
				comparison =
					(priorityValues[a.priority] || 0) - (priorityValues[b.priority] || 0);
				break;
			}
			case "title":
				comparison = a.title.localeCompare(b.title);
				break;
			case "createdAt":
				comparison =
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
				break;
			default:
				comparison = 0;
		}

		return sortDirection === "asc" ? comparison : -comparison;
	});
};

export const actionPlanService = {
	// Get all action plans with optional filtering and sorting
	getActionPlans: async (filter: ActionPlanFilter): Promise<ActionPlan[]> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 300));

		const filteredPlans = filterActionPlans(mockActionPlans, filter);
		return sortActionPlans(filteredPlans, filter.sortBy, filter.sortDirection);
	},

	// Get a single action plan by ID
	getActionPlanById: async (id: string): Promise<ActionPlan | null> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 200));

		const plan = mockActionPlans.find((plan) => plan.id === id);
		return plan || null;
	},

	// Create a new action plan
	createActionPlan: async (
		actionPlan: Omit<ActionPlan, "id" | "createdAt" | "updatedAt">,
	): Promise<ActionPlan> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		const newActionPlan: ActionPlan = {
			...actionPlan,
			id: `ap-${Date.now()}`,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		// In a real app, we would add this to the database
		// For now, we'll just return the new action plan
		return newActionPlan;
	},

	// Update an existing action plan
	updateActionPlan: async (
		id: string,
		updates: Partial<ActionPlan>,
	): Promise<ActionPlan> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 400));

		const planIndex = mockActionPlans.findIndex((plan) => plan.id === id);
		if (planIndex === -1) {
			throw new Error(`Action plan with ID ${id} not found`);
		}

		const updatedPlan: ActionPlan = {
			...mockActionPlans[planIndex],
			...updates,
			updatedAt: new Date().toISOString(),
		};

		// In a real app, we would update the database
		// For now, we'll just return the updated action plan
		return updatedPlan;
	},

	// Delete an action plan
	deleteActionPlan: async (id: string): Promise<void> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 300));

		const planIndex = mockActionPlans.findIndex((plan) => plan.id === id);
		if (planIndex === -1) {
			throw new Error(`Action plan with ID ${id} not found`);
		}

		// In a real app, we would delete from the database
		// For now, we'll just simulate success
	},

	// Toggle completion status of an action plan
	toggleActionPlanCompletion: async (id: string): Promise<ActionPlan> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 200));

		const planIndex = mockActionPlans.findIndex((plan) => plan.id === id);
		if (planIndex === -1) {
			throw new Error(`Action plan with ID ${id} not found`);
		}

		const updatedPlan: ActionPlan = {
			...mockActionPlans[planIndex],
			completed: !mockActionPlans[planIndex].completed,
			updatedAt: new Date().toISOString(),
		};

		// In a real app, we would update the database
		// For now, we'll just return the updated action plan
		return updatedPlan;
	},
};
