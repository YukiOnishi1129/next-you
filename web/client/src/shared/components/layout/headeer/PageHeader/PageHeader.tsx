import { cn } from "@/shared/lib/utils"
import type React from "react"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  description?: string
  action?: React.ReactNode
}

export function PageHeader({ heading, description, action, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("mb-6", className)} {...props}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{heading}</h1>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
