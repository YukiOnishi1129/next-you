import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/shared/components/ui/accordion";

interface Question {
	question: string;
	answer: string;
}

interface HelpFAQProps {
	questions: Question[];
}

export function HelpFAQ({ questions }: HelpFAQProps) {
	return (
		<div className="mt-8">
			<h2 className="text-2xl font-semibold mb-4">
				Frequently Asked Questions
			</h2>
			<Accordion type="single" collapsible className="w-full">
				{questions.map((item) => (
					<AccordionItem key={item.question} value={item.question}>
						<AccordionTrigger className="text-left font-medium">
							{item.question}
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-muted-foreground">{item.answer}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
