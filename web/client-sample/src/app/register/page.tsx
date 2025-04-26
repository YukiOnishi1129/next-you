"use client";

import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Brain } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define the registration form schema with zod
const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(2, { message: "First name must be at least 2 characters" }),
		lastName: z
			.string()
			.min(2, { message: "Last name must be at least 2 characters" }),
		email: z.string().email({ message: "Please enter a valid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" }),
		confirmPassword: z.string(),
		terms: z.boolean().refine((val) => val === true, {
			message: "You must agree to the terms and conditions",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

// Define the form values type from the schema
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
	const [isLoading, setIsLoading] = useState(false);

	// Initialize the form with react-hook-form and zod resolver
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			terms: false,
		},
	});

	// Form submission handler
	const onSubmit = async (data: RegisterFormValues) => {
		setIsLoading(true);
		try {
			console.log("Registration form submitted:", data);
			// Here you would typically send the data to your registration API
			// await register(data)

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Redirect to login or dashboard on success
			// router.push("/login")
		} catch (error) {
			console.error("Registration failed:", error);
			// Handle registration error
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<PlainPageShell>
			<div className="min-h-screen flex flex-col">
				<div className="flex-1 flex items-center justify-center p-6">
					<Card className="w-full max-w-md">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
							<CardDescription>
								Enter your information to create an account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<div className="grid grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="firstName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>First Name</FormLabel>
													<FormControl>
														<Input placeholder="John" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="lastName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Last Name</FormLabel>
													<FormControl>
														<Input placeholder="Doe" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input placeholder="your@email.com" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input type="password" {...field} />
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
													<Input type="password" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="terms"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel>
														I agree to the{" "}
														<Link
															href="/terms"
															className="text-primary hover:underline"
														>
															Terms of Service
														</Link>
													</FormLabel>
													<FormMessage />
												</div>
											</FormItem>
										)}
									/>
									<Button type="submit" className="w-full" disabled={isLoading}>
										{isLoading ? "Creating account..." : "Sign Up"}
									</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter className="flex justify-center">
							<div className="text-center text-sm">
								Already have an account?
								<Link
									href="/login"
									className="text-primary hover:underline ml-1"
								>
									Login
								</Link>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</PlainPageShell>
	);
}
