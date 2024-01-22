import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [emailOrMobile, setEmailOrMobile] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [emailOrMobileError, setEmailOrMobileError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [formError, setFormError] = useState("");

	const router = useRouter();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (name === "emailOrMobile") {
			setEmailOrMobile(value);
			setEmailOrMobileError("");
		} else if (name === "password") {
			setPassword(value);
			setPasswordError("");
		}

		if (formError) {
			setFormError("");
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setEmailOrMobileError("");
		setPasswordError("");
		setFormError("");

		let isValid = true;
		if (!emailOrMobile) {
			setEmailOrMobileError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!password) {
			setPasswordError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}

		if (!isValid) {
			return;
		}

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

		try {
			const response = await fetch("http://localhost:3000/api/v1/sign-in", requestOptions);
			const result = await response.json();
			if (result.success) {
				Cookies.set("token", result.data.token, { expires: 5 / 24 });
				router.push("/users");
			} else {
				setFormError(result.error);
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<div className="flex-col flexCenter p-2">
			<h2 className="mt-20 max-md:my-12 uppercase text-base font-medium text-center text-black">ავტორიზაცია</h2>
			<form onSubmit={handleSubmit} className="mt-6 p-6 flex flex-col gap-6 border-border-color border rounded-2xl" style={{ maxWidth: "451px" }}>
				<div className="flexCenter flex-col">
					<Image className="w-auto h-auto" width={0} height={0} src={"/images/login/person_outline.svg"} alt="person_outline" />
					<h3 className="uppercase text-center font-medium text-sm mt-3">სახელით და პაროლით</h3>
					<h4 className="text-text-color-secondary text-center font-normal text-sm mt-2">ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში</h4>
				</div>
				<div className="flex flex-col">
					<Input
						name="emailOrMobile"
						hint={emailOrMobileError}
						label="მომხმარებელი"
						type="text"
						placeholder="ელ.ფოსტა ან მობილური"
						value={emailOrMobile}
						onChange={handleChange}
						additionalInputClasses="h-[54px] px-4 py-3.5 text-text-color-secondary w-full"
					/>
					<Input
						name="password"
						additionalClasses="mt-6"
						label="პაროლი"
						hint={passwordError}
						type={showPassword ? "text" : "password"}
						placeholder="პაროლი"
						value={password}
						onChange={handleChange}
						additionalInputClasses="h-[54px] px-4 py-3.5 text-text-color-secondary w-full"
					/>
					{formError && (
						<div className="input-hint flexStart gap-3 text-text-color-error mt-1.5 font-normal text-sm">
							<Image className="w-auto h-auto" width={0} height={0} src={"/images/login/error.svg"} alt="error" />
							{formError}
						</div>
					)}{" "}
					<Checkbox additionalClasses="mt-2" checked={showPassword} onChange={togglePasswordVisibility} label="მაჩვენე პაროლი" />
				</div>
				<div className="flex justify-end">
					<Button text="შესვლა" variant="primary" customClasses="py-[13px] px-5" />
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
