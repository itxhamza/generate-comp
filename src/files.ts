const ReactNativeStylesFile = `import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default styles;
`;

const ReactNativeJsFile = `import React from "react";
import { View, Text } from "react-native";

// Component Styles
import styles from "./styles";

function TESTNAME(props) {
  return (
    <View style={styles.root}>
      <Text>TESTNAME</Text>
    </View>
  );
}

export { TESTNAME };
`;

const ReactJsFile = `import React from "react";

const TESTNAME = (props) => {
  return (
    <div>
      <h1>TESTNAME</h1>
    </div>
  );
};

export default TESTNAME;
`;

export { ReactJsFile, ReactNativeJsFile, ReactNativeStylesFile };
