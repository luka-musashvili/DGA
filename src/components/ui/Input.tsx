import React from "react";
import Image from "next/image";

type InputProps = {
	name: string;
	label?: string;
	hint?: string;
	additionalClasses?: string;
	additionalInputClasses?: string;
	icon?: React.ReactNode;
	showIcon?: boolean;
	type: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, label, hint, additionalClasses, additionalInputClasses, icon, showIcon = true, type, placeholder, value, onChange }: InputProps) => {
	return (
		<>
			{label && <label className={"uppercase text-sm font-normal mb-1.5 " + additionalClasses}>{label}</label>}
			<div className="relative w-full">
				{showIcon && icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
				<input
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className={
						"rounded-lg border hover:ring-1 focus:shadow-[0px_0px_0px_3px] focus:shadow-border-color-inputShadow focus:outline-none ring-border-color-inputHover " + additionalInputClasses
					}
				/>
			</div>
			{hint && (
				<div className="input-hint flexStart gap-3 text-text-color-error mt-1.5 font-normal text-sm">
					<Image className="w-auto h-auto" width={0} height={0} src={"/images/login/error.svg"} alt="error" />
					{hint}
				</div>
			)}
		</>
	);
};

export default Input;
