import * as chalk from "chalk";
import { program } from "commander";
import * as fs from "fs";
import * as path from "path";

program
  .version("0.0.1")
  .description("Generate Component For Javascript Libraries");

program
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
      } catch (err) {
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

const saveFile = (path: string, data: string) => {
  fs.writeFileSync(path, data);
};

//   @ts-ignore
program.parse(process.argv);
