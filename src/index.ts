#!/usr/bin/env node
import * as chalk from "chalk";
import { program } from "commander";
import { generateComponent, saveFile } from "./generate-comp";
// @ts-ignore
import * as gitPullOrClone from "git-pull-or-clone";

program
  .version("0.0.1")
  .description("Generate Component For Javascript Libraries");

const options = [
  { name: "-rn, --react-native", desc: "Generate React Native Component" },
  { name: "-rj, --react-js", desc: "Generate React Js Component" },
  {
    name: "--firebase-helper-file-web",
    desc: "Generate Firebase Helper File For Web",
  },
  {
    name: "--firebase-helper-file-native",
    desc: "Generate Firebase Helper File For React Native",
  },
];

const GenerateComp = program.argument(
  "<folderName>",
  "Folder Name For Generating Component"
);

options.map((item) => {
  GenerateComp.option(item.name, item.desc);
});

GenerateComp.action(async (folderName, params) => {
  if (params.reactNative || params.reactJs) {
    generateComponent(folderName, params);
  }

  if (params.firebaseHelperFileWeb) {
    gitPullOrClone(
      "https://github.com/itxhamza/firebase-helper-file.git",
      `./${folderName}`,
      (err: any) => {
        console.log(chalk.green("Helper Files Generated Scucessful!"));
      }
    );
  }

  if (Object.keys(params).length == 0) {
    console.log(chalk.red("Invalid Option"));
  }
});

//   @ts-ignore
program.parse(process.argv);
