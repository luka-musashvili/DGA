import React from "react";
import Image from "next/image";
import SidebarItem from "./ui/SidebarItem";

const Sidebar = () => {
	return (
		<aside className="fixed top-0 left-0 z-10 h-[calc(100vh-20px)] w-[60px] m-2.5 overflow-hidden border-r rounded-[10px] hover:w-[300px] bg-white hover:shadow-lg transition-all ease-in-out delay-100 duration-300">
			<div className="w-max px-2 pt-2.5 mb-[68px] relative flex items-center">
				<Image className="w-auto h-auto" width={0} height={0} src="/images/sidebar/Frame.svg" alt="Frame" />
				<span className="text-[8px] font-medium uppercase w-[200px] ml-3">პოლიტიკის დაგეგმვისა და კოორდინაციის მართვის ელექტრონული სისტემა</span>
			</div>
			<ul className="flex-col flex gap-3">
				<SidebarItem
					href="/tabs"
					icon={<Image className="w-auto h-auto py-3 pr-[18px] pl-[16px]" width={0} height={0} src={"/images/sidebar/collections_bookmark.svg"} alt="tabs" />}
					label="ჩანართები"
				/>
				<SidebarItem
					href="/users"
					icon={<Image className="w-auto h-auto py-3 pr-[18px] pl-[16px]" width={0} height={0} src={"/images/sidebar/group.svg"} alt="users" />}
					label="მომხმარებლები"
				/>
				<SidebarItem href="/roles" icon={<Image className="w-auto h-auto py-3 pr-[18px] pl-[16px]" width={0} height={0} src={"/images/sidebar/work.svg"} alt="roles" />} label="როლები" />
			</ul>
		</aside>
	);
};

export default Sidebar;
