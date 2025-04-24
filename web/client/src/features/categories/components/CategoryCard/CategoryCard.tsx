import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/card"
import { Progress } from "@/shared/components/ui/progress"
import { ArrowRight, FolderKanban } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    actionPlanCount: number
    completedCount: number
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  const completionPercentage =
    category.actionPlanCount > 0 ? Math.round((category.completedCount / category.actionPlanCount) * 100) : 0

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center gap-2">
        <FolderKanban className="h-5 w-5 text-rose-500" />
        <h3 className="font-medium">{category.name}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>Action Plans: {category.actionPlanCount}</span>
            <span className="text-muted-foreground">
              {category.completedCount}/{category.actionPlanCount} Completed
            </span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground text-right">{completionPercentage}% Complete</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" asChild className="ml-auto">
          <Link href={`/dashboard/categories/${category.id}`}>
            View details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
