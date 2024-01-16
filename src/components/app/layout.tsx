import React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "ციფრული მმართველობის სააგენტო",
	description: "homework for LEPL Digital Governance Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
