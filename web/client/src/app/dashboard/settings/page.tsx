import { AccountSettings } from "@/features/settings/components/AccountSettings";
import { AppearanceSettings } from "@/features/settings/components/AppearanceSettings";
import { NotificationSettings } from "@/features/settings/components/NotificationSettings";
import { ProfileSettings } from "@/features/settings/components/ProfileSettings";
import { PageHeader } from "@/shared/components/layout/header/PageHeader";
import { DashboardShell } from "@/shared/components/layout/shell/DashboardShell";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Settings | Next You",
	description: "Manage your account settings and preferences",
};

export default function SettingsPage() {
	return (
		<DashboardShell>
			<PageHeader
				heading="Settings"
				description="Manage your account settings and preferences"
			/>

			<Tabs defaultValue="profile" className="space-y-4">
				<TabsList>
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
				</TabsList>
				<TabsContent value="profile">
					<Card>
						<CardHeader>
							<CardTitle>Profile</CardTitle>
							<CardDescription>
								Manage your public profile information
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ProfileSettings />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle>Account</CardTitle>
							<CardDescription>
								Manage your account settings and preferences
							</CardDescription>
						</CardHeader>
						<CardContent>
							<AccountSettings />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="notifications">
					<Card>
						<CardHeader>
							<CardTitle>Notifications</CardTitle>
							<CardDescription>
								Configure how you receive notifications
							</CardDescription>
						</CardHeader>
						<CardContent>
							<NotificationSettings />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="appearance">
					<Card>
						<CardHeader>
							<CardTitle>Appearance</CardTitle>
							<CardDescription>
								Customize the appearance of the application
							</CardDescription>
						</CardHeader>
						<CardContent>
							<AppearanceSettings />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</DashboardShell>
	);
}
