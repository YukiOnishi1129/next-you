"use client";

import { useEffect, useRef } from "react";

export function MindMapVisualization() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			const parent = canvas.parentElement;
			if (parent) {
				canvas.width = parent.offsetWidth;
				canvas.height = parent.offsetHeight;
			}
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Mind map data (sample)
		const rootNode = {
			name: "Personal Growth",
			x: canvas.width / 2,
			y: canvas.height / 2,
			children: [
				{
					name: "Programming",
					children: [
						{ name: "Next.js" },
						{ name: "TypeScript" },
						{ name: "React" },
					],
				},
				{
					name: "Health",
					children: [{ name: "Morning Walk" }, { name: "Diet Management" }],
				},
				{
					name: "Productivity",
					children: [{ name: "Pomodoro" }, { name: "Task Management" }],
				},
				{
					name: "Reading",
					children: [{ name: "Technical Books" }, { name: "Self-improvement" }],
				},
			],
		};

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw mind map
		drawMindMap(ctx, rootNode, canvas.width / 2, canvas.height / 2, 0);

		// Mind map drawing function
		function drawMindMap(
			ctx: CanvasRenderingContext2D,
			// biome-ignore lint/suspicious/noExplicitAny: Node structure varies based on mind map content
			node: any,
			x: number,
			y: number,
			angle: number,
		) {
			const radius = 120; // Child node placement radius

			// Draw node
			ctx.beginPath();
			ctx.fillStyle = node === rootNode ? "#f43f5e" : "#f43f5e33";
			ctx.arc(x, y, 30, 0, Math.PI * 2);
			ctx.fill();

			// Draw node name
			ctx.fillStyle = node === rootNode ? "white" : "black";
			ctx.font = node === rootNode ? "bold 12px sans-serif" : "12px sans-serif";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(node.name, x, y);

			// Draw child nodes recursively
			if (node.children && node.children.length > 0) {
				const angleStep = (Math.PI * 2) / node.children.length;

				// biome-ignore lint/suspicious/noExplicitAny: Child nodes can have various structures
				node.children.forEach((child: any, i: number) => {
					const childAngle = angle + i * angleStep;
					const childX = x + Math.cos(childAngle) * radius;
					const childY = y + Math.sin(childAngle) * radius;

					// Connect parent and child nodes with a line
					ctx.beginPath();
					ctx.strokeStyle = "#f43f5e55";
					ctx.lineWidth = 2;
					ctx.moveTo(x, y);
					ctx.lineTo(childX, childY);
					ctx.stroke();

					// Draw child node
					drawMindMap(ctx, child, childX, childY, childAngle);
				});
			}
		}

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return <canvas ref={canvasRef} className="w-full h-full border rounded-lg" />;
}
