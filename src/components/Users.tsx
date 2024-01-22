"use client";
import "@/app/globals.css";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PortalModal from "@/components/modals/PortalModal";
import AddUser from "@/components/modals/AddUser";
import Link from "next/link";
import { User } from "@/types/types";

interface UsersProps {
	data: User[];
}

const Users: React.FC<UsersProps> = ({ data }) => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearchActive, setIsSearchActive] = useState(false);
	const [isModalAOpen, setIsModalAOpen] = useState(false);
	const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
	const [expandedId, setExpandedId] = useState<number | null>(null);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const clearSearch = () => {
		setSearchTerm("");
		setIsSearchActive(false);
	};

	const handleClose = () => {
		setIsModalAOpen(false);
	};

	const handleUserClick = (user: User) => {
		setSelectedUser(user);
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const toggleDropdown = (id: number, event: React.MouseEvent) => {
		event.stopPropagation();
		setOpenDropdownId(openDropdownId === id ? null : id);
	};

	const handleTableClick = () => {
		if (openDropdownId !== null) {
			setOpenDropdownId(null);
		}
	};

	const getImageSrc = (file: string | undefined) => {
		const defaultImage = "/images/table/VectorP.svg";

		if (!file) {
			return defaultImage;
		}

		if (file.startsWith("/userImages")) {
			// დრო აღარ მაქვს, თორემ დასახვეწია ეს ლოგიკა
			return file;
		}

		try {
			new URL(file);
			return file;
		} catch (_) {
			return defaultImage;
		}
	};

	const toggleRow = (id: number) => {
		setExpandedId(expandedId === id ? null : id);
	};

	return (
		<div className={`flexBetween h-full ${isSidebarOpen ? "pr-[388px]" : ""} transition-all`}>
			<div className="bg-white h-full overflow-hidden rounded-lg" onClick={handleTableClick}>
				<div className="flexBetween px-4 py-2">
					<div className="flex items-center">
						<Button text="დამატება" variant="secondary" customClasses="py-2 px-3.5 mr-[28px]" onClick={() => setIsModalAOpen(true)} />
						<div className="relative">
							<div className={`cursor-pointer  ${isSearchActive ? "hidden" : ""}`} onClick={() => setIsSearchActive(true)}>
								<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/MagnifyingGlass.svg"} alt="ძებნა" />
							</div>
							<Input
								name="search"
								type="text"
								placeholder="მოძებნე სახელის მიხედვით"
								value={searchTerm}
								icon={<Image width={20} height={20} src={"/images/table/MagnifyingGlass.svg"} alt="ძებნა" />}
								showIcon={isSearchActive}
								onChange={handleSearchChange}
								additionalInputClasses={`h-[34px] w-[244px] px-10 py-1.5 text-sm font-normal text-black transition-all ease-in-out duration-300 ${!isSearchActive ? "hidden" : ""}`}
							/>
							{isSearchActive && (
								<div className="cursor-pointer absolute right-3 top-2.5" onClick={clearSearch}>
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/VectorX.svg"} alt="წაშლა" />
								</div>
							)}
						</div>
					</div>
					<div className="h-[30px] flexBetween rounded-lg bg-border-color-table gap-2 px-2">
						<div className="text-center align-middle text-text-color-table font-normal text-sm">ყველა</div>
						<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/VectorV.svg"} alt="ჩამოშლა" />
					</div>
				</div>
				<table className="w-full table-fixed text-left text-sm text-text-color-secondary">
					<thead>
						<tr className="h-[35px]">
							<th className="w-14"></th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">სახელი</th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">გვარი</th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">უწყება</th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">თანამდებობა</th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">ელ. ფოსტა</th>
							<th className="w-[calc((100%-112px)/6)] font-normal pl-2 text-text-color-table">მობილური</th>
							<th className="w-14"></th>
						</tr>
					</thead>
					<tbody>
						{data
							.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
							.map((user) => (
								<tr
									key={user.id}
									className={`h-[60px] cursor-pointer relative overflow-hidden border-t border-border-color-table ${expandedId === user.id ? "h-[60px]" : ""} ${
										selectedUser?.id === user.id && isSidebarOpen ? "bg-button-color-secondary-disabled" : ""
									}`}
									onClick={() => {
										toggleRow(user.id);
									}}
								>
									<td className="w-14">
										<Image
											className="w-6 h-6 ml-[22px] rounded-[200px]"
											width={0}
											height={0}
											src={getImageSrc(user.file)}
											alt="სურათი"
											onClick={(e) => {
												e.stopPropagation();
												handleUserClick(user);
											}}
										/>
									</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.name}</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.lastName}</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.agency}</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.position}</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.email}</td>
									<td className={`w-[calc((100%-112px)/6)] pl-2 text-black break-words ${expandedId === user.id ? "" : "truncate"}`}>{user.phone}</td>
									<td className="w-14">
										<div className="cursor-pointer inline-flex justify-center px-2 py-3 transition duration-150 ease-in-out" onClick={(e) => toggleDropdown(user.id, e)}>
											<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/Vector.svg"} alt="ჩამოშლა" />
										</div>
										<div
											className={`${
												openDropdownId === user.id ? "" : "hidden"
											} absolute right-16 top-2 w-[250px] h-[90px] rounded-lg p-1 shadow-lg bg-white z-10 flex flex-col border`}
										>
											<Link className="cursor-pointer px-4 py-2.5 flexStart gap-[11px] hover:bg-main-bg" href={`/user/${user.id}`}>
												<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/user.svg"} alt="მომხმარებელი" />
												<span className="font-normal text-sm text-text-color-checkbox">პროფილის ნახვა</span>
											</Link>
											<div
												className="cursor-pointer px-4 py-2.5 flexStart gap-[11px] hover:bg-main-bg"
												onClick={() => {
													console.log(`Delete user ${user.id}`);
													// Add your deletion logic here
												}}
											>
												<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/delete.svg"} alt="წაშლა" />
												<span className="font-normal text-sm text-text-color-delete">მომხმარებლის</span>
											</div>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<PortalModal isOpen={isModalAOpen} onClose={handleClose}>
					<AddUser onClose={handleClose} />
				</PortalModal>
			</div>
			{isSidebarOpen && (
				<div className="fixed w-[380px] bg-white h-[calc(100vh-86px)] right-4 bottom-3 rounded-lg">
					<div className="h-16 p-4 flexBetween border-b">
						<Image className="w-auto h-auto cursor-pointer" onClick={closeSidebar} width={0} height={0} src={"/images/table/Vectorxx.svg"} alt="დახურვა" />
						<span className="text-sm font-normal text-border-color-sidebar">{selectedUser?.name}</span>
						<div className="w-3"></div>
					</div>
					<div className="h-[92px] px-3 pt-3 mb-[22px] flexStart gap-2">
						<Image className="w-12 h-12 m-2.5 rounded-[200px]" width={0} height={0} src={getImageSrc(selectedUser?.file)} alt="მომხმარებელი" />
						<div className="h-14 flex-col flex gap-2">
							<div className="flexBetween gap-2.5 px-3 py-1 rounded-[50px] bg-button-color-secondary-disabled">
								<span className="text-sm font-normal uppercase text-border-color-sidebar">{selectedUser?.role?.name || "როლის გარეშე"}</span>
								<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/VectorPen.svg"} alt="კორექტირება" />
							</div>
							<Link className="px-3 text-xs font-normal uppercase text-button-color-primary" href={`/user/${selectedUser?.id}`}>
								პროფილის ნახვა
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3 px-2">
						<div className="flex flex-col gap-2.5 mb-3">
							<span className="px-3 uppercase text-xs font-normal text-text-color-tertiary">პირადი ინფორმაცია</span>
							<div className="px-3 py-2 flex flex-col gap-1 rounded-lg border border-border-color-sidebarChild">
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/face.svg"} alt="სქესი" />
									<span className="text-sm font-normal text-black">სქესი</span>
								</div>
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/assignment_ind.svg"} alt="ID" />
									<span className="text-sm font-normal text-black">{selectedUser?.id}</span>
								</div>
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/business.svg"} alt="სააგენტო" />
									<span className="text-sm font-normal text-black">{selectedUser?.agency}</span>
								</div>
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/work.svg"} alt="პოზიცია" />
									<span className="text-sm font-normal text-black">{selectedUser?.position}</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2.5">
							<span className="px-3 uppercase text-xs font-normal text-text-color-tertiary">საკონტაქტო ინფორმაცია</span>
							<div className="px-3 py-2 flex flex-col gap-1 rounded-lg border border-border-color-sidebarChild">
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/email.svg"} alt="იმეილი" />
									<span className="text-sm font-normal text-black">{selectedUser?.email}</span>
								</div>
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/call.svg"} alt="მობილური" />
									<span className="text-sm font-normal text-black">{selectedUser?.phone}</span>
								</div>
								<div className="flexStart gap-2 py-2.5">
									<Image className="w-auto h-auto" width={0} height={0} src={"/images/table/call.svg"} alt="მობილური" />
									<span className="text-sm font-normal text-black">{selectedUser?.phone}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Users;
