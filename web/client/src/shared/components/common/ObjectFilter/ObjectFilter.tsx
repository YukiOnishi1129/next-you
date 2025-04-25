"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface FilterOption {
	name: string;
	value: string;
}

interface ObjectFilterProps {
	filters?: FilterOption[];
	sortOptions: FilterOption[];
}

export function ObjectFilter({ filters, sortOptions }: ObjectFilterProps) {
	const [activeFilter, setActiveFilter] = useState("all");

	return (
		<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
			{filters && (
				<div className="flex flex-wrap gap-2">
					{filters.map((filter) => (
						<Button
							key={filter.value}
							variant={activeFilter === filter.value ? "default" : "outline"}
							size="sm"
							onClick={() => setActiveFilter(filter.value)}
							className={
								activeFilter === filter.value
									? "bg-rose-500 text-white hover:bg-rose-600"
									: ""
							}
						>
							{filter.name}
						</Button>
					))}
				</div>
			)}
			<div className="flex items-center gap-2 sm:ml-auto">
				<div className="relative">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="検索..."
						className="w-[150px] sm:w-[200px] pl-8"
					/>
				</div>
				{sortOptions.length > 0 && (
					<Select defaultValue={sortOptions[0].value}>
						<SelectTrigger className="w-[150px]">
							<SelectValue placeholder="並び替え" />
						</SelectTrigger>
						<SelectContent>
							{sortOptions.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			</div>
		</div>
	);
}
