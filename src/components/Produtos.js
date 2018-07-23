import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View
} from 'react-native';
import Produto from './Produto';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: Each child in an array or iterator should have a unique "key" prop.', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: Each child in an array or iterator should have a unique "key" prop.', 'Module RCTImageLoader']);

export default class Produtos extends Component {

    constructor(props) {
        super(props);
        this.state = { listaProdutos: [], animating: false }
        var listaProdutos = []; 
        
        var produtos = firebase.database().ref('produtos');
        produtos.on('child_added', (data) => {
            listaProdutos.push(data.val());
            this.setState({ listaProdutos });
        });
    }

    render() {
        if (!this.state.animating) {
            return (
                <ScrollView style={styles.container}>
                    {
                        this.state.listaProdutos.map((produto) => 
                        <Produto key={produto.key} nome={produto.nome} valor={produto.valor} />)
                    }
                </ScrollView>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        color='#1D5DA7'
                        size="large"
                        style={styles.activityIndicator} />
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
