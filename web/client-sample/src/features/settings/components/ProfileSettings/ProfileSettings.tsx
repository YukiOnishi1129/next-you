"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const profileFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	bio: z.string().max(160).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileSettings() {
	const [isLoading, setIsLoading] = useState(false);

	// This would normally come from your database
	const defaultValues: Partial<ProfileFormValues> = {
		name: "John Doe",
		email: "john@example.com",
		bio: "I'm a software developer interested in personal growth and self-improvement.",
	};

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: "onChange",
	});

	function onSubmit(data: ProfileFormValues) {
		setIsLoading(true);

		// This would normally be an API call
		setTimeout(() => {
			setIsLoading(false);
			toast.success("SUCCESS", {
				description: "Profile updated",
			});
		}, 1000);
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<Avatar className="h-20 w-20">
					<AvatarImage src="/placeholder.svg" alt="Profile" />
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
				<div>
					<Button variant="outline" size="sm">
						Change Avatar
					</Button>
					<p className="mt-2 text-xs text-muted-foreground">
						JPG, PNG or GIF. 1MB max.
					</p>
				</div>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Your name" {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email@example.com" {...field} />
								</FormControl>
								<FormDescription>
									This email will be used for notifications.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="bio"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us a little bit about yourself"
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Brief description for your profile. Max 160 characters.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Saving..." : "Save changes"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
