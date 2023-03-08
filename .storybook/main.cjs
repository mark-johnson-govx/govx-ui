module.exports = {
  stories: [
    {
      directory: "../src/stories/foundations",
      files: "*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "foundations",
    },
    {
      directory: "../src/stories/govx.com",
      files: "*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "GovX.com",
    },
    {
      directory: "../src/stories/auth",
      files: "*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "Auth - GovX ID",
    },
    {
      directory: "../src/stories/admin",
      files: "*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "Admin",
    },
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
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
