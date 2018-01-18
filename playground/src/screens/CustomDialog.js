const React = require('react');
const { PureComponent } = require('react');

const { Text, Button, Platform } = require('react-native');
const Navigation = require('react-native-navigation');

const testIDs = require('../testIDs');

const Interactable = require('react-native-interactable');

class CustomDialog extends PureComponent {
  render() {
    return (
      <Interactable.View
        ref={(ref) => this.setState({ instance: ref })}
        style={styles.root}
        verticalOnly={true}
        initialPosition={{ x: 0, y: 500 }}
        snapPoints={[{ y: 0 }, { y: 500 }, { y: 600, id: 'dismissId' }]}
        onSnap={(e) => this.onDrawerSnap(e)}
      >
        <Text style={styles.h1} testID={testIDs.DIALOG_HEADER}>Test view</Text>
        <Button title="OK" testID={testIDs.OK_BUTTON} onPress={() => this.onCLickOk()} />
      </Interactable.View>
    );
  }

  didAppear() {
    this.state.instance.snapTo({ index: 1 });
  }

  didDisappear() {
    if (Platform.OS === 'android') {
      alert('Overlay disappeared');
    }
  }

  onDrawerSnap(event) {
    if (event.nativeEvent.id === 'dismissId') {
      Navigation.dismissOverlay(this.props.componentId);
    }
  }

  onCLickOk() {
    Navigation.dismissOverlay(this.props.componentId);
  }
}

const styles = {
  root: {
    backgroundColor: 'green',
    alignItems: 'center',
    height: 600,
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  h2: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  }
};

module.exports = CustomDialog;