"use client";

import type React from "react";

import { Button } from "@/shared/components/ui/button";
import { Calendar } from "@/shared/components/ui/calendar";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { cn } from "@/shared/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Task = {
	id: string;
	title: string;
	description: string;
};

type ActionPlanFormProps = {
	defaultValues?: {
		title?: string;
		description?: string;
		category?: string;
		tasks?: { title: string; description: string }[];
	};
};

export function ActionPlanForm({ defaultValues }: ActionPlanFormProps = {}) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [title, setTitle] = useState(defaultValues?.title || "");
	const [description, setDescription] = useState(
		defaultValues?.description || "",
	);
	const [category, setCategory] = useState(
		defaultValues?.category || "personal",
	);
	const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
	const [tasks, setTasks] = useState<Task[]>(
		defaultValues?.tasks
			? defaultValues.tasks.map((task, index) => ({
					id: `task-${index}`,
					title: task.title,
					description: task.description,
				}))
			: [{ id: "task-1", title: "", description: "" }],
	);

	const addTask = () => {
		setTasks([
			...tasks,
			{ id: `task-${Date.now()}`, title: "", description: "" },
		]);
	};

	const removeTask = (id: string) => {
		if (tasks.length > 1) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	};

	const updateTask = (
		id: string,
		field: "title" | "description",
		value: string,
	) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, [field]: value } : task,
			),
		);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call with a timeout
		setTimeout(() => {
			setIsSubmitting(false);
			router.push("/dashboard/action-plans");
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid gap-4 md:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Input
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter action plan title"
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="category">Category</Label>
					<Select value={category} onValueChange={setCategory}>
						<SelectTrigger>
							<SelectValue placeholder="Select a category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="personal">Personal Development</SelectItem>
							<SelectItem value="career">Career</SelectItem>
							<SelectItem value="education">Education</SelectItem>
							<SelectItem value="health">Health & Wellness</SelectItem>
							<SelectItem value="finance">Finance</SelectItem>
							<SelectItem value="relationships">Relationships</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Describe your action plan"
					rows={3}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="dueDate">Due Date (Optional)</Label>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							id="dueDate"
							variant={"outline"}
							className={cn(
								"w-full justify-start text-left font-normal",
								!dueDate && "text-muted-foreground",
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{dueDate ? format(dueDate, "PPP") : "Select a date"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={dueDate}
							onSelect={setDueDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>

			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-medium">Tasks</h3>
					<Button type="button" variant="outline" size="sm" onClick={addTask}>
						<Plus className="h-4 w-4 mr-1" /> Add Task
					</Button>
				</div>

				<div className="space-y-4">
					{tasks.map((task, index) => (
						<Card key={task.id}>
							<CardHeader className="p-4 pb-2">
								<div className="flex items-center justify-between">
									<CardTitle className="text-sm font-medium">
										Task {index + 1}
									</CardTitle>
									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={() => removeTask(task.id)}
										disabled={tasks.length === 1}
										className="h-8 w-8 p-0"
									>
										<Trash2 className="h-4 w-4 text-muted-foreground" />
									</Button>
								</div>
							</CardHeader>
							<CardContent className="p-4 pt-0 space-y-3">
								<div className="space-y-2">
									<Label htmlFor={`task-${task.id}-title`}>Title</Label>
									<Input
										id={`task-${task.id}-title`}
										value={task.title}
										onChange={(e) =>
											updateTask(task.id, "title", e.target.value)
										}
										placeholder="Task title"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor={`task-${task.id}-description`}>
										Description
									</Label>
									<Textarea
										id={`task-${task.id}-description`}
										value={task.description}
										onChange={(e) =>
											updateTask(task.id, "description", e.target.value)
										}
										placeholder="Task description"
										rows={2}
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className="flex justify-end space-x-2 pt-4">
				<Button
					type="button"
					variant="outline"
					onClick={() => router.push("/dashboard/action-plans")}
				>
					Cancel
				</Button>
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Saving...
						</>
					) : (
						"Save Action Plan"
					)}
				</Button>
			</div>
		</form>
	);
}
