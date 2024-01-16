import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {};

export async function checkServerSideAuth<Q extends ParsedUrlQuery>(context: GetServerSidePropsContext<Q>): Promise<GetServerSidePropsResult<Props>> {
	const token = context.req.cookies.token;

	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return { props: {} };
}
