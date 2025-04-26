import { cn } from "@/shared/lib/utils";
import type React from "react";

interface ObjectGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ObjectGrid({ className, ...props }: ObjectGridProps) {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
				className,
			)}
			{...props}
		/>
	);
}
