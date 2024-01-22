"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItemProps {
	href: string;
	icon: ReactNode;
	label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label }) => {
	const router = usePathname();
	const isFocused = router === href;

	const itemClass = isFocused
		? "relative flex items-center bg-sidebar-color-hover text-sidebar-color-text border-l-2 border-sidebar-color-border"
		: "relative flex items-center hover:bg-sidebar-color-hover border-white hover:text-sidebar-color-text border-l-2 hover:border-sidebar-color-border";

	const textClass = isFocused ? "text-sidebar-color-text" : "hover:text-sidebar-color-text";

	return (
		<li className="min-w-max">
			<Link href={href} className={itemClass}>
				{icon}
				<span className={textClass}>{label}</span>
			</Link>
		</li>
	);
};

export default SidebarItem;
