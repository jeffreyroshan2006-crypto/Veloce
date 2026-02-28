/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	distDir: 'dist',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	allowedDevOrigins: ["*.theopenbuilder.com"],
	reactStrictMode: true,
	experimental: {
		optimizeCss: true,
	},
};

export default nextConfig;
