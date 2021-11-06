const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://hydeparkwinterwonderland.com/faqs/").then(
  (response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      const individualBlock = $("div.row");
      individualBlock.each(function (idx, el) {
        const question = $(el).children("div").children("button");

        console.log("Question => ", $(question).text());
        console.log("\n");
      });
    }
  },
  (error) => console.log(err)
);
