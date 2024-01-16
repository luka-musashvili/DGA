import Link from "next/link";
import { GetServerSideProps } from "next";
import { checkServerSideAuth } from "@/util/authUtils";
import "@/app/globals.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return await checkServerSideAuth(context);
};

const roles = () => {
	return (
		<>
			<div>roles</div>
			<Link href={"/"}>Login</Link>
		</>
	);
};

export default roles;
