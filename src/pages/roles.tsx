import Link from "next/link";
import { withAuth } from "@/util/withAuth";

const roles = () => {
	return (
		<>
			<div>roles</div>
			<Link href={"/"}>Login</Link>
		</>
	);
};

export default withAuth(roles);
