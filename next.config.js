/** @type {import('next').NextConfig} */

const buildEnv = process.env.NEXT_PUBLIC_BUILD_ENV;
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: buildEnv == 'production' ? '/asobi' : '',
};
