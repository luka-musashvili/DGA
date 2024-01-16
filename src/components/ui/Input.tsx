import React from "react";

type InputProps = {
	label?: string;
	hint?: string;
	additionalClasses?: string;
	type: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, hint, additionalClasses, type, placeholder, value, onChange }: InputProps) => {
	return (
		<>
			{label && <label className="uppercase text-sm font-normal mb-1.5">{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={"rounded-lg border border-border-color-input text-text-color-secondary h-[54px] px-4 py-3.5 " + additionalClasses}
			/>
			{hint && (
				<div className="input-hint flexStart gap-3 text-text-color-error mt-1.5 font-normal text-sm">
					<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.46984 12.7453H12.5302C13.6612 12.7453 14.3662 11.5188 13.8007 10.542L8.27054 0.987281C7.70504 0.0105061 6.29496 0.0105061 5.72946 0.987281L0.1993 10.542C-0.366201 11.5188 0.338839 12.7453 1.46984 12.7453ZM7 7.60438C6.59607 7.60438 6.26558 7.27389 6.26558 6.86996V5.40113C6.26558 4.9972 6.59607 4.66671 7 4.66671C7.40393 4.66671 7.73442 4.9972 7.73442 5.40113V6.86996C7.73442 7.27389 7.40393 7.60438 7 7.60438ZM7.73442 10.542H6.26558V9.07321H7.73442V10.542Z"
							fill="#7A0000"
						/>
					</svg>
					{hint}
				</div>
			)}
		</>
	);
};

export default Input;
