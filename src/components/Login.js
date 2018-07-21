import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const logo = require('../img/unilever-logo.png');

export default class Login extends Component {

  constructor(props) {
    super(props);
  }


  render() {

      return (

        <View style={styles.container}>
          <View style={styles.viewLogo}>
            <Image style={{ height: 150, width: 150 }} source={logo} />
          </View>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              onChangeText={(login) => (false)}
              value={this.props.login}
              placeholder='Email'
              placeholderTextColor='#D0D0D0'
            />
            <TextInput
              style={styles.input}
              onChangeText={(senha) => ( false)}
              value={this.props.senha}
              secureTextEntry={true}
              placeholder='Senha'
              placeholderTextColor='#D0D0D0'
            />

          </View>
          <View style={styles.viewButton}>
            <Button
              onPress={() => Actions.produtos()}
              title="Acessar"
              color="#1D5DA7"
              accessibilityLabel="Clique para acessar"
            />
          </View>
        </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  input: {
    height: 45,
    fontSize: 20
  },
  viewLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewInput: {
    flex: 2,
  },
  viewButton: {
    flex: 2,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
