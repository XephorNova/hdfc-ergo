import * as React from 'react';

import { StyleSheet } from 'react-native';
import { SafeAreaView, Button } from 'react-native';
import { ERGO } from 'hdfc-ergo';

const OpenCloseButton = ({ onClose }: { onClose: Function }) => {
  return <Button title="Open Fam" onPress={() => onClose()} />;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      <ERGO
        ActionComponent={({ onClose }: { onClose: Function }) => (
          <OpenCloseButton onClose={onClose} />
        )}
        sdk_key="<your-sdk-key"
        insurance_type="<type_of_insurance>"
        user_details="<user-details>"
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
