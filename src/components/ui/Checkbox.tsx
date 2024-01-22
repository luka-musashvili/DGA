import React from "react";

type CheckboxProps = {
	label?: string;
	additionalClasses?: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ label, additionalClasses, checked, onChange }: CheckboxProps) => {
	return (
		<div className={`flex items-center ${additionalClasses}`}>
			<input type="checkbox" checked={checked} onChange={onChange} className="mr-2 border-border-color-secondary rounded-[4px]" />
			{label && <label className="text-sm font-normal text-text-color-checkbox">{label}</label>}
		</div>
	);
};

export default Checkbox;
