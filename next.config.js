/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 添加中间件配置
  middleware: {
    matcher: '/search', // 匹配搜索请求路径
  },
}

module.exports = nextConfig
