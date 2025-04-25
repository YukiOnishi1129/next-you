"use client";

import { Card } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { PulseLoader } from "react-spinners";

export default function Loading() {
	const SKELETON_COUNT = 6;
	const skeletonIds = Array.from({ length: SKELETON_COUNT }, () => crypto.randomUUID());

	return (
		<div className="container mx-auto p-6 space-y-8">
			<div className="flex items-center justify-between">
				<div>
					<Skeleton className="h-8 w-48 mb-2" />
					<Skeleton className="h-4 w-72" />
				</div>
				<Skeleton className="h-10 w-36" />
			</div>

			{/* Tabs skeleton */}
			<div className="flex gap-2 border-b pb-2">
				<Skeleton className="h-10 w-24" />
				<Skeleton className="h-10 w-24" />
				<Skeleton className="h-10 w-24" />
			</div>

			{/* Filters skeleton */}
			<div className="flex flex-wrap justify-between gap-4">
				<div className="flex gap-2">
					<Skeleton className="h-10 w-16" />
					<Skeleton className="h-10 w-24" />
					<Skeleton className="h-10 w-24" />
					<Skeleton className="h-10 w-24" />
				</div>
				<div className="flex gap-2">
					<Skeleton className="h-10 w-48" />
					<Skeleton className="h-10 w-36" />
					<Skeleton className="h-10 w-20" />
				</div>
			</div>

			{/* Center loader */}
			<div className="flex justify-center items-center py-12">
				<PulseLoader color="#6366f1" size={15} speedMultiplier={0.8} />
			</div>

			{/* Action plan cards skeleton */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{skeletonIds.map((id) => (
					<Card key={id} className="p-6 space-y-4">
						<div className="flex justify-between items-start">
							<div className="space-y-2">
								<Skeleton className="h-6 w-40" />
								<Skeleton className="h-4 w-24" />
							</div>
							<Skeleton className="h-8 w-16 rounded-full" />
						</div>
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-3/4" />
						<div className="flex justify-between items-center pt-2">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-8 w-8 rounded-full" />
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
