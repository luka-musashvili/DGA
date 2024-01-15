import React from "react";

const LanguageSwitcher = () => (
	<div className="flexBetween gap-6">
		<div className="flexBetween gap-2">
			<span className="font-normal text-sm break-words max-h-19">ქართული</span>
			<svg className="" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.11606 2.41361L3.70606 5.00361C4.09606 5.39361 4.72606 5.39361 5.11606 5.00361L7.70606 2.41361C8.33606 1.78361 7.88606 0.703613 6.99606 0.703613H1.81606C0.926057 0.703613 0.486057 1.78361 1.11606 2.41361Z"
					fill="#323232"
				/>
			</svg>
		</div>
		<div className="font-normal text-sm break-words max-h-19">დახმარება</div>
	</div>
);

export default LanguageSwitcher;
