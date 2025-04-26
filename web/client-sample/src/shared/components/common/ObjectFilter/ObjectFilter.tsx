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
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface FilterOption {
	name: string;
	value: string;
}

interface ObjectFilterProps {
	filters?: FilterOption[];
	sortOptions: FilterOption[];
	activeFilter?: string;
	onFilterChange?: (value: string) => void;
	onSortChange?: (value: string) => void;
	onSearch?: (value: string) => void;
}

export function ObjectFilter({
	filters,
	sortOptions,
	activeFilter = "all",
	onFilterChange,
	onSortChange,
	onSearch,
}: ObjectFilterProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	useEffect(() => {
		if (onSearch) {
			onSearch(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm, onSearch]);

	return (
		<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
			{filters && (
				<div className="flex flex-wrap gap-2">
					{filters.map((filter) => (
						<Button
							key={filter.value}
							variant={activeFilter === filter.value ? "default" : "outline"}
							size="sm"
							onClick={() => onFilterChange?.(filter.value)}
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
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<Select
					defaultValue={sortOptions[0].value}
					onValueChange={onSortChange}
				>
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
			</div>
		</div>
	);
}
