'use strict';
var React = require('react-native');
var Results = require('./Results');
var api = require('./api');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} = React;

var Main = React.createClass({
  getInitialState: function() {
    return this.state = {
      search: ''
    }
  },
  handleSubmit: function(tag) {
    tag = tag || this.state.search;
    var submit = this.handleSubmit;
    api.getData(tag).then(function(response) {
      if(response.error){
        this.setState({
          error: response.error
        });
      } else {
        this.props.navigator.push({
          title: 'Results',
          component: Results,
          passProps: {results: response, find: submit}
        }); 
      }
    }.bind(this)).catch(function(err) {
      console.log('error: ', err);
    });
  },
  handleChange: function(e) {
    this.setState({
      search: e.nativeEvent.text
    });
  },
  clear: function() {
    this.setState({
      search: ''
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>What can I GIF you?</Text>
          <View style={styles.form}>
            <TextInput style={styles.field} value={this.state.search} placeholder="need a gif?"  onChange={this.handleChange}/>
            <TouchableHighlight underlayColor="#FFFFFF" style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#FFFFFF" style={[styles.button, styles.clearButton]} onPress={this.clear}>
              <Text style={[styles.buttonText, styles.clearButtonText]}>Cancel</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingRight: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: -1,
    color: '#424242'
  },
  form: {
    marginTop: 40,
    alignSelf: 'stretch'
  },
  field: {
    height: 40,
    paddingLeft: 8,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 20,
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  clearButton: {
    backgroundColor: '#D6D6D6'
  },
  clearButtonText: {
    color: '#000'
  },
  error: {
    color: '#FF0000'
  }
});

module.exports = Main;