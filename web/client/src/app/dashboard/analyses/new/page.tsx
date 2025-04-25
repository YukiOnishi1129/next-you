import { AnalysisFileUploader } from "@/features/analysis/components/AnalysisFileUploader";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { ArrowLeft, BarChart } from "lucide-react";
import Link from "next/link";

export default function NewAnalysisPage() {
	return (
		<DashboardShell>
			<div className="flex items-center mb-2">
				<Button variant="ghost" size="sm" asChild className="gap-1">
					<Link href="/dashboard/analyses">
						<ArrowLeft className="h-4 w-4" />
						Back to Analyses
					</Link>
				</Button>
			</div>

			<PageHeader
				heading="New Analysis"
				description="Upload your ChatGPT history to start analysis"
			/>

			<Card>
				<CardHeader>
					<CardTitle>Upload ChatGPT History</CardTitle>
					<CardDescription>
						Upload a JSON file to start analysis
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<AnalysisFileUploader />

					<div className="rounded-md bg-muted p-4">
						<div className="flex items-center gap-2 text-sm">
							<BarChart className="h-4 w-4 text-primary" />
							<p className="font-medium">Analysis Process</p>
						</div>
						<ol className="mt-2 space-y-2 text-sm text-muted-foreground">
							<li>1. Upload ChatGPT history JSON file</li>
							<li>2. LLM analysis of conversation content</li>
							<li>
								3. Extraction of key areas of interest and thought patterns
							</li>
							<li>4. Action plan suggestions by category</li>
							<li>5. Visualization of results and mind map generation</li>
						</ol>
					</div>
				</CardContent>
			</Card>
		</DashboardShell>
	);
}
