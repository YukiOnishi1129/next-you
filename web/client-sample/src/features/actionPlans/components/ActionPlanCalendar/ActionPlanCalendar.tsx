"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import {
	addMonths,
	differenceInDays,
	eachDayOfInterval,
	endOfMonth,
	format,
	isSameDay,
	isSameMonth,
	isWithinInterval,
	parseISO,
	startOfMonth,
	subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Task = {
	id: string;
	title: string;
	completed: boolean;
};

type ActionPlan = {
	id: string;
	title: string;
	description: string;
	startDate: string;
	dueDate: string;
	category: string;
	categoryId: string;
	completed: boolean;
	priority: "High" | "Medium" | "Low";
	color: string;
	tasks: Task[];
	progress: number;
	userId: string;
	createdAt: string;
	updatedAt: string;
};

type ActionPlanCalendarProps = {
	actionPlans: ActionPlan[];
};

export function ActionPlanCalendar({ actionPlans }: ActionPlanCalendarProps) {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [activeView, setActiveView] = useState<"month" | "multi-month">(
		"month",
	);

	// Generate months from April to August
	const startMonth = new Date(2023, 3, 1); // April 2023
	const months = Array.from({ length: 5 }, (_, i) => addMonths(startMonth, i));

	// Get days for the current month
	const firstDayOfMonth = startOfMonth(currentDate);
	const lastDayOfMonth = endOfMonth(currentDate);
	const daysInMonth = eachDayOfInterval({
		start: firstDayOfMonth,
		end: lastDayOfMonth,
	});

	// Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
	const startDay = firstDayOfMonth.getDay();

	// Function to check if a plan falls on a specific date
	const getPlanForDate = (date: Date, plan: ActionPlan) => {
		const planStartDate = parseISO(plan.startDate);
		const planDueDate = parseISO(plan.dueDate);

		return isWithinInterval(date, { start: planStartDate, end: planDueDate });
	};

	// Function to determine if a date is the start, middle, or end of a plan
	const getPlanPosition = (date: Date, plan: ActionPlan) => {
		const planStartDate = parseISO(plan.startDate);
		const planDueDate = parseISO(plan.dueDate);

		const isStart = isSameDay(date, planStartDate);
		const isEnd = isSameDay(date, planDueDate);

		if (isStart && isEnd) return "single";
		if (isStart) return "start";
		if (isEnd) return "end";
		return "middle";
	};

	// Get plans for a specific date
	const getPlansForDate = (date: Date) => {
		return actionPlans.filter((plan) => getPlanForDate(date, plan));
	};

	// Handle month navigation
	const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
	const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

	// Get plans for selected date
	const selectedDatePlans = selectedDate ? getPlansForDate(selectedDate) : [];

	return (
		<Card className="border-gray-700 bg-gray-800">
			<CardHeader className="pb-3">
				<CardTitle className="text-xl font-semibold">
					Action Plan Calendar
				</CardTitle>
				<Tabs
					value={activeView}
					onValueChange={(value) =>
						setActiveView(value as "month" | "multi-month")
					}
					className="mt-2"
				>
					<TabsList className="bg-gray-900">
						<TabsTrigger
							value="month"
							className="data-[state=active]:bg-gray-700"
						>
							Month View
						</TabsTrigger>
						<TabsTrigger
							value="multi-month"
							className="data-[state=active]:bg-gray-700"
						>
							April - August
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</CardHeader>
			<CardContent>
				<TabsContent value="month" className="mt-0">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-medium">
							{format(currentDate, "MMMM yyyy")}
						</h2>
						<div className="flex gap-1">
							<Button variant="outline" size="icon" onClick={prevMonth}>
								<ChevronLeft className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon" onClick={nextMonth}>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Calendar grid */}
					<div className="grid grid-cols-7 gap-1 mb-4">
						{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
							<div key={day} className="text-center text-sm font-medium py-2">
								{day}
							</div>
						))}

						{/* Empty cells for days before the first day of the month */}
						{Array.from({ length: startDay }).map((_, index) => {
							const emptyDate = new Date(firstDayOfMonth);
							emptyDate.setDate(emptyDate.getDate() - (startDay - index)); // 月の開始前の日付を生成
							return (
								<div
									key={`empty-start-${emptyDate.toISOString()}`}
									className="h-24 border border-gray-700 rounded-md bg-gray-900"
								/>
							);
						})}

						{/* Days of the month */}
						{daysInMonth.map((day) => {
							const plansForDay = getPlansForDate(day);
							const isSelected = selectedDate && isSameDay(day, selectedDate);

							return (
								<div
									key={day.toString()}
									className={`h-24 border border-gray-700 rounded-md overflow-hidden ${
										isSelected ? "ring-2 ring-rose-500" : ""
									} ${isSameMonth(day, currentDate) ? "bg-gray-800" : "bg-gray-900 opacity-50"}`}
									onClick={() => setSelectedDate(day)}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											setSelectedDate(day);
										}
									}}
								>
									<div className="p-1">
										<div className="text-right text-sm">{format(day, "d")}</div>
										<div className="mt-1 space-y-1 max-h-[70px] overflow-y-auto">
											{plansForDay.slice(0, 3).map((plan) => {
												const position = getPlanPosition(day, plan);

												return (
													<div
														key={plan.id}
														className={`text-xs truncate px-1 py-0.5 ${
															position === "single"
																? "rounded"
																: position === "start"
																	? "rounded-l"
																	: position === "end"
																		? "rounded-r"
																		: ""
														}`}
														style={{
															backgroundColor: `${plan.color}20`,
															color: plan.color,
															borderLeft:
																position === "start" || position === "single"
																	? `3px solid ${plan.color}`
																	: "none",
														}}
													>
														{position === "start" || position === "single"
															? plan.title
															: ""}
													</div>
												);
											})}
											{plansForDay.length > 3 && (
												<div className="text-xs text-gray-400 pl-1">
													+{plansForDay.length - 3} more
												</div>
											)}
										</div>
									</div>
								</div>
							);
						})}

						{/* Empty cells for days after the last day of the month */}
						{Array.from({ length: 42 - daysInMonth.length - startDay }).map(
							(_, index) => {
								const emptyDate = new Date(lastDayOfMonth);
								emptyDate.setDate(lastDayOfMonth.getDate() + index + 1); // 月末の次の日から順番に日付を生成
								return (
									<div
										key={`empty-end-${emptyDate.toISOString()}`}
										className="h-24 border border-gray-700 rounded-md bg-gray-900"
									/>
								);
							},
						)}
					</div>
				</TabsContent>

				<TabsContent value="multi-month" className="mt-0">
					<div className="space-y-8">
						{months.map((month) => {
							const firstDay = startOfMonth(month);
							const lastDay = endOfMonth(month);
							const days = eachDayOfInterval({ start: firstDay, end: lastDay });
							const startDayOfWeek = firstDay.getDay();

							return (
								<div key={month.toString()} className="mb-6">
									<h2 className="text-lg font-medium mb-3">
										{format(month, "MMMM yyyy")}
									</h2>

									<div className="grid grid-cols-7 gap-1">
										{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
											(day) => (
												<div
													key={`${month}-${day}`}
													className="text-center text-xs font-medium py-1"
												>
													{day}
												</div>
											),
										)}

										{/* Empty cells for days before the first day of the month */}
										{Array.from({ length: startDayOfWeek }).map((_, index) => {
											const emptyDate = new Date(month);
											emptyDate.setDate(-index); // 月の開始前の日付を生成
											return (
												<div
													key={`empty-${emptyDate.toISOString()}`}
													className="h-16 border border-gray-700 rounded-md bg-gray-900"
												/>
											);
										})}

										{/* Days of the month */}
										{days.map((day) => {
											const plansForDay = getPlansForDate(day);
											const isSelected =
												selectedDate && isSameDay(day, selectedDate);

											return (
												<div
													key={day.toString()}
													className={`h-16 border border-gray-700 rounded-md overflow-hidden ${
														isSelected ? "ring-2 ring-rose-500" : ""
													} bg-gray-800`}
													onClick={() => setSelectedDate(day)}
													onKeyDown={(e) => {
														if (e.key === "Enter" || e.key === " ") {
															// Enter or Space で実行
															setSelectedDate(day);
														}
													}}
												>
													<div className="p-1">
														<div className="text-right text-xs">
															{format(day, "d")}
														</div>
														<div className="mt-1 space-y-1 max-h-[40px] overflow-y-auto">
															{plansForDay.slice(0, 2).map((plan) => {
																const position = getPlanPosition(day, plan);

																return (
																	<div
																		key={plan.id}
																		className={`text-[10px] truncate px-1 ${
																			position === "single"
																				? "rounded"
																				: position === "start"
																					? "rounded-l"
																					: position === "end"
																						? "rounded-r"
																						: ""
																		}`}
																		style={{
																			backgroundColor: `${plan.color}20`,
																			color: plan.color,
																			borderLeft:
																				position === "start" ||
																				position === "single"
																					? `2px solid ${plan.color}`
																					: "none",
																		}}
																	>
																		{position === "start" ||
																		position === "single"
																			? plan.title.substring(0, 10) +
																				(plan.title.length > 10 ? "..." : "")
																			: ""}
																	</div>
																);
															})}
															{plansForDay.length > 2 && (
																<div className="text-[10px] text-gray-400">
																	+{plansForDay.length - 2}
																</div>
															)}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</TabsContent>

				{/* Selected date details */}
				{selectedDate && (
					<div className="mt-6 border-t border-gray-700 pt-4">
						<h3 className="font-medium mb-2">
							{format(selectedDate, "MMMM d, yyyy")} -{" "}
							{selectedDatePlans.length} plan
							{selectedDatePlans.length !== 1 ? "s" : ""}
						</h3>

						{selectedDatePlans.length > 0 ? (
							<div className="space-y-3">
								{selectedDatePlans.map((plan) => {
									const startDate = parseISO(plan.startDate);
									const dueDate = parseISO(plan.dueDate);
									const duration = differenceInDays(dueDate, startDate) + 1;

									return (
										<div
											key={plan.id}
											className="p-3 rounded-md"
											style={{ backgroundColor: `${plan.color}10` }}
										>
											<div className="flex justify-between items-start">
												<h4
													className="font-medium"
													style={{ color: plan.color }}
												>
													{plan.title}
												</h4>
												<span
													className={`text-xs px-2 py-0.5 rounded ${
														plan.priority === "High"
															? "bg-red-500/20 text-red-400"
															: plan.priority === "Medium"
																? "bg-amber-500/20 text-amber-400"
																: "bg-blue-500/20 text-blue-400"
													}`}
												>
													{plan.priority}
												</span>
											</div>
											<p className="text-sm text-gray-300 mt-1">
												{plan.description}
											</p>
											<div className="flex justify-between mt-2 text-xs text-gray-400">
												<span>
													{format(startDate, "MMM d")} -{" "}
													{format(dueDate, "MMM d, yyyy")}
												</span>
												<span>
													{duration} day{duration !== 1 ? "s" : ""}
												</span>
											</div>
											<div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
												<div
													className="rounded-full h-1.5"
													style={{
														width: `${plan.progress}%`,
														backgroundColor: plan.color,
													}}
												/>
											</div>
											<div className="flex justify-between items-center mt-2">
												<span
													className="text-xs"
													style={{
														color: plan.completed ? "#10b981" : "#9ca3af",
													}}
												>
													{plan.completed
														? "Completed"
														: `${plan.progress}% Complete`}
												</span>
												<span className="text-xs">{plan.category}</span>
											</div>
										</div>
									);
								})}
							</div>
						) : (
							<p className="text-gray-400 text-sm">
								No action plans for this date.
							</p>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
