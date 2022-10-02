import * as fs from "fs";
import * as path from "path";
import * as chalk from "chalk";
import { ReactJsFile, ReactNativeJsFile, ReactNativeStylesFile } from "./files";

export const generateComponent = (folderName: string, params: any) => {
  let IndexFile = "";
  let StylesFile = "";
  if (params.reactNative) {
    IndexFile = ReactNativeJsFile.toString().replaceAll("TESTNAME", folderName);
    StylesFile = ReactNativeStylesFile.toString().replaceAll(
      "TESTNAME",
      folderName
    );
  }

  if (params.reactJs) {
    IndexFile = ReactJsFile.toString().replaceAll("TESTNAME", folderName);
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

    console.log(chalk.green("Component Generated Scucessful!"));
  }
};

export const saveFile = (path: string, data: string) => {
  fs.writeFileSync(path, data);
};
