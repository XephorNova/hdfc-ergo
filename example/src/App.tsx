import * as React from 'react';

import { StyleSheet, type GestureResponderEvent } from 'react-native';
import { SafeAreaView, Button } from 'react-native';
import { TestComponent, useControlWebView } from 'hdfc-ergo';

const OpenCloseButton = ({ onClose }: { onClose: Function }) => {
  return <Button title="Open Fam" onPress={() => onClose()} />;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      <TestComponent
        ActionComponent={({ onClose }: { onClose: Function }) => (
          <OpenCloseButton onClose={onClose} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
