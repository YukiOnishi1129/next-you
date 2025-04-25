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
import Link from "next/link";

export default function DataRecoveryPage() {
	return (
		<PlainPageShell>
			<HelpPageLayout
				title="Data Recovery"
				description="Learn how to recover your data in case of accidental deletion or loss."
				lastUpdated="April 25, 2025"
			>
				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Understanding Data Recovery Options 
						</h2>
						<p className="mb-4">
							Next You provides several ways to recover your data in case of
							accidental deletion or loss. This guide will walk you through the
							available recovery options and best practices for data backup.
						</p>

						<HelpWarning>
							Data recovery is only possible within 30 days of deletion. After
							this period, deleted data cannot be recovered.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Recovering Deleted Action Plans
						</h2>
						<p className="mb-4">
							If you've accidentally deleted an action plan, you can recover it
							from the Trash section:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Dashboard > Action Plans",
								"Click on the 'Trash' tab at the top of the page",
								"Find the deleted action plan in the list",
								"Click the 'Restore' button next to the action plan",
								"The action plan will be restored to its original location",
							]}
						/>

						<HelpScreenshot
							src="/action-plan-trash-restore.png"
							alt="Action Plan Trash Section"
							caption="The Trash section showing deleted action plans with restore options"
						/>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Recovering Deleted Analyses
						</h2>
						<p className="mb-4">
							Deleted analyses can be recovered using a similar process:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Dashboard > Analyses",
								"Click on the 'Trash' tab at the top of the page",
								"Find the deleted analysis in the list",
								"Click the 'Restore' button next to the analysis",
								"The analysis will be restored with all its associated data",
							]}
						/>

						<HelpTip>
							Restoring an analysis will also restore any action plans that were
							generated from that analysis.
						</HelpTip>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Recovering Deleted Categories
						</h2>
						<p className="mb-4">To recover deleted categories:</p>

						<HelpStepByStep
							steps={[
								"Navigate to Dashboard > Categories",
								"Click on the 'Trash' tab at the top of the page",
								"Find the deleted category in the list",
								"Click the 'Restore' button next to the category",
								"The category will be restored along with its associations to action plans",
							]}
						/>

						<HelpWarning>
							Restoring a category will not automatically restore action plans
							that were in that category if they were separately deleted.
						</HelpWarning>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Data Export as Backup
						</h2>
						<p className="mb-4">
							We recommend regularly exporting your data as a backup measure:
						</p>

						<HelpStepByStep
							steps={[
								"Navigate to Settings > Data",
								"Click on 'Export All Data'",
								"Choose the format (JSON or CSV)",
								"Click 'Export' and save the file to your computer",
								"Store this backup in a secure location",
							]}
						/>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/data-export">
									Learn more about data export
								</Link>
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Account Recovery</h2>
						<p className="mb-4">
							If you've lost access to your account, you can recover it through
							our account recovery process:
						</p>

						<HelpStepByStep
							steps={[
								"Go to the login page",
								"Click on 'Forgot Password'",
								"Enter the email address associated with your account",
								"Follow the instructions sent to your email",
								"Set a new password and regain access to your account and data",
							]}
						/>

						<div className="mt-4">
							<Button asChild>
								<Link href="/help/password-reset">
									Learn more about password reset
								</Link>
							</Button>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							Preventing Data Loss
						</h2>
						<p className="mb-4">
							Here are some best practices to prevent data loss:
						</p>

						<ul className="list-disc pl-6 space-y-2 mb-4">
							<li>Regularly export your data as backups</li>
							<li>
								Be cautious when deleting items, especially categories that
								contain multiple action plans
							</li>
							<li>
								Consider using the archive feature instead of deletion for items
								you may need later
							</li>
							<li>
								Keep your account credentials secure to prevent unauthorized
								access
							</li>
							<li>Enable two-factor authentication for additional security</li>
						</ul>

						<HelpTip>
							Set a calendar reminder to export your data monthly if you're
							actively using Next You.
						</HelpTip>
					</section>

					<HelpFAQ
						questions={[
							{
								question: "How long does Next You keep deleted data?",
								answer:
									"Next You keeps deleted data for 30 days, after which it is permanently removed from our systems.",
							},
							{
								question: "Can I recover data after the 30-day period?",
								answer:
									"Unfortunately, data cannot be recovered after the 30-day retention period. This is why we recommend regular data exports.",
							},
							{
								question:
									"Will restoring a deleted item restore its relationships?",
								answer:
									"Yes, restoring an item will restore its relationships with other items that still exist in the system.",
							},
							{
								question: "Can I recover just a portion of a deleted analysis?",
								answer:
									"Currently, analyses can only be recovered in their entirety. Partial recovery is not supported.",
							},
							{
								question: "Is there an automatic backup system?",
								answer:
									"Next You automatically creates system backups, but these are for disaster recovery purposes and not for individual user data recovery. We recommend using the export feature for personal backups.",
							},
						]}
					/>

					<HelpRelatedArticles
						articles={[
							{ title: "Data Export", href: "/help/data-export" },
							{ title: "Password Reset", href: "/help/password-reset" },
							{ title: "Account Deletion", href: "/help/account-deletion" },
							{ title: "Privacy Settings", href: "/help/privacy-settings" },
						]}
					/>

					<HelpContactSupport />
				</div>
			</HelpPageLayout>
		</PlainPageShell>
	);
}
