const webpackConfig = require("../webpack.config");

module.exports = {
	core: {
		builder: 'webpack5',
	},

	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss"
	],

	framework: "@storybook/react",

	"webpackFinal": async (config, { configType }) => {
		config.module.rules = config.module.rules.filter(
			f => !f.test || f.test.toString() !== '/\\.css$/'
		).concat(webpackConfig.module.rules);

		config.resolve.alias = {
			...config.resolve.alias,
			...webpackConfig.resolve.alias,
		};

		return config;
	},
};
