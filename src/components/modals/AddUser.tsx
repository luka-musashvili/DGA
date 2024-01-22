import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import Header from "./ui/Header";
import Hint from "./ui/Hint";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface AddUserProps {
	onClose: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ onClose }) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [agency, setAgency] = useState("");
	const [position, setPosition] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const [nameError, setNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [agencyError, setAgencyError] = useState("");
	const [positionError, setPositionError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, files } = e.target;
		switch (name) {
			case "name":
				setName(value);
				setNameError("");
				break;
			case "lastName":
				setLastName(value);
				setLastNameError("");
				break;
			case "agency":
				setAgency(value);
				setAgencyError("");
				break;
			case "position":
				setPosition(value);
				setPositionError("");
				break;
			case "email":
				setEmail(value);
				setEmailError("");
				break;
			case "phone":
				setPhone(value);
				setPhoneError("");
				break;
			default:
				break;
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		} else {
			setFile(null);
		}
	};

	const validateForm = () => {
		let isValid = true;

		setNameError("");
		setLastNameError("");
		setAgencyError("");
		setPositionError("");
		setEmailError("");
		setPhoneError("");

		if (!name) {
			setNameError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!lastName) {
			setLastNameError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!agency) {
			setAgencyError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!position) {
			setPositionError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!email) {
			setEmailError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}
		if (!phone) {
			setPhoneError("ამ ველის შევსება აუცილებელია");
			isValid = false;
		}

		return isValid;
	};

	const submitForm = async () => {
		if (!validateForm()) {
			return;
		}

		const formData = new FormData();
		formData.append("name", name);
		formData.append("lastName", lastName);
		formData.append("agency", agency);
		formData.append("position", position);
		formData.append("email", email);
		formData.append("phone", phone);
		if (file) formData.append("file", file);

		let token = Cookies.get("token");
		if (!token) {
			router.push("/login");
		}
		console.log("token");
		console.log(token);

		const requestOptions = {
			method: "POST",
			body: formData,
			headers: {
				Authorization: "Bearer " + token,
			},
		};

		try {
			const response = await fetch("http://localhost:3000/api/v1/users/add", requestOptions);
			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.error("error", error);
		}
	};

	const handleSubmit = () => {
		submitForm();
	};

	return (
		<div>
			<Header text="მომხმარებლის დამატება" onClick={onClose} />
			<form className="p-6 flex flex-col gap-4">
				<div className="flex justify-between items-start gap-6">
					<div className="flex flex-col">
						<Input
							label="სახელი"
							name="name"
							type="text"
							placeholder="ჩაწერეთ სახელი"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={name}
							onChange={handleChange}
							hint={nameError}
						/>
					</div>
					<div className="flex flex-col">
						<Input
							label="გვარი"
							name="lastName"
							type="text"
							placeholder="ჩაწერეთ გვარი"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={lastName}
							onChange={handleChange}
							hint={lastNameError}
						/>
					</div>
				</div>

				<div className="flex justify-between items-start gap-6">
					<div className="flex flex-col">
						<Input
							label="უწყება"
							name="agency"
							type="text"
							placeholder="ჩაწერეთ უწყება"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={agency}
							onChange={handleChange}
							hint={agencyError}
						/>
					</div>
					<div className="flex flex-col">
						<Input
							label="თანამდებობა"
							name="position"
							type="text"
							placeholder="ჩაწერეთ თანამდებობა"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={position}
							onChange={handleChange}
							hint={positionError}
						/>
					</div>
				</div>

				<div className="flex justify-between items-start gap-6">
					<div className="flex flex-col">
						<Input
							label="ელ. ფოსტა"
							name="email"
							type="email"
							placeholder="ჩაწერეთ ელ. ფოსტა"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={email}
							onChange={handleChange}
							hint={emailError}
						/>
					</div>
					<div className="flex flex-col">
						<Input
							label="მობილური"
							name="phone"
							type="tel"
							placeholder="ჩაწერეთ მობილური"
							additionalInputClasses="w-[366px] h-[54px] px-[14px] py-4"
							value={phone}
							onChange={handleChange}
							hint={phoneError}
						/>
					</div>
				</div>

				<div className="flex justify-between items-start gap-6">
					{/* როლები */}
					<div className="flex flex-col">
						<label htmlFor="fileUpload" className="uppercase text-sm font-normal mb-1">
							სურათი
						</label>
						<input id="fileUpload" type="file" onChange={handleFileChange} className="w-auto h-auto" />
					</div>
				</div>

				<Hint text="ახალი მომხმარებლის დასამატებლად ყველა ველის შევსება სავალდებულოა." variant="grey" />
			</form>
			<footer className="p-4 flexStart flex-row-reverse gap-6 border-t">
				<Button variant="primary" text="შენახვა" customClasses="px-5 py-[13px]" onClick={handleSubmit} />
				<Checkbox label="მომდევნოს დამატება" />
				{/* ამ ფუნცქიას ვერ მივხვდი, ალბათ სამომავლოდ bulk upload? */}
			</footer>
		</div>
	);
};

export default AddUser;
