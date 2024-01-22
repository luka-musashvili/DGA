import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
	let secret = "your_secret_here";
	let token = cookies().get("token")?.value;
	if (!token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	try {
		await jwtVerify(token, new TextEncoder().encode(secret));
	} catch (error) {
		console.log(error);
		return NextResponse.redirect(new URL("/login", request.url));
	}
	// verifyToken-ით მინდოდა ვალიდაცია, თუმცა edge runtimeისთვის მეტისმეტად მძიმე ფუნცქიონალია crypto და არ ასაპორტებს next.js, ამიტომ სხვა ბიბლიოთეკა გამოვიყენე
	// const result = verifyToken(token);
	// console.log(result);
	// if (!result) {
	// 	return NextResponse.redirect(new URL("/login", request.url));
	// }
}

export const config = {
	matcher: ["/", "/users", "/roles", "/tabs"],
};
