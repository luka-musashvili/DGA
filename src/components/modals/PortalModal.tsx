import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const PortalModal: FC<PortalModalProps> = ({ isOpen, onClose, children }) => {
	const [modalElement, setModalElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setModalElement(document.body);
	}, []);

	if (!isOpen || !modalElement) return null;

	const modalContent = (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50">
			<div className="bg-black bg-opacity-20 inset-0 fixed" onClick={onClose} />
			<div className="bg-white rounded z-50">{children}</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, modalElement);
};

export default PortalModal;
