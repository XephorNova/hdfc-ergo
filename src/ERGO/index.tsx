import React, { useEffect } from 'react';
import { Dimensions, BackHandler, Alert } from 'react-native';
// import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import useControlWebView from '../hooks/controlWebview';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function ERGO({
  ActionComponent,
  sdk_key,
  user_details,
  insurance_type,
}: {
  ActionComponent: any;
  sdk_key: string;
  user_details: string;
  insurance_type: string;
}) {
  console.log(sdk_key);
  console.log(user_details);
  const { view, setShowView } = useControlWebView();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => setShowView() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    if (!view) {
      backHandler.remove();
    }
    return () => backHandler.remove();
  }, [view]);
  if (!view) {
    return <ActionComponent onClose={() => setShowView()} />;
  } else {
    return (
      <WebView
        source={{
          uri: `https://hdfc-ergo-web.vercel.app/${insurance_type}&user_details=${user_details}&sdk_key=${sdk_key}`,
        }}
        style={{
          flex: 1,
          height: height,
          width: width,
          alignSelf: 'stretch',
        }}
      />
    );
  }
}
