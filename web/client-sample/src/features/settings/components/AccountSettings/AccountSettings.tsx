"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import { Switch } from "@/shared/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const passwordFormSchema = z
	.object({
		currentPassword: z.string().min(8, {
			message: "Password must be at least 8 characters.",
		}),
		newPassword: z.string().min(8, {
			message: "Password must be at least 8 characters.",
		}),
		confirmPassword: z.string().min(8, {
			message: "Password must be at least 8 characters.",
		}),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export function AccountSettings() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordFormSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		mode: "onChange",
	});

	function onSubmit(data: PasswordFormValues) {
		setIsLoading(true);

		// This would normally be an API call
		setTimeout(() => {
			setIsLoading(false);
			toast.success("SUCCESS", {
				description: "Password updated",
			});
			form.reset();
		}, 1000);
	}

	function handleDeleteAccount() {
		toast.error("FAIL", {
			description: "Account deletion requested",
		});
	}

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Password</h3>
				<p className="text-sm text-muted-foreground">
					Update your password to keep your account secure.
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="currentPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Current Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="••••••••" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="••••••••" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="••••••••" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Updating..." : "Update Password"}
					</Button>
				</form>
			</Form>

			<Separator />

			<div>
				<h3 className="text-lg font-medium">Two-Factor Authentication</h3>
				<p className="text-sm text-muted-foreground">
					Add an extra layer of security to your account.
				</p>

				<div className="mt-4 flex items-center space-x-4">
					<Switch id="2fa" />
					<div className="space-y-0.5">
						<label htmlFor="2fa" className="text-sm font-medium">
							Enable Two-Factor Authentication
						</label>
						<p className="text-xs text-muted-foreground">
							Receive a code via email when signing in.
						</p>
					</div>
				</div>
			</div>

			<Separator />

			<Card className="border-destructive">
				<CardHeader>
					<CardTitle className="text-destructive">Delete Account</CardTitle>
					<CardDescription>
						Permanently delete your account and all of your data.
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button variant="destructive" onClick={handleDeleteAccount}>
						Delete Account
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
