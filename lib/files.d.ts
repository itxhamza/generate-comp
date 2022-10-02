declare const ReactNativeStylesFile = "import { StyleSheet } from \"react-native\";\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n  },\n});\n\nexport default styles;\n";
declare const ReactNativeJsFile = "import React from \"react\";\nimport { View, Text } from \"react-native\";\n\n// Component Styles\nimport styles from \"./styles\";\n\nfunction TESTNAME(props) {\n  return (\n    <View style={styles.root}>\n      <Text>TESTNAME</Text>\n    </View>\n  );\n}\n\nexport { TESTNAME };\n";
declare const ReactJsFile = "import React from \"react\";\n\nconst TESTNAME = (props) => {\n  return (\n    <div>\n      <h1>TESTNAME</h1>\n    </div>\n  );\n};\n\nexport default TESTNAME;\n";
export { ReactJsFile, ReactNativeJsFile, ReactNativeStylesFile };
