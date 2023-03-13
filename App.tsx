/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    FastImage.clearDiskCache();
    FastImage.clearMemoryCache();
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
        <ScrollView
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button onPress={onPress} title="Clear cache" />
          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>non proxied</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://mbamps.com/images/cat-1.jpg',
              }}
            />
          </View>
          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H3 - 1</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.mbamps.com/images/cat-1.jpg',
              }}
            />
          </View>
          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H3 - 2</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.mbamps.com/images/cat-2.jpg',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H2 - 1</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.mbamps.xyz/images/cat-1.jpg',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H2 - 2</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.mbamps.xyz/images/cat-2.jpg',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H1 - 1</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.gagaguilho.fun/images/cat-1.jpg',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>H1 - 2</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.gagaguilho.fun/images/cat-2.jpg',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>Zilch Cloudfront</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://d268ybitbos3rf.cloudfront.net/retailers/Amazon-landscape.png?r=1657776467',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>Zilch Cloudflare</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://assets-eu-ew1-prod.payzilch.com/retailers/Amazon-landscape.png?r=1657776467',
              }}
            />
          </View>

          <View style={{borderColor: 'red', borderWidth: 1}}>
            <Text>Zilch Cloudflare New URL</Text>
            <FastImage
              style={{width: 100, height: 100}}
              source={{
                uri: 'https://www.mbamps.com/images/amazon-landscape.png',
              }}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
