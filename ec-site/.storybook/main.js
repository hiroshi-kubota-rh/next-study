import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { resolve } from 'path';


export default {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "staticDirs": ["public"],
  "babel": async options => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ]
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: resolve(__dirname, '../tsconfig.json')
      }),
    ];
    return config
  },
  // "framework": "@storybook/react",
  // "core": {
  //   "builder": "@storybook/builder-webpack5"
  // },
  
}