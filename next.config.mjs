/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // Don't change (Uses for static export)
    },
};

export default nextConfig;
