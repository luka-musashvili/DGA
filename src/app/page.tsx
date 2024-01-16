import { GetServerSideProps } from "next";
import "@/app/globals.css";

// export const getServerSideProps: GetServerSideProps = async () => {
// 	return {
// 		redirect: {
// 			destination: "/users",
// 			permanent: false,
// 		},
// 	};
// };

const Home = () => {
	return "hi";
};

export default Home;
