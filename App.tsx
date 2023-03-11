/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <FastImage
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://d268ybitbos3rf.cloudfront.net/retailers/Amazon-landscape.png?r=1657776467',
            }}
          />
          <FastImage
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://assets-eu-ew1-prod.payzilch.com/retailers/Amazon-landscape.png?r=1657776467',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
