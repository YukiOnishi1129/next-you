"use client";

import { Button } from "@/shared/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

export function ObjectViewToggle() {
	const [view, setView] = useState<"grid" | "list">("grid");

	return (
		<div className="flex items-center space-x-2">
			<Button
				variant={view === "grid" ? "default" : "outline"}
				size="icon"
				onClick={() => setView("grid")}
				className={view === "grid" ? "bg-rose-500 hover:bg-rose-600" : ""}
			>
				<LayoutGrid className="h-4 w-4" />
				<span className="sr-only">Grid view</span>
			</Button>
			<Button
				variant={view === "list" ? "default" : "outline"}
				size="icon"
				onClick={() => setView("list")}
				className={view === "list" ? "bg-rose-500 hover:bg-rose-600" : ""}
			>
				<List className="h-4 w-4" />
				<span className="sr-only">List view</span>
			</Button>
		</div>
	);
}
