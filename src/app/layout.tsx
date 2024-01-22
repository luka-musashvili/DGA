import React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "პოლიტიკის დაგეგმვისა და კორდინაციის მართვის ელექტრონული სისტემა",
	description: "დავალება ციფრული მმართველობის სააგენტოსთვის",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
