#!/usr/bin/env node

const yargs = require("yargs");
const {
  createComponent,
  createPage,
  createRedux,
  createConfig,
  createReducer,
} = require("./create");
const {
  deleteComponents,
  deletePages,
  deleteRedux,
  deleteConfig,
} = require("./delete");
const { combineComponents, combinePages } = require("./combine");
const { rootChecker, languageChecker, loadConfig } = require("./utils");

yargs
  .scriptName("rhc")
  .usage("$0 <command> [options]")
  .command(
    "create [name]",
    "create components, pages and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to create components",
        })
        .array("-c")
        .positional("-p", {
          alias: "--page",
          type: "string",
          describe: "to create pages",
        })
        .array("-p")
        .positional("-r", {
          alias: "--redux",
          type: "boolean",
          describe: "to create redux implementation",
        })
        .array("--reducer")
        .positional("--reducer", {
          type: "string",
          describe: "To create redux reducer implementation",
        })
        .positional("--config", {
          type: "boolean",
          describe: "to create config file",
        })
        .option("js", {
          alias: "javascript",
          default: true,
          describe: "to create files in javascript",
        })
        .option("ts", {
          alias: "typescript",
          describe: "to create files in typescript",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "to create files in a specific folder",
        })
        .option("t", {
          alias: "template",
          type: "string",
          default: "",
          describe: "to create files with user defined templates",
        });
    },
    (argv) => {
      if (rootChecker()) {
        let {
          component,
          page,
          redux,
          reducer,
          config,
          js,
          ts,
          folder,
          template,
        } = argv;
        try {
          loadConfig();
        } catch (e) {}
        // check if project is written in typescript
        ts = languageChecker() === "ts" ? true : ts;
        if (component) {
          component.forEach((c) =>
            createComponent(c, js, ts, folder, template)
          );
        } else if (page) {
          page.forEach((p) => createPage(p, js, ts, folder, template));
        } else if (redux) {
          createRedux(js, ts);
        } else if (reducer) {
          reducer.forEach((r) => createReducer(r, js, ts));
        } else if (config) {
          createConfig();
        } else {
          console.log("Check usage: rhc create --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .command(
    "delete [name]",
    "delete components, pages and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to delete components",
        })
        .array("-c")
        .positional("-p", {
          alias: "--page",
          type: "string",
          describe: "to delete pages",
        })
        .array("-p")
        .positional("-r", {
          alias: "--redux",
          type: "boolean",
          describe: "to delete redux implementation",
        })
        .positional("--config", {
          type: "boolean",
          describe: "to delete config file",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "to delete files in a specific folder",
        });
    },
    (argv) => {
      if (rootChecker()) {
        const { component, page, redux, config, folder } = argv;
        try {
          loadConfig();
        } catch (e) {}
        if (component) {
          deleteComponents(component, folder);
        } else if (page) {
          deletePages(page, folder);
        } else if (redux) {
          deleteRedux();
        } else if (config) {
          deleteConfig();
        } else {
          console.log("Check usage: rhc delete --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .command(
    "combine [name]",
    "combine components or pages in a specific folder",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--components",
          type: "string",
          array: true,
          describe: "components to be combined in a folder",
        })
        .array("-c")
        .positional("-p", {
          alias: "--pages",
          type: "string",
          array: true,
          describe: "pages to be combined in a folder",
        })
        .array("-p")
        .option("f", {
          alias: "folder",
          type: "string",
          describe: "name or path of folder that combines components or pages",
          demandOption: "this option is mandatory" | true,
        });
    },
    (argv) => {
      if (rootChecker()) {
        const { components, pages, folder } = argv;
        try {
          loadConfig();
        } catch (e) {}
        if (components) {
          combineComponents(components, folder);
        } else if (pages) {
          combinePages(pages, folder);
        } else {
          console.log("Check usage: rhc combine --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .help().argv;
