import { ActionPlanCalendar } from "@/features/actionPlans/components/ActionPlanCalendar"
import { ActionPlanCard } from "@/features/actionPlans/components/ActionPlanCard"
import { ActionPlanProgress } from "@/features/actionPlans/components/ActionPlanProgress"
import { ObjectFilter } from "@/shared/components/common/ObjectFilter"
import { ObjectGrid } from "@/shared/components/common/ObjectGrid"
import { ObjectViewToggle } from "@/shared/components/common/ObjectViewToggle"
import { PageHeader } from "@/shared/components/layout/header/PageHeader"
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell"
import { Button } from "@/shared/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function ActionPlansPage() {
  // Sample data with start dates added
  const actionPlans = [
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
  ]

  return (
    <DashboardShell>
      <PageHeader
        heading="Action Plans"
        description="Manage and track progress of suggested action plans"
        action={
          <Button asChild className="bg-rose-500 hover:bg-rose-600">
            <Link href="/dashboard/action-plans/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Plan
            </Link>
          </Button>
        }
      />

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="list" className="data-[state=active]:bg-gray-800">
            List View
          </TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-gray-800">
            Calendar
          </TabsTrigger>
          <TabsTrigger value="progress" className="data-[state=active]:bg-gray-800">
            Progress
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <div className="flex items-center justify-between mb-4">
            <ObjectFilter
              filters={[
                { name: "All", value: "all" },
                { name: "Pending", value: "incomplete" },
                { name: "Completed", value: "completed" },
                { name: "Overdue", value: "overdue" },
              ]}
              sortOptions={
                [
                { name: "Due Date (Ascending)", value: "due-date-asc" },
                { name: "Newest First", value: "newest" },
                { name: "By Category", value: "category" },
                { name: "By Priority", value: "priority"  },
                { name: "By Category", value: "category" },
                { name: "By Priority", value: "priority" },
              ]
              }
            />
            <ObjectViewToggle />
          </div>

          <ObjectGrid>
            <div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8 border-gray-700">
              <Button variant="outline" asChild className="h-auto flex flex-col p-8 gap-4 border-gray-700">
                <Link href="/dashboard/action-plans/new">
                  <Plus className="h-8 w-8" />
                  <span>Create New Plan</span>
                </Link>
              </Button>
            </div>
            {actionPlans.map((plan) => (
              <ActionPlanCard key={plan.id} actionPlan={plan} />
            ))}
          </ObjectGrid>
        </TabsContent>

        <TabsContent value="calendar">
          <ActionPlanCalendar actionPlans={actionPlans} />
        </TabsContent>

        <TabsContent value="progress">
          <ActionPlanProgress actionPlans={actionPlans} />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
