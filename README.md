# hdfc-ergo

hdfc ergo integration sdk

- this Project is solely made for demo purpose as an POC for to constraints and challenges during integration

# Get Started

##

```sh
npm i https://github.com/user_name/hdfc-ergo.git
```

## Usage

```js
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
        user_details="<user-details>"
        insurance_type
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
```

- `ActionComponent` is Mandatory component that needs to be passed which will trigger the Webview for the form
- `user_details` will be different for different_type of insurance.
- `insurance_type` if insurance type is not provided it will initiate the journey from listing all type of insurance.
- All the APIs calls from SDK to Ergo Backend will be encrypted through RSA encryption and VAPT will be done for the same.
- All the updates will be taken care on HDFC Ergo side. Since SDK internally uses Webview.
- If in anycase SDK is updated PayZapp will need to reinstall the latest version. But we will make sure there will be backward compatibility with Depreciation warnings

## For Running the Sample App

```sh
git clone https://github.com/user_name/hdfc-ergo.git

cd hdfc-ergo

yarn

yarn run android

# or

yarn run ios

```
