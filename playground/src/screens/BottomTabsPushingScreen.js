const React = require('react');
const {View, Button, FlatList, Text} = require('react-native');
const { Navigation } = require('react-native-navigation');

const items = Array.from({ length: 100 }).map(index => ({ key: index }));

class List extends React.Component {
  renderItem = () => <Text>Hello</Text>;

  keyExtractor = (_, index) => index.toString();

  render() {
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

class BottomTabsPushingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "yellow"}}>
        <Button title="Push" onPress={this.pushScreen} />
        <List />
      </View>
    );
  }

  pushScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.BottomTabsPushedScreen',
        options: {
          bottomTabs: { visible: false, drawBehind: true }
        }
      }
    });
  }
}

module.exports = BottomTabsPushingScreen;