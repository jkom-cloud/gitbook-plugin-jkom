const config = require("./config");
module.exports = {
  hooks: {
    // Called after parsing the book, before generating output and pages. Arguments: None
    init: function () {
      // console.log('** I am from init func');
    },
    // Called after generating the pages, before copying assets, cover, .... Arguments: None
    finish: function () {
      // console.log('** I am from finish');
    },
    // Called after everything else. Arguments: None
    "finish:before": function () {
      // console.log('** I am from finish:before');
    },

    // Called before running the templating engine on the page. Arguments: Page Obj
    /**
     {
         // Parser named
         "type": "markdown",

         // File Path relative to book root
         "path": "page.md",

         // Absolute file path
         "rawpath": "/usr/...",

         // Title of the page in the SUMMARY
         "title": "",

         // Content of the page
         // Markdown/Asciidoc in "page:before"
         // HTML in "page"
         "content": "# Hello"
     }
     */
    page: function (page) {
      // pretty table
      const tablesShouldbePretty = config.prettyTableDocNames;
      if (tablesShouldbePretty.indexOf(page.title) !== -1) {
        page.content = page.content.replace('<table>', '<div class="pretty-table"><table>')
          .replace('</table>', '</table></div>');
      }
      return page;
    },
    "page:before": function (page) {
      return page;
    }
  },

  blocks: {
    tag1: {
      process: function (block) {
        console.log("block", block);
        return '<h1>' + block.kwargs.name + '</h1>';
      }
    }
  },

  filters: {
    "hello": function (name) {
      return 'Hello ' + name;
    }
  },
  book: {
    assets: "./assets",
    js: ["plugin.js"],
    css: [
      'style.css'
    ]
  }
};
