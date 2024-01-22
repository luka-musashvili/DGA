import { axiosInstance } from "../../../../../config/axios.config";
import { verifyPassword, generateToken } from "@/util/crypto.util";
import { response } from "@/util/response.util";

export async function POST(request: Request) {
	const { username, password } = await request.json();

	try {
		const user = await axiosInstance.get(`users?email=${username}`);
		// პირველ რიგში ვამოწმებ არსებობს თუ არა ბაზაში მომხმარებელი, რათა რელევანტური ერორი დავურენდერო ფრონტზე
		if (!user.data[0]) {
			return new Response(JSON.stringify({ success: false, error: "მომხმარებელი არ არსებობს" }), {
				headers: { "content-type": "application/json" },
			});
		}
		// admin userს არ აქვს ჰეშირებული პაროლი, ამიტომ მისთვის სხვანაირი ვალიდაცია გავწერე
		let match;
		if (username == "superadmin@gmail.com") {
			match = password === user.data[0].password;
			console.log("admin -" + match);
		} else {
			match = await verifyPassword(password, user.data[0].password);
			console.log("not admin -" + match);
		}
		if (match) {
			const token = generateToken(user.data[0]);
			const permissions = await axiosInstance.get("permissions");
			const roles = await axiosInstance.get("roles");
			roles.data.forEach((role: any) => {
				role.permissions.users = permissions?.data.users.filter((permission: any) => role?.permissions?.users?.includes(permission.id));
			});
			roles.data.forEach((role: any) => {
				role.permissions.tabs = permissions?.data?.tabs?.filter((permission: any) => role?.permissions?.tabs?.includes(permission.id));
			});
			roles.data.forEach((role: any) => {
				role.permissions.roles = permissions.data.roles.filter((permission: any) => role?.permissions?.roles?.includes(permission.id));
			});
			user.data.forEach((user: any) => {
				user.role = roles?.data?.find((role: any) => user?.role == role.id);
			});
			delete user.data[0].password;
			return response("", true, 200, { token, user: user.data[0] });
		} else {
			return new Response(JSON.stringify({ success: false, error: "პაროლი არასწორია" }), {
				headers: { "content-type": "application/json" },
			});
		}
	} catch (e: any) {
		return new Response(JSON.stringify({ success: false, error: e.message }), {
			status: 500,
			headers: { "content-type": "application/json" },
		});
	}
}
