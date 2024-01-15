import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";

type Props = {
	children: ReactNode;
};

export function withAuth(Component: React.FC<Props>) {
	return function ProtectedPage(props: Props) {
		const token: string | undefined = Cookies.get("token");
		const router = useRouter();

		useEffect(() => {
			if (!token) {
				router.push("/login");
			}
		}, [token, router]);

		return <Component {...props} />;
	};
}
