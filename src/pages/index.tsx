import { GetServerSideProps } from "next";
import { withAuth } from "@/util/withAuth";

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: "/users",
			permanent: false,
		},
	};
};

const Page = () => {
	return null;
};

export default withAuth(Page);
