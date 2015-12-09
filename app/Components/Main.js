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

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([{
"type": "event",
"nid": "22",
"node_title": "Women's 110m hurdles",
"event_description": {
"value": "helloLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>helloLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-04 19:30:00",
"value2": "2015-03-04 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "21",
"node_title": "Mens 110m hurdles",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-09 19:30:00",
"value2": "2015-02-09 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "20",
"node_title": "Women's 1500m",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-09 19:30:00",
"value2": "2015-02-09 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "19",
"node_title": "Mens 1500m",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-09 19:30:00",
"value2": "2015-02-09 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "18",
"node_title": "Women's 100m",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-08 19:30:00",
"value2": "2015-02-08 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "17",
"node_title": "Mens 100m",
"event_description": {
"value": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. usain bolt",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. usain bolt</p>\n"
},
"event_date": {
"value": "2015-02-03 19:30:00",
"value2": "2015-02-03 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "4",
"name": "Track and field",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_2.png"
},
"location": {
"title": "Olympic stadium",
"nid": "2"
}
},
{
"type": "event",
"nid": "16",
"node_title": "Poland vs Sweden",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-07 19:30:00",
"value2": "2015-02-07 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "3",
"name": "Basketball",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder.png"
},
"location": {
"title": "Copper Box Arena",
"nid": "4"
}
},
{
"type": "event",
"nid": "15",
"node_title": "Spain vs Germany",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-07 19:30:00",
"value2": "2015-02-07 19:30:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "3",
"name": "Basketball",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder.png"
},
"location": {
"title": "Copper Box Arena",
"nid": "4"
}
},
{
"type": "event",
"nid": "14",
"node_title": "Italy vs UK",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-06 19:15:00",
"value2": "2015-02-06 19:15:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "3",
"name": "Basketball",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder.png"
},
"location": {
"title": "Copper Box Arena",
"nid": "4"
}
},
{
"type": "event",
"nid": "13",
"node_title": "USA vs Canada ",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-04 14:15:00",
"value2": "2015-02-04 14:15:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "3",
"name": "Basketball",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder.png"
},
"location": {
"title": "Copper Box Arena",
"nid": "4"
}
},
{
"type": "event",
"nid": "12",
"node_title": "Women's team sprint",
"event_description": {
"value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
"format": "plain_text",
"safe_value": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>\n"
},
"event_date": {
"value": "2015-02-06 12:15:00",
"value2": "2015-02-06 12:15:00",
"timezone": "UTC",
"timezone_db": "UTC",
"date_type": "datetime"
},
"event_type": {
"tid": "2",
"name": "Cycling",
"image_url": "http://event-finder.dev/sites/boilerplate/files/default-placeholder_0.png"
},
"location": {
"title": "Lee Valley Velopark",
"nid": "3"
}
}]),
          isLoading: false,
        });


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
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = Main;