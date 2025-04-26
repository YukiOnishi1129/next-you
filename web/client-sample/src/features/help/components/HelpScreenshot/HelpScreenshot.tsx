import Image from "next/image";

interface HelpScreenshotProps {
	src: string;
	alt: string;
	caption?: string;
	width?: number;
	height?: number;
}

export function HelpScreenshot({
	src,
	alt,
	caption,
	width = 800,
	height = 450,
}: HelpScreenshotProps) {
	return (
		<figure className="my-6">
			<div className="overflow-hidden rounded-lg border bg-background shadow-sm">
				<Image
					src={src || "/placeholder.svg"}
					alt={alt}
					width={width}
					height={height}
					className="w-full object-cover"
				/>
			</div>
			{caption && (
				<figcaption className="mt-2 text-center text-sm text-muted-foreground">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
