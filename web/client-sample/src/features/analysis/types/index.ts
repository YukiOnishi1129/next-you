export interface Analysis {
	id: string;
	title: string;
	date: string;
	summary: string;
	categories: string[];
	insights: AnalysisInsight[];
	recommendations: AnalysisRecommendation[];
	patterns: AnalysisPattern[];
	interestAreas: AnalysisInterestArea[];
	sourceData: AnalysisSourceData;
	userId: string;
	createdAt: string;
	updatedAt: string;
}

export interface AnalysisInsight {
	id: string;
	content: string;
	category: string;
	analysisId: string;
}

export interface AnalysisRecommendation {
	id: string;
	title: string;
	description: string;
	category: string;
	analysisId: string;
	relatedActionPlanIds?: string[];
}

export interface AnalysisPattern {
	id: string;
	title: string;
	description: string;
	strength: number; // 0-100
	analysisId: string;
}

export interface AnalysisInterestArea {
	id: string;
	name: string;
	percentage: number; // 0-100
	description: string;
	tags: string[];
	analysisId: string;
}

export interface AnalysisSourceData {
	id: string;
	type: "chat_history" | "uploaded_file" | "manual_input" | "integration";
	source: string;
	dateRange?: {
		start: string;
		end: string;
	};
	metadata?: Record<string, unknown>;
	analysisId: string;
}

export interface AnalysisFilter {
	dateRange?: {
		start: string;
		end: string;
	};
	categories?: string[];
	search?: string;
}

export interface AnalysisSort {
	field: "date" | "title" | "createdAt";
	direction: "asc" | "desc";
}
