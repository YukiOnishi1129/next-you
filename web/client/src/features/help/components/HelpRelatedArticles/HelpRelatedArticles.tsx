import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Article {
	title: string;
	href: string;
}

interface HelpRelatedArticlesProps {
	articles: Article[];
}

export function HelpRelatedArticles({ articles }: HelpRelatedArticlesProps) {
	return (
		<div className="mt-8 border-t pt-6">
			<h2 className="text-xl font-semibold mb-4">Related Articles</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{articles.map((article, i) => (
					<Link
						key={`${article.title}-${i}`}
						href={article.href}
						className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
					>
						<span className="text-sm font-medium">{article.title}</span>
						<ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
					</Link>
				))}
			</div>
		</div>
	);
}
