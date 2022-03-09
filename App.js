import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style = {{marginTop: 200}}>
    <Button color = '#fc0000' title = "CLICK ME" 
    onPress={()=>alert("HELLO!!!")}/>
    </View>
    );
  }
}


