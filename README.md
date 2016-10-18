# About

A gitbook plugin just for @JKOM inc. There is a big bug into default gitbook. When there is a lot of columns into a table, some columns will be hidden. So it's really bad and we should [pretty table](#how-to-pretty-table). Another thing, we want to add a edit toolbar,
so we can edit every page on github quickly.

# File Structure 

```
gitbook-plugin-jkom
    |-- assets
        |-- plugin.js           // for edit on github
        |-- style.css           // add extra css to override default style
    |-- node_modules            // nodejs dependencies
    |-- .gitignore              
    |-- config.js               // config file indicate which page should be pretty table
    |-- index.js                // entry js
    |-- package.json
    |-- README.md
```

# Feature

1. Fix column hidden bug
1. Add edit toolbar
1. Override default style to hide meaningless things
 
# How to development
In the plugin's folder, run:

```
$ npm link
```

Then in your book's folder:

```
npm link gitbook-plugin-<plugin's name>
```

# How to publish
change version into `package.json`  and run `npm publish`

# How to pretty table

In some page of many columns, we can add a `div` as a parent of `table` and add style `white-space: nowrap` to the `table` element, 
add style `overflow: auto` to the `div` element. As a result, there will be a horizonal scrollbar when there are a lot of columns.
The relative code is into `index.js > hooks > page` 
