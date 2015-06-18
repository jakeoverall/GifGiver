'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TextInput
} = React;

var Results = React.createClass({
  getInitialState: function(){
    return {    
    };
  },
  search: function(tag){
    this.props.find(tag);
  },
  render: function() {
    var results = this.props.results || {};
    results.gifs = results.gifs || [];
    var gifs = results.gifs.map(function(gif){
      var tags = gif.tags.split(',').map(function(tag, i){
        return (
          <View key={i}>
            <TouchableHighlight onPress={this.search.bind(null, tag)}>
              <Text>#{tag}</Text>
            </TouchableHighlight>
          </View>
        );
      }.bind(this));
      return (
        <View key={gif.id} style={styles.gifContainer}>
          <Image style={styles.gif} source={{uri: gif.url}} />
          <Text>{gif.url}</Text>
          {tags}
        </View>
      );
    }.bind(this));
    var message;
    if(results.gif_count){
      message = `Found ${results.gif_count} gifs tagged ${results.tag} neat :)`;
    } else {
      message = 'Bummer Deal no giphs found :(';
    }
    return (
        <ScrollView style={styles.container}>
          <Text>{message}</Text>
          {gifs}
        </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 5,
  },
  gif: {
    height: 150,
    width: 150
  },
  gifContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 20,
  }
});

module.exports = Results;