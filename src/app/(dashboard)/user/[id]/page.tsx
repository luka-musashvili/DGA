import { cookies } from "next/headers";
import UserPage from "@/components/User";
import { ApiResponse, transformUserData } from "@/types/types";

interface Params {
	id: string;
}

interface UserPageWrapperProps {
	params: Params;
}

const fetchingUser = async ({ params }: UserPageWrapperProps) => {
	let token = cookies().get("token")?.value;
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer " + token);

	const url = `http://localhost:3000/api/v1/users/${params.id}`;

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
	};

	try {
		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result: ApiResponse = await response.json();
		const userData = transformUserData(result.data);
		return <UserPage data={userData} />;
	} catch (error) {
		return error;
	}
};

export default fetchingUser;
