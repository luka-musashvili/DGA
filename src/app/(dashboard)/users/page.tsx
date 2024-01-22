import { cookies } from "next/headers";
import Users from "@/components/Users";
import { ApiResponse, transformUserData } from "@/types/types"; // Update the path to where types.ts is located

const fetchingUsers = async () => {
	let token = cookies().get("token")?.value;
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer " + token);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
	};

	try {
		const response = await fetch("http://localhost:3000/api/v1/users", requestOptions);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result: ApiResponse = await response.json();
		const users = transformUserData(result.data);
		return <Users data={users} />;
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

export default fetchingUsers;
