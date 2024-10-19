/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      B2_KEY_ID: process.env.B2_KEY_ID,
      B2_APPLICATION_KEY: process.env.B2_APPLICATION_KEY,
      B2_BUCKET_NAME: process.env.B2_BUCKET_NAME,
      B2_API_URL: process.env.B2_API_URL,
    },
  };

  export default nextConfig;
