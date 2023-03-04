module.exports = {
  "stories": [
    { directory: '../src/foundations', files: "*.stories.@(js|jsx|ts|tsx)", titlePrefix: 'foundations' }
  ],

  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm", '@storybook/addon-a11y',],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\.css$/i,
        use: [
          {
            loader: "postcss-loader",
            options: { implementation: require.resolve("postcss") },
          },
        ],
        include: path.resolve(__dirname, "../"),
      });
      // Return the altered config
      return config;
    },
};