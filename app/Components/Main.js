var React = require('react-native');
var api = require('../Utils/api');
var EventDetials = require('./EventDetials');

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} = React;

var Main = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isLoading: true,
    };
  },

  componentWillMount: function() {
    this.getEventsData();
  },
  
  getEventsData: function() {
    api.getEvents()
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: `There was an error: ${err}`
        })
      })
  },
  goToEvent: function(eventData) {
    this.props.navigator.push({
        component: EventDetials,
        title: eventData.node_title,
        passProps: { eventData: eventData},
      });
  },
  renderEvent: function(eventData) {
    return (
      <TouchableHighlight onPress={() => this.goToEvent(eventData)}>
        <View style={styles.container}>
          <Image
            source={{uri: eventData.event_type.image_url}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{eventData.node_title}</Text>
              <Text style={styles.eventType}>{eventData.event_type.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  
  render: function() {
    if (this.state.isLoading) {
      return this.renderisLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow = {this.renderEvent}
        style={styles.listView}/>
    );
  },

  renderisLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  },


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  eventType: {
    textAlign: 'left',
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  listView: {
    paddingTop: 65,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = Main;