import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class Detalhe extends Component {

    render() {
        return (
            <Text style={styles.texto}>teste</Text>
        )

    }
}

const styles = StyleSheet.create({
    texto: {
        margin: 10,
        marginLeft: 10,
        fontSize: 20,
    }
});
