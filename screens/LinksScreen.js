import React from 'react';
import { Text, View, WebView } from 'react-native';
import { TabBar, TabViewAnimated } from 'react-native-tab-view';

class Registered extends React.Component {
  render() {
    return (
      <Text>Test</Text>
    );
  }
}
class Events extends React.Component {
  render() {
    return (
        <WebView
        source={{html:'<iframe width="600" height="400" src="<iframe width="600" height="400" src="https://data.gov.sg/dataset/grassroots-organisations/resource/465ec2fa-b59d-42ab-ae99-fcaea59ba292/view/91972420-8942-4e40-8e6e-2dd437941e9d" frameBorder="0"> </iframe>" frameBorder="0"> </iframe>'}}
          javaScriptEnabledAndroid={true}
          domStorageEnabled={true}
          //startInLoadingState={true}
          scalesPageToFit={true}/>
      );
    }
  }

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 2,
      routes: [
        { key: '1', title: 'REGISTERED' },
        { key: '2', title: 'EVENTS' },
      ]
    };
  }

  componentDidMount () {
    ///this.props.businessRequest(this.prop.id)
  }

  _handleChangeTab = (index) => {
    this.setState({ index })
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />
  };

  _renderScene = ({ route }) => {
    console.log('route.key: ', route.key)
    switch (route.key) {
      case '1':
        return <Registered business={this.props.business} />
      case '2':
        return <Events business={this.props.business} />
      default:
        return null
    }
  };

  render () {
    console.log(this.state)
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'blue'
      }}>
        <TabViewAnimated
          style={{
            flex: 1,
            backgroundColor: 'white'
          }}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </View>
    )
  }
}
