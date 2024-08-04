/** @type {import('next').NextConfig} */

const nextConfig = {
    // 添加这个使得ppr可用
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
