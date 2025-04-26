import { cn } from "@/shared/lib/utils";
import type React from "react";

interface ObjectRelationshipProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description?: string;
}

export function ObjectRelationship({
	title,
	description,
	className,
	children,
	...props
}: ObjectRelationshipProps) {
	return (
		<div className={cn("space-y-4", className)} {...props}>
			<div>
				<h2 className="text-xl font-semibold">{title}</h2>
				{description && (
					<p className="text-sm text-muted-foreground">{description}</p>
				)}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{children}
			</div>
		</div>
	);
}
