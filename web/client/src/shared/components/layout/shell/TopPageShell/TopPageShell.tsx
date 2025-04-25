import { Footer } from "@/shared/components/layout/footer/Footer/Footer";
import { UnauthenticatedPageHeader } from "@/shared/components/layout/header/UnauthenticatedPageHeader/UnauthenticatedPageHeader";
import type { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const TopPageShell: FC<Props> = ({ children }) => (
	<div className="flex min-h-screen flex-col">
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<UnauthenticatedPageHeader />
		</header>
		<main>{children}</main>
		<footer className="w-full border-t py-6">
			<Footer />
		</footer>
	</div>
);
