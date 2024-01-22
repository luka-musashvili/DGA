/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/users",
				permanent: false,
			},
		];
	},
	images: {
		domains: ["www.kasandbox.org", "http://localhost:3000/"], //სატესტოდ
	},
};

module.exports = nextConfig;
