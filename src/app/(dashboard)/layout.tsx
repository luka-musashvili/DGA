import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />
			<Header />
			<main className="fixed overflow-hidden w-[calc(100%-104px)] h-[calc(100vh-86px)] right-4 bottom-3 rounded-[10px]">{children}</main>
		</>
	);
}
