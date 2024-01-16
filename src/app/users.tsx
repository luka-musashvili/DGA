import Link from "next/link";
import { GetServerSideProps } from "next";
import { checkServerSideAuth } from "@/util/authUtils";
import "@/app/globals.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return await checkServerSideAuth(context);
};

const users = () => {
	return (
		<>
			<div>users</div>
			<Link href={"/"}>Login</Link>
		</>
	);
};

export default users;
