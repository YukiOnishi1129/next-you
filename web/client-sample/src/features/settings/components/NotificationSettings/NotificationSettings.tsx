"use client";

import { Button } from "@/shared/components/ui/button";
import { Switch } from "@/shared/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";

export function NotificationSettings() {
	const [isLoading, setIsLoading] = useState(false);
	const [notifications, setNotifications] = useState({
		email: {
			actionPlans: true,
			analyses: true,
			reminders: true,
			newsletter: false,
		},
		push: {
			actionPlans: true,
			analyses: false,
			reminders: true,
		},
	});

	function handleToggle<K extends keyof typeof notifications>(
		category: K,
		type: keyof (typeof notifications)[K],
	) {
		setNotifications((prev) => ({
			...prev,
			[category]: {
				...prev[category],
				[type]: !prev[category][type],
			},
		}));
	}

	function handleSave() {
		setIsLoading(true);

		// This would normally be an API call
		setTimeout(() => {
			setIsLoading(false);
			toast.success("SUCCESS", {
				description: "Notification settings updated",
			});
		}, 1000);
	}

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Email Notifications</h3>
				<p className="text-sm text-muted-foreground">
					Configure which emails you want to receive.
				</p>

				<div className="mt-4 space-y-4">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label
								htmlFor="email-actionPlans"
								className="text-sm font-medium"
							>
								Action Plan Updates
							</label>
							<p className="text-xs text-muted-foreground">
								Receive emails when your action plans are due or updated.
							</p>
						</div>
						<Switch
							id="email-actionPlans"
							checked={notifications.email.actionPlans}
							onCheckedChange={() => handleToggle("email", "actionPlans")}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="email-analyses" className="text-sm font-medium">
								Analysis Results
							</label>
							<p className="text-xs text-muted-foreground">
								Receive emails when new analysis results are available.
							</p>
						</div>
						<Switch
							id="email-analyses"
							checked={notifications.email.analyses}
							onCheckedChange={() => handleToggle("email", "analyses")}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="email-reminders" className="text-sm font-medium">
								Reminders
							</label>
							<p className="text-xs text-muted-foreground">
								Receive reminder emails for upcoming tasks and goals.
							</p>
						</div>
						<Switch
							id="email-reminders"
							checked={notifications.email.reminders}
							onCheckedChange={() => handleToggle("email", "reminders")}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="email-newsletter" className="text-sm font-medium">
								Newsletter
							</label>
							<p className="text-xs text-muted-foreground">
								Receive our monthly newsletter with tips and updates.
							</p>
						</div>
						<Switch
							id="email-newsletter"
							checked={notifications.email.newsletter}
							onCheckedChange={() => handleToggle("email", "newsletter")}
						/>
					</div>
				</div>
			</div>

			<div>
				<h3 className="text-lg font-medium">Push Notifications</h3>
				<p className="text-sm text-muted-foreground">
					Configure which push notifications you want to receive.
				</p>

				<div className="mt-4 space-y-4">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="push-actionPlans" className="text-sm font-medium">
								Action Plan Updates
							</label>
							<p className="text-xs text-muted-foreground">
								Receive push notifications for action plan updates.
							</p>
						</div>
						<Switch
							id="push-actionPlans"
							checked={notifications.push.actionPlans}
							onCheckedChange={() => handleToggle("push", "actionPlans")}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="push-analyses" className="text-sm font-medium">
								Analysis Results
							</label>
							<p className="text-xs text-muted-foreground">
								Receive push notifications for new analysis results.
							</p>
						</div>
						<Switch
							id="push-analyses"
							checked={notifications.push.analyses}
							onCheckedChange={() => handleToggle("push", "analyses")}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<label htmlFor="push-reminders" className="text-sm font-medium">
								Reminders
							</label>
							<p className="text-xs text-muted-foreground">
								Receive push notifications for reminders.
							</p>
						</div>
						<Switch
							id="push-reminders"
							checked={notifications.push.reminders}
							onCheckedChange={() => handleToggle("push", "reminders")}
						/>
					</div>
				</div>
			</div>

			<Button onClick={handleSave} disabled={isLoading}>
				{isLoading ? "Saving..." : "Save preferences"}
			</Button>
		</div>
	);
}
