"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const commander_1 = require("commander");
const fs = require("fs");
const path = require("path");
commander_1.program
    .version("0.0.1")
    .description("Generate Component For Javascript Libraries");
commander_1.program
    .argument("<folderName>", "Folder Name For Generating Component")
    .option("-rn, --react-native", "Generate React Native Component")
    .option("-rj, --react-js", "Generate React Js Component")
    .action(async (folderName, params) => {
    let IndexFile = "";
    let StylesFile = "";
    if (params.reactNative) {
        IndexFile = fs.readFileSync("./src/react-native/index.js").toString();
        StylesFile = fs.readFileSync("./src/react-native/styles.js").toString();
    }
    if (params.reactNative) {
        IndexFile = fs
            .readFileSync("./src/react-native/index.js")
            .toString()
            .replaceAll("TESTNAME", folderName);
        StylesFile = fs.readFileSync("./src/react-native/styles.js").toString();
    }
    if (params.reactJs) {
        IndexFile = fs
            .readFileSync("./src/react-js/index.js")
            .toString()
            .replaceAll("TESTNAME", folderName);
    }
    if (IndexFile || StylesFile) {
        try {
            fs.mkdirSync(path.join(process.cwd(), folderName));
        }
        catch (err) {
            console.log(chalk.red("Folder Already Exists"));
            return;
        }
        const indexFilePath = path.join(process.cwd(), folderName, "index.js");
        const styleFilePath = path.join(process.cwd(), folderName, "styles.js");
        if (IndexFile) {
            saveFile(indexFilePath, IndexFile);
        }
        if (StylesFile) {
            saveFile(styleFilePath, StylesFile);
        }
    }
});
const saveFile = (path, data) => {
    fs.writeFileSync(path, data);
};
//   @ts-ignore
commander_1.program.parse(process.argv);
