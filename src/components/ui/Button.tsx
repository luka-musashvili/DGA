import React from "react";

type ButtonProps = {
	text: string;
	variant: "primary" | "secondary" | "outline" | "text";
	additionalClasses?: string;
	customClasses?: string;
	onClick?: () => void;
	disabled?: boolean;
};

const Button = ({ text, variant, customClasses, additionalClasses = "", onClick, disabled }: ButtonProps) => {
	let baseClasses = "rounded-lg font-semibold text-sm transition-colors duration-300 uppercase";
	let variantClasses = "";

	if (disabled) {
		additionalClasses += " opacity-50 cursor-not-allowed";
	}

	switch (variant) {
		case "primary":
			variantClasses = `bg-button-color-primary ${!disabled && "hover:bg-button-color-primary-hover"} text-button-color-primary-text ${
				disabled && "bg-button-color-primary-disabled text-button-color-primary-textHover"
			}`;
			break;
		case "secondary":
			variantClasses = `bg-button-color-secondary ${!disabled && "hover:bg-button-color-secondary-hover"} text-button-color-secondary-text ${
				disabled && "bg-button-color-secondary-disabled text-button-color-secondary-textDisabled"
			}`;
			break;
		case "outline":
			variantClasses = `bg-transparent border border-button-color-outline ${!disabled && "hover:border-button-color-outline-hover"} text-button-color-outline-text ${
				disabled && "border-button-color-outline-disabled text-button-color-outline-textDisabled"
			}`;
			break;
		case "text":
			variantClasses = `bg-transparent ${!disabled && "hover:bg-button-color-text-hover"} text-button-color-text ${disabled && "text-button-color-text-disabled"}`;
			break;
		default:
			break;
	}

	const classes = `${baseClasses} ${variantClasses} ${customClasses} ${disabled ? "" : additionalClasses}`;

	return (
		<button className={classes} onClick={!disabled ? onClick : undefined} disabled={disabled} aria-disabled={disabled ? "true" : "false"}>
			{text}
		</button>
	);
};

export default Button;
