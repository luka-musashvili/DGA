import React, { useState } from "react";

type Language = {
	code: string;
	name: string;
};

type Texts = {
	placeholder: string;
	buttonText: string;
	welcomeMessage: string;
};

const LanguageChooser: React.FC = () => {
	const languages: Language[] = [
		{ code: "ka", name: "ქართული" },
		{ code: "en", name: "English" },
	];

	const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

	const texts: Record<string, Texts> = {
		ka: {
			placeholder: "შეიყვანეთ ტექსტი ...",
			buttonText: "შესვლა",
			welcomeMessage: "გამარჯობა, სალამი!",
		},
		en: {
			placeholder: "Enter text...",
			buttonText: "Submit",
			welcomeMessage: "Hello, welcome to my app!",
		},
	};

	const handleLanguageChange = (code: string) => {
		setSelectedLanguage(code);
	};

	const getTextsForLanguage = (): Texts => {
		return texts[selectedLanguage];
	};

	const { placeholder, buttonText, welcomeMessage } = getTextsForLanguage();

	return (
		<>
			<div className="relative inline-block">
				<button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full inline-flex items-center">
					<span className="mr-1">Language:</span>
					<span className="font-semibold">{languages.find((lang) => lang.code === selectedLanguage)?.name}</span>
					<svg className="ml-2 h-5 w-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
						<path d="M19 9l-7 7-7-7"></path>
					</svg>
				</button>

				<div className="hidden md:block ml-2">
					{/* Second div (hidden on smaller screens) */}
					<div
						className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						{languages.map((lang) => (
							<button
								key={lang.code}
								onClick={() => handleLanguageChange(lang.code)}
								className={`block px-4 py-2 text-sm ${selectedLanguage === lang.code ? "bg-gray-100" : "hover:bg-gray-100"} text-gray-700 w-full text-left`}
								role="menuitem"
							>
								{lang.name}
							</button>
						))}
					</div>
				</div>

				<div className="mt-4">
					{/* Display the dynamic text content based on the selected language */}
					<p>{welcomeMessage}</p>
					<input type="text" placeholder={placeholder} className="border p-2 mt-2" />
					<button className="bg-blue-500 text-white px-4 py-2 mt-2">{buttonText}</button>
				</div>
			</div>
		</>
	);
};

export default LanguageChooser;
