import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { StreamContext, StatusUpdateForm } from 'react-native-activity-feed';

class StatusUpdateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEW POST',
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: 15 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={require('../images/icons/close.png')}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 15 }}
        onPress={navigation.getParam('submitFunc')}
      >
        <Text style={{ color: '#007AFF', fontSize: 17 }}>Send</Text>
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  render() {
    return (
      <StreamContext.Consumer>
        {(appCtx) => (
          <StatusUpdateForm
            {...this.props}
            {...appCtx}
            registerSubmit={(submitFunc) => {
              this.props.navigation.setParams({ submitFunc });
            }}
          />
        )}
      </StreamContext.Consumer>
    );
  }
}

export default StatusUpdateScreen;