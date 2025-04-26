"use client";

import { cn } from "@/shared/lib/utils";
import {
	BarChart2,
	FolderKanban,
	Home,
	ListTodo,
	Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: Home,
	},
	{
		title: "Analyses",
		href: "/dashboard/analyses",
		icon: BarChart2,
	},
	{
		title: "Action Plans",
		href: "/dashboard/action-plans",
		icon: ListTodo,
	},
	{
		title: "Categories",
		href: "/dashboard/categories",
		icon: FolderKanban,
	},
	{
		title: "Settings",
		href: "/dashboard/settings",
		icon: Settings,
	},
];

export function SideNav() {
	const pathname = usePathname();

	return (
		<nav className="hidden w-full flex-col md:flex">
			<div className="space-y-1 py-2">
				{items.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							"group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
							pathname === item.href || pathname.startsWith(`${item.href}/`)
								? "bg-accent text-accent-foreground"
								: "transparent",
						)}
					>
						<item.icon className="mr-2 h-4 w-4" />
						<span>{item.title}</span>
					</Link>
				))}
			</div>
		</nav>
	);
}
