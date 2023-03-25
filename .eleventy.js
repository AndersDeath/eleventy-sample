const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: "/eleventy-sample/"
    };
};