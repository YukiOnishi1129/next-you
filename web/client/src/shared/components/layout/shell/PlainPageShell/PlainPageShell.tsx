import { Footer } from "@/shared/components/layout/footer/Footer/Footer";
import type { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const PlainPageShell: FC<Props> = ({ children }) => (
	<div className="flex min-h-screen flex-col">
		<main>{children}</main>
		<footer>
			<Footer />
		</footer>
	</div>
);
