import { ActionPlanCard } from "@/features/actionPlans/components/ActionPlanCard"
import { AnalysisCard } from "@/features/analysis/components/AnalysisCard"
import { MindMapVisualization } from "@/features/analysis/components/MindMapVisualization"
import { CategoryCard } from "@/features/categories/components/CategoryCard"
import { DashboardShell } from "@/features/dashboard/components/DashboardShell"
import { ObjectGrid } from "@/shared/components/common/ObjectGrid"
import { PageHeader } from "@/shared/components/layout/headeer/PageHeader"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Sample data
  const recentAnalyses = [
    {
      id: "1",
      date: "April 18, 2024",
      summary: "Conversations focused on programming learning and health management.",
      categories: ["Programming", "Health", "Productivity"],
    },
    {
      id: "2",
      date: "April 15, 2024",
      summary:
        "Increased questions about health management and exercise habits. Interest in improving morning routines.",
      categories: ["Health", "Morning Routine", "Habit Formation"],
    },
  ]

  const recentActionPlans = [
    {
      id: "1",
      title: "Complete Next.js Tutorial",
      description: "Work through the official documentation tutorial to understand the basic usage",
      startDate: "2024-04-22",
      dueDate: "2024-04-25",
      category: "Programming",
      completed: false,
      priority: "Medium",
    },
    {
      id: "2",
      title: "Establish Morning Walking Routine",
      description: "Develop a habit of walking for 20 minutes every morning and continue for a week",
      startDate: "2024-04-15",
      dueDate: "2024-04-20",
      category: "Health",
      completed: true,
      priority: "High",
    },
    {
      id: "3",
      title: "Try Pomodoro Technique",
      description: "Implement 25-minute work, 5-minute break cycles four times a day to improve focus",
      startDate: "2024-04-23",
      dueDate: "2024-04-22",
      category: "Productivity",
      completed: false,
      priority: "Low",
    },
  ]

  const categories = [
    { id: "1", name: "Programming", actionPlanCount: 8, completedCount: 2 },
    { id: "2", name: "Health", actionPlanCount: 5, completedCount: 3 },
    { id: "3", name: "Productivity", actionPlanCount: 6, completedCount: 1 },
  ]

  // Dashboard statistics
  const stats = [
    { title: "Total Analyses", value: "12" },
    { title: "Registered Action Plans", value: "24" },
    { title: "Completed Actions", value: "7" },
    { title: "Categories", value: "5" },
  ]

  return (
    <DashboardShell>
      <PageHeader heading="Dashboard" description="View analysis results and action plans from your ChatGPT history" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Analyses</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/analyses">View All</Link>
            </Button>
          </div>
          <ObjectGrid>
            <div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
              <Button variant="outline" asChild className="h-auto flex flex-col p-8 gap-4">
                <Link href="/dashboard/analyses/new">
                  <Plus className="h-8 w-8" />
                  <span>New Analysis</span>
                </Link>
              </Button>
            </div>
            {recentAnalyses.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} />
            ))}
          </ObjectGrid>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Action Plans</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/action-plans">View All</Link>
            </Button>
          </div>
          <ObjectGrid>
            {recentActionPlans.map((plan) => (
              <ActionPlanCard key={plan.id} actionPlan={plan} />
            ))}
            <div className="col-span-full md:col-span-1 flex items-center justify-center border border-dashed rounded-lg p-8">
              <Button variant="outline" asChild className="h-auto flex flex-col p-8 gap-4">
                <Link href="/dashboard/action-plans/new">
                  <Plus className="h-8 w-8" />
                  <span>New Plan</span>
                </Link>
              </Button>
            </div>
          </ObjectGrid>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/categories">View All</Link>
            </Button>
          </div>
          <ObjectGrid>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </ObjectGrid>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Mind Map</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <MindMapVisualization />
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardShell>
  )
}
