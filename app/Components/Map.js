var React = require('react-native');
var {
  MapView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} = React;

var regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

var MapViewExample = React.createClass({

  getInitialState(): MapViewExampleState {
    return {
      isFirstLoad: true
    };
  },

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          onRegionChange={this._onRegionChange}
          onRegionChangeComplete={this._onRegionChangeComplete}
          region={this.state.mapRegion}
          annotations={this.state.annotations}/>
      </View>
    );
  },

  _getAnnotations(region): Annotations {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'You Are Here',
    }];
  },

  _onRegionChange(region) {
    console.log(region);

    this.setState({
      mapRegionInput: region,
    });
  },

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  },

  _onRegionInputChanged(region) {
    console.log(region);

    this.setState({
      mapRegion: region,
      mapRegionInput: region,
      annotations: this._getAnnotations(region),
    });
  },

});


var styles = StyleSheet.create({
  map: {
    height: 700,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    fontSize: 13,
    padding: 4,
  },
  changeButton: {
    alignSelf: 'center',
    marginTop: 5,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#777777',
  },
});



module.exports = MapViewExample;