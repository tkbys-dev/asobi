/** @type {import('next').NextConfig} */

const buildEnv = process.env.NEXT_PUBLIC_BUILD_ENV;
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: buildEnv == 'production' ? '/' : '',
  build: {
    extend(config, ctx) {
      let path = require('path');
      config.resolve.alias['@/components'] = path.join(
        __dirname,
        'src/components'
      );
    },
  },
};
