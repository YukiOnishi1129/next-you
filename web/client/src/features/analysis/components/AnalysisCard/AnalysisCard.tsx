import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/shared/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

interface AnalysisCardProps {
	analysis: {
		id: string;
		date: string;
		summary: string;
		categories: string[];
	};
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
	return (
		<Card className="flex flex-col">
			<CardHeader className="flex flex-row items-center gap-2">
				<FileText className="h-5 w-5 text-rose-500" />
				<h3 className="font-medium">Analysis: {analysis.date}</h3>
			</CardHeader>
			<CardContent className="flex-1">
				<p className="text-sm text-muted-foreground mb-4 line-clamp-3">
					{analysis.summary}
				</p>
				<div className="flex flex-wrap gap-2">
					{analysis.categories.map((category) => (
						<Badge key={category} variant="outline">
							{category}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="ghost" size="sm" asChild className="ml-auto">
					<Link href={`/dashboard/analyses/${analysis.id}`}>
						View details
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
