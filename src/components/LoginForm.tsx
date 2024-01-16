import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Cookies from "js-cookie";

const LoginForm = () => {
	const [emailOrMobile, setEmailOrMobile] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [hint, setHint] = useState("");

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ emailOrMobile, password });
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			username: emailOrMobile,
			password: password,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		};

		fetch("http://localhost:3000/api/v1/sign-in", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				if (result.success) {
					Cookies.set("token", result.data.token, { expires: 5 / 24 });
					console.log("Token set as cookie:", result.data.token);
				} else {
					setHint(result.error);
					console.log("Login failed:", result.error);
				}
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="flex-col flexCenter p-2">
			<h2 className="mt-20 max-md:my-12 uppercase text-base font-medium text-center text-black">ავტორიზაცია</h2>
			<form onSubmit={handleSubmit} className="mt-6 p-6 flex flex-col gap-6 border-border-color border rounded-2xl" style={{ maxWidth: "451px" }}>
				<div className="flexCenter flex-col">
					<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.5" width="48" height="48" rx="10" fill="#F5F8FF" />
						<g clipPath="url(#clip0_5_97)">
							{" "}
							<path
								d="M24.5 17.9C25.66 17.9 26.6 18.84 26.6 20C26.6 21.16 25.66 22.1 24.5 22.1C23.34 22.1 22.4 21.16 22.4 20C22.4 18.84 23.34 17.9 24.5 17.9ZM24.5 26.9C27.47 26.9 30.6 28.36 30.6 29V30.1H18.4V29C18.4 28.36 21.53 26.9 24.5 26.9ZM24.5 16C22.29 16 20.5 17.79 20.5 20C20.5 22.21 22.29 24 24.5 24C26.71 24 28.5 22.21 28.5 20C28.5 17.79 26.71 16 24.5 16ZM24.5 25C21.83 25 16.5 26.34 16.5 29V31C16.5 31.55 16.95 32 17.5 32H31.5C32.05 32 32.5 31.55 32.5 31V29C32.5 26.34 27.17 25 24.5 25Z"
								fill="#1F5EDD"
							/>
						</g>
						<defs>
							<clipPath id="clip0_5_97">
								{" "}
								<rect width="24" height="24" fill="white" transform="translate(12.5 12)" />
							</clipPath>
						</defs>
					</svg>

					<h3 className="uppercase text-center font-medium text-sm mt-3">სახელით და პაროლით</h3>
					<h4 className="text-text-color-secondary text-center font-normal text-sm mt-2">ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში</h4>
				</div>
				<div className="flex flex-col">
					<Input additionalClasses="mb-6" label="მომხმარებელი" type="text" placeholder="ელ.ფოსტა ან მობილური" value={emailOrMobile} onChange={(e) => setEmailOrMobile(e.target.value)} />
					<Input label="პაროლი" hint={hint} type={showPassword ? "text" : "password"} placeholder="პაროლი" value={password} onChange={(e) => setPassword(e.target.value)} />
					<Checkbox additionalClasses="mt-2" checked={showPassword} onChange={togglePasswordVisibility} label="მაჩვენე პაროლი"></Checkbox>
				</div>
				<div className="flex justify-end">
					<Button text="შესვლა" variant="primary" />
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
