"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Loader2, Upload } from "lucide-react";
import type React from "react";
import { useState } from "react";

export function AnalysisFileUploader() {
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = async () => {
		if (!file) return;

		setUploading(true);

		// Here you would implement the actual upload process
		// Example: Using FormData to send the file to an API

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			// Success handling
			alert("File uploaded successfully! Analysis in progress.");
			setFile(null);
		} catch (error) {
			console.error("Upload failed:", error);
			alert("Upload failed. Please try again.");
		} finally {
			setUploading(false);
		}
	};

	return (
		<div className="space-y-4">
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="chatgpt-json">ChatGPT History (JSON)</Label>
				<Input
					id="chatgpt-json"
					type="file"
					accept=".json"
					onChange={handleFileChange}
				/>
			</div>
			{file && (
				<div className="text-sm">
					<p>Selected file: {file.name}</p>
					<p>Size: {(file.size / 1024).toFixed(2)} KB</p>
				</div>
			)}
			<Button
				onClick={handleUpload}
				disabled={!file || uploading}
				className="w-full bg-rose-500 hover:bg-rose-600"
			>
				{uploading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Uploading...
					</>
				) : (
					<>
						<Upload className="mr-2 h-4 w-4" />
						Start Analysis
					</>
				)}
			</Button>
		</div>
	);
}
