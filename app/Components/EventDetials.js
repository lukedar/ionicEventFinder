var React = require('react-native');

var {
  Text,
  StyleSheet,
  View
} = React;


var EventDetials = React.createClass({
  componentWillMount: function() {
    console.log(this.props);
  },

  render: function() {
    eventData =  this.props.eventData;

    return (
       <View style={styles.container}>
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{eventData.node_title}</Text>
              <Text style={styles.eventType}>{eventData.event_description.value}</Text>
          </View>
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
    padding: 20
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
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = EventDetials;