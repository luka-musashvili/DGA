import React from "react";

type InputProps = {
	label?: string;
	hint?: string;
	marginBot?: string;
	type: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, hint, marginBot, type, placeholder, value, onChange }: InputProps) => {
	return (
		<>
			{label && <label className="uppercase text-sm font-normal mb-[6px]">{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={"rounded-lg border border-border-color-input text-text-color-secondary h-[54px] px-4 py-3.5 " + marginBot}
			/>
			{hint && <small className="input-hint">{hint}</small>}
		</>
	);
};

export default Input;
