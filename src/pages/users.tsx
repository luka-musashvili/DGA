import Link from "next/link";
import { withAuth } from "@/util/withAuth";

const users = () => {
	return (
		<>
			<div>users</div>
			<Link href={"/"}>Login</Link>
		</>
	);
};

export default withAuth(users);
