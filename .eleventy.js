const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    eleventyConfig.setLibrary('md', markdownLib)

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: "/eleventy-sample/"
    };
};