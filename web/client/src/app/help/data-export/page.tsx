import { HelpContactSupport } from "@/features/help/components/HelpContactSupport";
import { HelpFAQ } from "@/features/help/components/HelpFAQ";
import { HelpPageLayout } from "@/features/help/components/HelpPageLayout";
import { HelpRelatedArticles } from "@/features/help/components/HelpRelatedArticles";
import { HelpScreenshot } from "@/features/help/components/HelpScreenshot";
import { HelpStepByStep } from "@/features/help/components/HelpStepByStep";
import { HelpTip } from "@/features/help/components/HelpTip";
import { HelpWarning } from "@/features/help/components/HelpWarning";
import { PlainPageShell } from "@/shared/components/layout/shell/PlainPageShell/PlainPageShell";

import { Button } from "@/shared/components/ui/button";
import { Download, FileJson, FileText } from "lucide-react";

export default function DataExportPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Data Export"
				description="Learn how to export your data from NextYou for backup or transfer purposes."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Why Export Your Data?
						</h2>
						<p className="mb-4">
							Exporting your data from NextYou allows you to:
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>Create personal backups of your analyses and action plans</li>
							<li>Transfer your data to other platforms or applications</li>
							<li>Review your information offline</li>
							<li>Maintain records of your personal growth journey</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Available Export Formats
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="border rounded-lg p-6">
								<div className="flex items-center mb-2">
									<FileJson className="mr-2 h-5 w-5 text-rose-500" />
									<h3 className="text-xl font-medium">JSON Format</h3>
								</div>
								<p className="text-sm text-muted-foreground mb-2">
									Complete data with structure
								</p>
								<p className="text-sm">
									Exports all your data in JSON format, preserving the
									relationships between analyses, categories, and action plans.
									Ideal for technical users or for importing into other systems.
								</p>
							</div>

							<div className="border rounded-lg p-6">
								<div className="flex items-center mb-2">
									<FileText className="mr-2 h-5 w-5 text-rose-500" />
									<h3 className="text-xl font-medium">CSV Format</h3>
								</div>
								<p className="text-sm text-muted-foreground mb-2">
									Tabular data for spreadsheets
								</p>
								<p className="text-sm">
									Exports your data in CSV format, which can be opened in
									spreadsheet applications like Excel or Google Sheets. Separate
									files are created for analyses, categories, and action plans.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							How to Export Your Data
						</h2>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Data & Privacy",
								"Scroll to the 'Data Export' section",
								"Select what data you want to export (All Data, Analyses, Categories, or Action Plans)",
								"Choose your preferred format (JSON or CSV)",
								"Click the 'Export Data' button to generate your export file",
								"Once processing is complete, click the 'Download' button to save your data to your device",
							]}
						/>

						<HelpScreenshot
							src="/data-export-interface.png"
							alt="Data Export Interface"
							caption="The data export interface where you can select export options"
						/>

						<div className="mt-6 flex justify-center">
							<Button className="bg-rose-500 hover:bg-rose-600">
								<Download className="mr-2 h-4 w-4" />
								Go to Data Export Settings
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							What Data Gets Exported
						</h2>
						<p className="mb-4">
							When you export your data, the following information is included:
						</p>

						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong>User Profile:</strong> Your basic account information
								and preferences
							</li>
							<li>
								<strong>Analyses:</strong> All your analysis data, including
								results and insights
							</li>
							<li>
								<strong>Categories:</strong> Your category structure and
								organization system
							</li>
							<li>
								<strong>Action Plans:</strong> All action plans with their tasks
								and progress
							</li>
							<li>
								<strong>Mind Maps:</strong> Your mind map structures and
								connections
							</li>
							<li>
								<strong>Progress Data:</strong> Historical tracking of your
								progress
							</li>
							<li>
								<strong>Notes:</strong> Any notes you've added to analyses or
								action plans
							</li>
						</ul>

						<HelpTip>
							Personal data like payment information is never included in
							exports for security reasons.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Importing Exported Data
						</h2>
						<p className="mb-4">
							You can import your exported data back into NextYou or into other
							compatible systems:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Data & Privacy",
								"Scroll to the 'Data Import' section",
								"Click 'Choose File' and select your previously exported file",
								"Select whether to merge with existing data or replace it",
								"Click 'Import Data' to begin the import process",
								"Wait for the confirmation message that your data has been imported",
							]}
						/>

						<HelpWarning>
							When replacing existing data, all current data will be permanently
							overwritten by the imported data. This action cannot be undone.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Best Practices for Data Management
						</h2>

						<div className="space-y-4">
							<div>
								<h3 className="font-medium">Regular Exports</h3>
								<p className="text-muted-foreground">
									Schedule regular exports of your data (monthly is recommended)
									to ensure you always have a recent backup.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Secure Storage</h3>
								<p className="text-muted-foreground">
									Store your exported data files in a secure location, such as
									an encrypted drive or a password-protected cloud storage
									service.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Version Control</h3>
								<p className="text-muted-foreground">
									Include the date in your export filenames (e.g.,
									"nextyou_export_2025-04-25.json") to keep track of different
									versions.
								</p>
							</div>

							<div>
								<h3 className="font-medium">Test Imports</h3>
								<p className="text-muted-foreground">
									Periodically test importing your exported data to ensure the
									files are valid and can be restored if needed.
								</p>
							</div>
						</div>
					</section>

					<HelpFAQ
						questions={[
							{
								question: "How often should I export my data?",
								answer:
									"We recommend exporting your data periodically, especially after completing significant analyses or creating new action plans. Monthly exports are a good practice for active users.",
							},
							{
								question: "Is there a limit to how much data I can export?",
								answer:
									"There are no limits on data exports for paid accounts. Free accounts may have limitations on export frequency (once per week).",
							},
							{
								question: "Can I import my exported data back into NextYou?",
								answer:
									"Yes, you can import JSON format exports back into NextYou through the Data & Privacy settings page. This is useful for restoring from backups or transferring between accounts.",
							},
							{
								question: "How long are export files available for download?",
								answer:
									"Export files are available for download for 7 days after generation. After that, you'll need to generate a new export.",
							},
							{
								question:
									"Can I export only specific analyses or action plans?",
								answer:
									"Yes, you can choose to export specific items rather than your entire dataset. In the export interface, select 'Custom Export' and then choose the specific items you want to include.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Data Recovery", href: "/help/data-recovery" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
							{ title: "Switching Devices", href: "/help/mobile-app" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
