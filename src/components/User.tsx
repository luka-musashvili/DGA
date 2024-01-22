"use client";
import "@/app/globals.css";
import { User } from "@/types/types";
import { useState } from "react";

interface UserProps {
	data: User[];
}

const UserPage: React.FC<UserProps> = ({ data }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const openSidebar = (user: User) => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<div className={`flexBetween h-full ${isSidebarOpen ? "pr-[388px]" : ""} transition-all`}>
			<div className="bg-white h-full rounded-lg overflow-hidden">
				{data.map((user, index) => (
					<div key={index}>
						<p>Name: {user.name}</p>
						<p>Last Name: {user.lastName}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserPage;
