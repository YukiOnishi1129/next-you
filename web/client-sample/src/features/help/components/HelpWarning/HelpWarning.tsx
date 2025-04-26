import { cn } from "@/shared/lib/utils";
import { AlertTriangle } from "lucide-react";
import type React from "react";

interface HelpWarningProps {
	children: React.ReactNode;
	className?: string;
}

export function HelpWarning({ children, className }: HelpWarningProps) {
	return (
		<div
			className={cn(
				"bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md p-4 my-4",
				className,
			)}
		>
			<div className="flex">
				<div className="flex-shrink-0">
					<AlertTriangle
						className="h-5 w-5 text-amber-500"
						aria-hidden="true"
					/>
				</div>
				<div className="ml-3">
					<p className="text-sm text-amber-800 dark:text-amber-200">
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}
