import { AIActionPlanGenerator } from "@/features/actionPlans/components/AIActionPlanGenerator";
import { ActionPlanForm } from "@/features/actionPlans/components/ActionPlanForm";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewActionPlanPage() {
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/action-plans">
						<ArrowLeft className="h-4 w-4" />
						Back to Action Plans
					</Link>
				</Button>
			</div>

			<PageHeader
				heading="Create New Action Plan"
				description="Create a new action plan to get closer to achieving your goals"
			/>

			<Card>
				<CardHeader>
					<CardTitle>Action Plan Information</CardTitle>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="manual" className="space-y-4">
						<TabsList>
							<TabsTrigger value="manual">Manual Creation</TabsTrigger>
							<TabsTrigger value="ai">AI Suggestion</TabsTrigger>
						</TabsList>
						<TabsContent value="manual" className="space-y-4">
							<ActionPlanForm />
						</TabsContent>
						<TabsContent value="ai" className="space-y-4">
							<AIActionPlanGenerator />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</DashboardShell>
	);
}
