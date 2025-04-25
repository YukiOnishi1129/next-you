export interface ApiResponse<T> {
	data: T;
	meta?: {
		pagination?: {
			page: number;
			pageSize: number;
			totalPages: number;
			totalItems: number;
		};
	};
}

export interface ApiError {
	statusCode: number;
	message: string;
	errors?: Record<string, string[]>;
}

export interface PaginationParams {
	page?: number;
	pageSize?: number;
}

export interface SortParams {
	sortBy?: string;
	sortDirection?: "asc" | "desc";
}

export interface FilterParams {
	[key: string]: string | string[] | number | boolean | undefined;
}

export type ApiRequestParams = PaginationParams & SortParams & FilterParams;
