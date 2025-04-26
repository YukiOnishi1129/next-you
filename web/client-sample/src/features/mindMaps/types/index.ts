export interface MindMap {
	id: string;
	title: string;
	description?: string;
	nodes: MindMapNode[];
	edges: MindMapEdge[];
	createdAt: string;
	updatedAt: string;
	userId: string;
	analysisId?: string;
}

export interface MindMapNode {
	id: string;
	label: string;
	type: "root" | "main" | "sub" | "leaf";
	data?: Record<string, unknown>;
	position: {
		x: number;
		y: number;
	};
	style?: {
		backgroundColor?: string;
		borderColor?: string;
		textColor?: string;
		width?: number;
		height?: number;
		shape?: "circle" | "rectangle" | "diamond" | "hexagon";
	};
}

export interface MindMapEdge {
	id: string;
	source: string; // node id
	target: string; // node id
	label?: string;
	style?: {
		color?: string;
		width?: number;
		style?: "solid" | "dashed" | "dotted";
		arrow?: boolean;
	};
}

export interface MindMapLayout {
	type: "tree" | "force" | "radial" | "manual";
	options?: Record<string, unknown>;
}

export interface MindMapExport {
	format: "png" | "svg" | "pdf" | "json";
	quality?: number; // 0-100
	includeBackground?: boolean;
	width?: number;
	height?: number;
}
