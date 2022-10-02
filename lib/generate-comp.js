"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFile = exports.generateComponent = void 0;
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const files_1 = require("./files");
const generateComponent = (folderName, params) => {
    let IndexFile = "";
    let StylesFile = "";
    if (params.reactNative) {
        IndexFile = files_1.ReactNativeJsFile.toString().replaceAll("TESTNAME", folderName);
        StylesFile = files_1.ReactNativeStylesFile.toString().replaceAll("TESTNAME", folderName);
    }
    if (params.reactJs) {
        IndexFile = files_1.ReactJsFile.toString().replaceAll("TESTNAME", folderName);
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
            (0, exports.saveFile)(indexFilePath, IndexFile);
        }
        if (StylesFile) {
            (0, exports.saveFile)(styleFilePath, StylesFile);
        }
        console.log(chalk.green("Component Generated Scucessful!"));
    }
};
exports.generateComponent = generateComponent;
const saveFile = (path, data) => {
    fs.writeFileSync(path, data);
};
exports.saveFile = saveFile;
