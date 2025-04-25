"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { actionPlanService } from "../services/actionPlanService";
import type { ActionPlan, ActionPlanFilter } from "../types";

const defaultFilter: ActionPlanFilter = {
	search: "",
	category: null,
	priority: null,
	status: "all",
	sortBy: "dueDate",
	sortDirection: "asc",
};

export function useActionPlans(initialFilter: Partial<ActionPlanFilter> = {}) {
	const [actionPlans, setActionPlans] = useState<ActionPlan[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [filter, setFilter] = useState<ActionPlanFilter>({
		...defaultFilter,
		...initialFilter,
	});

	const fetchActionPlans = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await actionPlanService.getActionPlans(filter);
			setActionPlans(data);
		} catch (err) {
			setError("Failed to fetch action plans");
			toast.error("FAIL", {
				description: "Failed to fetch action plans",
			});
		} finally {
			setLoading(false);
		}
	}, [filter]);

	useEffect(() => {
		fetchActionPlans();
	}, [fetchActionPlans]);

	const updateFilter = useCallback((updates: Partial<ActionPlanFilter>) => {
		setFilter((prev) => ({ ...prev, ...updates }));
	}, []);

	const toggleCompletion = useCallback(async (id: string) => {
		try {
			const updatedPlan =
				await actionPlanService.toggleActionPlanCompletion(id);
			setActionPlans((prev) =>
				prev.map((plan) => (plan.id === id ? updatedPlan : plan)),
			);
			toast.success("SUCCESS", {
				description: `Action plan ${updatedPlan.completed ? "completed" : "marked as active"}`,
			});
		} catch (err) {
			toast.error("FAIL", {
				description: "Failed to update action plan status",
			});
		}
	}, []);

	const deleteActionPlan = useCallback(async (id: string) => {
		try {
			await actionPlanService.deleteActionPlan(id);
			setActionPlans((prev) => prev.filter((plan) => plan.id !== id));
			toast.success("SUCCESS", {
				description: "Action plan deleted successfully",
			});
		} catch (err) {
			toast.error("FAIL", {
				description: "Failed to delete action plan",
			});
		}
	}, []);

	return {
		actionPlans,
		loading,
		error,
		filter,
		updateFilter,
		toggleCompletion,
		deleteActionPlan,
		refresh: fetchActionPlans,
	};
}
