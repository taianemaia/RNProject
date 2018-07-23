import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Login from './src/components/Login';
import Produtos from './src/components/Produtos';
import Detalhe from './src/components/Detalhe';
import Novo from './src/components/Novo';
import Configuracoes from './src/components/Configuracoes';
import { View, Image, BackHandler } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const plusIcon = require('./src/img/plus.png');

const TabIcon = ({ selected, title }) => {
  let caminho = '';
  switch (title) {
    case 'Produtos': caminho = require('./src/img/product.png'); break;
    case 'Buscar': caminho = require('./src/img/search.png'); break;
    case 'Configurações': caminho = require('./src/img/config.png'); break;
  }
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={caminho}
        style={{ width: 26, height: 26 }}
      />
    </View>
  );
}

export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCmOwvQqz1hnpvuzt-mBlXehLHHI8Xbung",
      authDomain: "rnproject-c03ac.firebaseapp.com",
      databaseURL: "https://rnproject-c03ac.firebaseio.com",
      projectId: "rnproject-c03ac",
      storageBucket: "rnproject-c03ac.appspot.com",
      messagingSenderId: "485466818006"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router
        backAndroidHandler={() => (BackHandler.exitApp())}
        sceneStyle={{ backgroundColor: 'white' }}
        navigationBarStyle={{ backgroundColor: '#F4F4F4', height: 50 }}
        navBarButtonColor='#1D5DA7'
      >
        <Scene key='root'>
          <Scene key='login'
            component={Login}
            initil
            title='Login'
            titleStyle={styles.title}
            hideNavBar={true}
          />
          <Scene
            key="tabbar"
            tabs={true}
            tabBarPosition='bottom'
            hideNavBar={true}
            activeTintColor='#1D5DA7'
            tabBarStyle={styles.tabbar}
            titleStyle={styles.title}
          >
            <Scene key="me" title="Produtos" icon={TabIcon}>
              <Scene key='produtos'
                component={Produtos}
                title='Produtos'
                type="replace"
                init
                onRight={() => Actions.novo()}
                rightButtonImage={plusIcon}
              />
              <Scene key='detalhe' component={Detalhe} title='Detalhe' />
              <Scene key='novo' component={Novo} title='Novo Produto' />
            </Scene>
            <Scene key="co" title="Configurações" icon={TabIcon}>
              <Scene key='configuracoes' component={Configuracoes} title='Configurações' />
            </Scene>
          </Scene>

        </Scene>

      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#1D5DA7',
    marginBottom: 5,
  },
  title: {
    color: '#1D5DA7'
  },
  tabbar: {
    height: 54,
    backgroundColor: '#F4F4F4'
  }
});
