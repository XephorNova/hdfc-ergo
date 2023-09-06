import React, { useEffect } from 'react';
import { Dimensions, BackHandler, Alert } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
// import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import useControlWebView from '../hooks/controlWebview';
import type { BackHandlerStatic } from 'react-native/Libraries/Utilities/BackHandler';
import type { NativeEventSubscription } from 'react-native';

export default function TestComponent({
  ActionComponent,
}: {
  ActionComponent: any;
}) {
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
          uri: 'https://pehchaan.hdfcergo.com',
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
