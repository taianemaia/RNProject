import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class Buscar extends Component {

    render() {
        return (
            <Text style={styles.texto}>{this.props.login}</Text>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE',
    },
    texto: {
        margin: 10,
        marginLeft: 10,
        fontSize: 20,
    }
});
