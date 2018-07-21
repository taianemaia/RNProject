import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View
} from 'react-native';
import Produto from './Produto';

export default class Produtos extends Component {

    constructor(props) {
        super(props);
        this.state = { listaProdutos: [], animating: false }
    }

    render() {
        if (!this.state.animating) {
            return (
                <ScrollView style={styles.container}>
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
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
