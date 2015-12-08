var React = require('react-native');
var Main = require('./app/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var eventFinderApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Events',
          component: Main,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

AppRegistry.registerComponent('eventFinderApp', () => eventFinderApp);
