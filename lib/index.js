#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const commander_1 = require("commander");
const generate_comp_1 = require("./generate-comp");
// @ts-ignore
const gitPullOrClone = require("git-pull-or-clone");
commander_1.program
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
const GenerateComp = commander_1.program.argument("<folderName>", "Folder Name For Generating Component");
options.map((item) => {
    GenerateComp.option(item.name, item.desc);
});
GenerateComp.action(async (folderName, params) => {
    if (params.reactNative || params.reactJs) {
        (0, generate_comp_1.generateComponent)(folderName, params);
    }
    if (params.firebaseHelperFileWeb) {
        gitPullOrClone("https://github.com/itxhamza/firebase-helper-file.git", `./${folderName}`, (err) => {
            console.log(chalk.green("Helper Files Generated Scucessful!"));
        });
    }
    if (Object.keys(params).length == 0) {
        console.log(chalk.red("Invalid Option"));
    }
});
//   @ts-ignore
commander_1.program.parse(process.argv);
