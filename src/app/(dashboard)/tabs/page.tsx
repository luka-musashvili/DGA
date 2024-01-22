"use client";
import React, { useState } from "react";
import PortalModal from "@/components/modals/PortalModal";
import AddUser from "@/components/modals/AddUser";

const Tabs = () => {
	const [isAddUserOpen, setIsAddUserOpen] = useState(false);

	const handleClose = () => {
		setIsAddUserOpen(false);
	};

	return (
		<>
			<button onClick={() => setIsAddUserOpen(true)}>Open Modal A</button>
			<PortalModal isOpen={isAddUserOpen} onClose={handleClose}>
				<AddUser onClose={handleClose} />
			</PortalModal>
		</>
	);
};

export default Tabs;
