import { cn } from "@/shared/lib/utils";
import { LightbulbIcon } from "lucide-react";
import type React from "react";

interface HelpTipProps {
	children: React.ReactNode;
	className?: string;
}

export function HelpTip({ children, className }: HelpTipProps) {
	return (
		<div
			className={cn(
				"bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-4 my-4",
				className,
			)}
		>
			<div className="flex">
				<div className="flex-shrink-0">
					<LightbulbIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="text-sm text-blue-800 dark:text-blue-200">{children}</p>
				</div>
			</div>
		</div>
	);
}
