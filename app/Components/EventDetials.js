var React = require('react-native');
var Map = require('./Map');

var {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} = React;

var EventDetials = React.createClass({
  goToMap: function(eventData) {
    this.props.navigator.push({
        component: Map,
        title: 'Map View',
        passProps: { locationId: eventData.location},
      });
  },

  render: function() {
    eventData =  this.props.eventData;

    return (
       <View style={styles.container}>
          <View style={styles.rightContainer}>
            <Image
              source={{uri: eventData.event_type.image_url}}
              style={styles.thumbnail}/>
            <Text style={styles.title}>{eventData.node_title}</Text>
            <Text style={styles.eventType}>{eventData.event_date.value}</Text>
            <Text style={styles.eventType}>{eventData.event_type.name}</Text>
            <Text style={styles.eventType}>{eventData.event_description.value}</Text>
            <TouchableHighlight onPress={() => this.goToMap(eventData)}>
              <Text style={styles.mapLink}>View Map</Text>
            </TouchableHighlight>
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
  mapLink: {
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
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