import React from "react";
import Image from "next/image";

type HintProps = {
	text: string;
	variant: "blue" | "red" | "grey";
	onClick?: () => void;
};

const Hint = ({ text, variant }: HintProps) => {
	let baseClasses = "rounded-lg p-2.5 flexStart gap-2.5";
	let variantClasses = "";

	switch (variant) {
		case "blue":
			variantClasses = "bg-hint-color-blue text-hint-color-blue-text";
			break;
		case "red":
			variantClasses = "bg-hint-color-red text-hint-color-red-text";
			break;
		case "grey":
			variantClasses = "bg-hint-color-grey text-hint-color-grey-text";
			break;
		default:
			break;
	}

	const classes = `${baseClasses} ${variantClasses}`;

	return (
		<div className={classes}>
			<Image className="h-auto w-auto" width={0} height={0} src={"/images/modal/Vector!.svg"} alt="ყურადღება" />
			<div className="text-sm font-normal">{text}</div>
		</div>
	);
};

export default Hint;
