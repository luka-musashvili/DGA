import React from "react";
import Image from "next/image";

type HeaderProps = {
	text: string;
	onClick?: () => void;
};

const Header = ({ text, onClick }: HeaderProps) => {
	return (
		<div className="flexBetween border-b border-modal-color-border p-4">
			<div className="w-3"></div>
			<div className="text-sm font-bold uppercase text-modal-color">{text}</div>
			<Image className="w-auto h-auto cursor-pointer" onClick={onClick} width={0} height={0} src={"/images/modal/Vector.svg"} alt="close" />
		</div>
	);
};

export default Header;
