module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk"
  };
};
