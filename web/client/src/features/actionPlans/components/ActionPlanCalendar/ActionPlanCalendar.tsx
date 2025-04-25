"use client"

import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { enUS } from "date-fns/locale"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ActionPlan {
  id: string
  title: string
  description: string
  startDate: string
  dueDate: string
  category: string
  completed: boolean
  priority: string
  color?: string // Optional custom color
}

interface ActionPlanCalendarProps {
  actionPlans: ActionPlan[]
}

// Sample data with start and due dates
const sampleActionPlans: ActionPlan[] = [
  {
    id: "1",
    title: "Complete Next.js Tutorial",
    description: "Work through the official documentation tutorial to understand the basic usage",
    startDate: "2025-04-22",
    dueDate: "2025-04-25",
    category: "Programming",
    completed: false,
    priority: "Medium",
    color: "#3b82f6", // blue
  },
  {
    id: "2",
    title: "Morning Walking Routine",
    description: "Develop a habit of walking for 20 minutes every morning and continue for a week",
    startDate: "2025-04-15",
    dueDate: "2025-04-22",
    category: "Health",
    completed: true,
    priority: "High",
    color: "#22c55e", // green
  },
  {
    id: "3",
    title: "Pomodoro Technique",
    description: "Implement 25-minute work, 5-minute break cycles four times a day to improve focus",
    startDate: "2025-04-23",
    dueDate: "2025-04-24",
    category: "Productivity",
    completed: false,
    priority: "Low",
    color: "#a855f7", // purple
  },
  {
    id: "4",
    title: "TypeScript Learning",
    description: "Read the official documentation and understand the basic concepts of the type system",
    startDate: "2025-04-25",
    dueDate: "2025-04-30",
    category: "Programming",
    completed: false,
    priority: "Medium",
    color: "#3b82f6", // blue
  },
  {
    id: "5",
    title: "Disney Trip Planning",
    description: "Plan the upcoming Disney trip with family",
    startDate: "2025-04-16",
    dueDate: "2025-04-18",
    category: "Personal",
    completed: false,
    priority: "High",
    color: "#14b8a6", // teal
  },
  {
    id: "6",
    title: "Live Streaming",
    description: "Prepare and conduct live streaming session",
    startDate: "2025-04-20",
    dueDate: "2025-04-20",
    category: "Career",
    completed: true,
    priority: "Medium",
    color: "#ec4899", // pink
  },
  {
    id: "7",
    title: "Haircut Appointment",
    description: "Regular grooming session",
    startDate: "2025-04-24",
    dueDate: "2025-04-24",
    category: "Personal",
    completed: false,
    priority: "Low",
    color: "#14b8a6", // teal
  },
  {
    id: "8",
    title: "End of Month Planning",
    description: "Review month progress and plan for next month",
    startDate: "2025-04-29",
    dueDate: "2025-05-02",
    category: "Productivity",
    completed: false,
    priority: "High",
    color: "#a855f7", // purple
  },
]

export function ActionPlanCalendar({ actionPlans = sampleActionPlans }: ActionPlanCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)) // April 2025
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 3, 23)) // April 24, 2025
  const [selectedDayEvents, setSelectedDayEvents] = useState<ActionPlan[]>([])

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Update selected day events when date changes
  useEffect(() => {
    if (selectedDate) {
      const dayEvents = actionPlans.filter((plan) => {
        const startDate = parseISO(plan.startDate)
        const dueDate = parseISO(plan.dueDate)

        // Check if the selected date falls within the plan's date range
        return (
          (selectedDate >= startDate && selectedDate <= dueDate) ||
          isSameDay(selectedDate, startDate) ||
          isSameDay(selectedDate, dueDate)
        )
      })
      setSelectedDayEvents(dayEvents)
    }
  }, [selectedDate, actionPlans])

  // Generate calendar days for the current month
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Function to determine if an event should be displayed on a specific day
  const shouldDisplayEvent = (event: ActionPlan, day: Date) => {
    const startDate = parseISO(event.startDate)
    const dueDate = parseISO(event.dueDate)
    return (day >= startDate && day <= dueDate) || isSameDay(day, startDate) || isSameDay(day, dueDate)
  }

  // Function to determine if an event starts on a specific day
  const isEventStart = (event: ActionPlan, day: Date) => {
    return isSameDay(day, parseISO(event.startDate))
  }

  // Function to determine if an event ends on a specific day
  const isEventEnd = (event: ActionPlan, day: Date) => {
    return isSameDay(day, parseISO(event.dueDate))
  }

  // Create calendar rows with days
  const renderCalendarDays = () => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-800">
        {/* Day headers */}
        {dayNames.map((day) => (
          <div key={day} className="text-center py-2 text-sm font-medium text-gray-300">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, i) => {
          // Find events for this day
          const dayEvents = actionPlans.filter((plan) => shouldDisplayEvent(plan, day))

          const isSelected = isSameDay(day, selectedDate)
          const isToday = isSameDay(day, new Date())

          return (
            <div
              key={`${day.toString()}-${i}`}
              className={`min-h-[100px] border-gray-700 border p-1 ${
                !isSameMonth(day, currentMonth) ? "bg-gray-900 text-gray-600" : "bg-gray-950"
              } ${isSelected ? "border-rose-500 border-2" : ""} ${isToday ? "font-bold" : ""}`}
              onClick={() => setSelectedDate(day)}
			  onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
				  // Enter or Space で実行
				  setSelectedDate(day)
				}
			  }}
            >
              <div className={`text-right mb-1 ${isToday ? "text-rose-500" : "text-gray-300"}`}>{format(day, "d")}</div>
              <div className="space-y-1">
                {dayEvents.slice(0, 3).map((event, idx) => {
                  const isStart = isEventStart(event, day)
                  const isEnd = isEventEnd(event, day)
                  const isMiddle = !isStart && !isEnd

                  return (
                    <div
                      key={`${event.id}-${idx}`}
                      className={`text-xs truncate px-1 py-0.5 text-white ${
                        isStart ? "rounded-l-md" : ""
                      } ${isEnd ? "rounded-r-md" : ""} ${isMiddle ? "rounded-none" : ""}`}
                      style={{ backgroundColor: event.color || "#6b7280" }}
                      title={event.title}
                    >
                      {isStart && event.title}
                    </div>
                  )
                })}
                {dayEvents.length > 3 && <div className="text-xs text-gray-400">+{dayEvents.length - 3} more</div>}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Card className="bg-gray-950 border-gray-800 text-white">
        <CardHeader className="pb-2 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <CardTitle>Calendar</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevMonth}
                className="border-gray-700 bg-gray-900 hover:bg-gray-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="font-medium">{format(currentMonth, "MMMM yyyy", { locale: enUS })}</div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextMonth}
                className="border-gray-700 bg-gray-900 hover:bg-gray-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription className="text-gray-400">View your action plans by date range</CardDescription>
        </CardHeader>
        <CardContent className="p-0">{renderCalendarDays()}</CardContent>
      </Card>

      <Card className="bg-gray-950 border-gray-800 text-white">
        <CardHeader className="border-b border-gray-800">
          <CardTitle>Action Plans for {format(selectedDate, "MMMM d, yyyy")}</CardTitle>
          <CardDescription className="text-gray-400">
            {selectedDayEvents.length} action plan{selectedDayEvents.length !== 1 ? "s" : ""} scheduled
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {selectedDayEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDayEvents.map((plan) => (
                <div key={plan.id} className="border border-gray-800 rounded-lg p-4 bg-gray-900">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{plan.title}</h3>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      {plan.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-400">
                      {format(parseISO(plan.startDate), "MMM d")} - {format(parseISO(plan.dueDate), "MMM d, yyyy")}
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        plan.completed
                          ? "border-green-800 bg-green-950 text-green-400"
                          : "border-gray-700 text-gray-300"
                      }
                    >
                      {plan.completed ? "Completed" : "Pending"}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="mt-2 p-0 text-rose-400 hover:text-rose-300">
                    <Link href={`/dashboard/action-plans/${plan.id}`}>
                      View details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No action plans scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
