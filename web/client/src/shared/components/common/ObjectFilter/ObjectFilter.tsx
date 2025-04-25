"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { useState } from "react";

interface FilterOption {
	name: string;
	value: string;
}

interface ObjectFilterProps {
	filters: FilterOption[];
	sortOptions: FilterOption[];
}

export function ObjectFilter({ filters, sortOptions }: ObjectFilterProps) {
	const [activeFilter, setActiveFilter] = useState("all");

	return (
		<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
			<div className="flex flex-wrap gap-2">
				{filters.map((filter) => (
					<Button
						key={filter.value}
						variant={activeFilter === filter.value ? "default" : "outline"}
						size="sm"
						onClick={() => setActiveFilter(filter.value)}
						className={
							activeFilter === filter.value
								? "bg-rose-500 hover:bg-rose-600"
								: ""
						}
					>
						{filter.name}
					</Button>
				))}
			</div>
			<Select defaultValue={sortOptions[0].value}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Sort by" />
				</SelectTrigger>
				<SelectContent>
					{sortOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
