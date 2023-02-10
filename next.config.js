/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    formats:['image/avif','image/webp'],
    domains:['res.cloudinary.com']
  }
}
//NOTE:Aqui se configura si deseas que las imagenes trabajen en otro formato AVI
module.exports = nextConfig
