"use client";

import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "sonner";

export function AppearanceSettings() {
	const [isLoading, setIsLoading] = useState(false);
	const { theme, setTheme } = useTheme();

	function handleSave() {
		setIsLoading(true);

		// This would normally be an API call
		setTimeout(() => {
			setIsLoading(false);
			toast.success("SUCCESS", {
				description: "Appearance settings updated",
			});
		}, 1000);
	}

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Theme</h3>
				<p className="text-sm text-muted-foreground">
					Select your preferred theme for the application.
				</p>

				<RadioGroup
					defaultValue={theme}
					className="mt-4 grid grid-cols-3 gap-4"
					onValueChange={setTheme}
				>
					<div>
						<RadioGroupItem
							value="light"
							id="theme-light"
							className="sr-only"
						/>
						<Label
							htmlFor="theme-light"
							className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<div className="mb-2 rounded-md bg-white p-2">
								<div className="space-y-2">
									<div className="h-2 w-[80px] rounded-lg bg-[#eaeaea]" />
									<div className="h-2 w-[100px] rounded-lg bg-[#eaeaea]" />
								</div>
							</div>
							<span className="block w-full text-center font-normal">
								Light
							</span>
						</Label>
					</div>

					<div>
						<RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
						<Label
							htmlFor="theme-dark"
							className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<div className="mb-2 rounded-md bg-slate-950 p-2">
								<div className="space-y-2">
									<div className="h-2 w-[80px] rounded-lg bg-slate-800" />
									<div className="h-2 w-[100px] rounded-lg bg-slate-800" />
								</div>
							</div>
							<span className="block w-full text-center font-normal">Dark</span>
						</Label>
					</div>

					<div>
						<RadioGroupItem
							value="system"
							id="theme-system"
							className="sr-only"
						/>
						<Label
							htmlFor="theme-system"
							className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<div className="mb-2 rounded-md bg-gradient-to-r from-white to-slate-950 p-2">
								<div className="space-y-2">
									<div className="h-2 w-[80px] rounded-lg bg-gradient-to-r from-[#eaeaea] to-slate-800" />
									<div className="h-2 w-[100px] rounded-lg bg-gradient-to-r from-[#eaeaea] to-slate-800" />
								</div>
							</div>
							<span className="block w-full text-center font-normal">
								System
							</span>
						</Label>
					</div>
				</RadioGroup>
			</div>

			<Button onClick={handleSave} disabled={isLoading}>
				{isLoading ? "Saving..." : "Save preferences"}
			</Button>
		</div>
	);
}
