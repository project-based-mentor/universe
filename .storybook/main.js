module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../apps/*/frontend/src/**/*.stories.mdx",
        "../apps/*/frontend/src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-storysource",
        {
            name: "@storybook/addon-docs",
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ]
}
