interface HelpStepByStepProps {
	steps: string[];
}

export function HelpStepByStep({ steps }: HelpStepByStepProps) {
	return (
		<div className="space-y-3 my-4">
			{steps.map((step, i) => (
				<div key={step} className="flex items-start">
					<div className="mr-3 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background">
						<span className="text-sm font-medium">{i + 1}</span>
					</div>
					<p>{step}</p>
				</div>
			))}
		</div>
	);
}
