import type { ActionPlan } from "../types";

export const mockActionPlans: ActionPlan[] = [
	{
		id: "ap-1",
		title: "Improve Communication Skills",
		description: "Work on verbal and non-verbal communication techniques",
		startDate: "2023-10-01",
		dueDate: "2023-12-15",
		category: "Personal Development",
		categoryId: "cat-1",
		completed: false,
		priority: "High",
		color: "#4f46e5",
		tasks: [
			{
				id: "task-1",
				title: "Join Toastmasters club",
				completed: true,
				dueDate: "2023-10-15",
				notes: "Local club meets every Tuesday at 7pm",
			},
			{
				id: "task-2",
				title: "Read 'How to Win Friends and Influence People'",
				completed: false,
				dueDate: "2023-11-01",
				notes: "Borrow from library or purchase e-book",
			},
			{
				id: "task-3",
				title: "Practice active listening techniques",
				completed: false,
				dueDate: "2023-11-15",
				notes: "Focus on one conversation per day",
			},
		],
		progress: 33,
		userId: "user-1",
		createdAt: "2023-09-28T10:30:00Z",
		updatedAt: "2023-10-15T14:20:00Z",
	},
	{
		id: "ap-2",
		title: "Establish Morning Routine",
		description: "Create and maintain a productive morning routine",
		startDate: "2023-09-15",
		dueDate: "2023-10-31",
		category: "Productivity",
		categoryId: "cat-2",
		completed: true,
		priority: "Medium",
		color: "#0ea5e9",
		tasks: [
			{
				id: "task-4",
				title: "Wake up at 6:00 AM consistently",
				completed: true,
				dueDate: "2023-09-22",
				notes: "Set multiple alarms if needed",
			},
			{
				id: "task-5",
				title: "Morning meditation for 10 minutes",
				completed: true,
				dueDate: "2023-09-30",
				notes: "Use Headspace app",
			},
			{
				id: "task-6",
				title: "Plan day's priorities",
				completed: true,
				dueDate: "2023-10-15",
				notes: "Use journal or planning app",
			},
		],
		progress: 100,
		userId: "user-1",
		createdAt: "2023-09-10T08:15:00Z",
		updatedAt: "2023-10-31T09:45:00Z",
	},
	{
		id: "ap-3",
		title: "Learn JavaScript Fundamentals",
		description: "Master core JavaScript concepts for web development",
		startDate: "2023-11-01",
		dueDate: "2024-01-31",
		category: "Education",
		categoryId: "cat-3",
		completed: false,
		priority: "High",
		color: "#f59e0b",
		tasks: [
			{
				id: "task-7",
				title: "Complete JavaScript basics course",
				completed: false,
				dueDate: "2023-11-30",
				notes: "Use freeCodeCamp or Codecademy",
			},
			{
				id: "task-8",
				title: "Build 3 small JavaScript projects",
				completed: false,
				dueDate: "2023-12-31",
				notes: "Ideas: todo app, calculator, quiz game",
			},
			{
				id: "task-9",
				title: "Learn ES6+ features",
				completed: false,
				dueDate: "2024-01-15",
				notes: "Focus on arrow functions, destructuring, and modules",
			},
		],
		progress: 0,
		userId: "user-1",
		createdAt: "2023-10-25T16:40:00Z",
		updatedAt: "2023-10-25T16:40:00Z",
	},
	{
		id: "ap-4",
		title: "Reduce Screen Time",
		description: "Decrease daily screen time for better mental health",
		startDate: "2023-10-10",
		dueDate: "2023-11-10",
		category: "Health",
		categoryId: "cat-4",
		completed: false,
		priority: "Low",
		color: "#10b981",
		tasks: [
			{
				id: "task-10",
				title: "Set up screen time tracking",
				completed: true,
				dueDate: "2023-10-12",
				notes: "Use built-in phone features or app",
			},
			{
				id: "task-11",
				title: "Establish phone-free zones",
				completed: false,
				dueDate: "2023-10-20",
				notes: "Bedroom and dining table",
			},
			{
				id: "task-12",
				title: "Find alternative activities",
				completed: false,
				dueDate: "2023-10-31",
				notes: "Reading, walking, crafts",
			},
		],
		progress: 33,
		userId: "user-1",
		createdAt: "2023-10-08T19:20:00Z",
		updatedAt: "2023-10-12T21:15:00Z",
	},
	{
		id: "ap-5",
		title: "Network Expansion",
		description: "Grow professional network in tech industry",
		startDate: "2023-11-15",
		dueDate: "2024-02-15",
		category: "Career",
		categoryId: "cat-5",
		completed: false,
		priority: "Medium",
		color: "#ec4899",
		tasks: [
			{
				id: "task-13",
				title: "Attend 3 industry meetups",
				completed: false,
				dueDate: "2023-12-31",
				notes: "Check Meetup.com for local events",
			},
			{
				id: "task-14",
				title: "Update LinkedIn profile",
				completed: false,
				dueDate: "2023-11-30",
				notes: "Add recent projects and skills",
			},
			{
				id: "task-15",
				title: "Connect with 10 new professionals",
				completed: false,
				dueDate: "2024-01-31",
				notes: "Focus on quality connections, not just quantity",
			},
		],
		progress: 0,
		userId: "user-1",
		createdAt: "2023-11-10T11:05:00Z",
		updatedAt: "2023-11-10T11:05:00Z",
	},
];
