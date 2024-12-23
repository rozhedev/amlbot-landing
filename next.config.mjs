/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // Важно для статического экспорта
    },
};

export default nextConfig;
