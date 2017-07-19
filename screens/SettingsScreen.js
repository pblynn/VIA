import React from 'react';
import {
  WebView,
  StyleSheet,
  View,
} from 'react-native';


export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Voluntary Welfare Organisations',
      backgroundColor: '#32a699',
      borderBottomColor: '#32a699',
      titleStyle:{color:'#fefefe',fontFamily:'gochi',fontSize:28},
      tintColor: '#fefefe',
    },
  };

  render() {
    return (
        <WebView
        source={{html:'<iframe width="600" height="600" src="https://data.gov.sg/dataset/voluntary-welfare-orgs/resource/8a52d0e8-f702-423a-981e-d56d79573839/view/3fbb60c7-3603-4cb7-ba78-4cfcc58199b9" frameBorder="0"> </iframe>'}}
        javaScriptEnabledAndroid={true}
        domStorageEnabled={true}
        //startInLoadingState={true}
        scalesPageToFit={true}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
