import React, { Component } from 'react';
import {
    StyleSheet,
    Text, 
    View
} from 'react-native';

export default class Detalhe extends Component {

    render() {
        return (
            <View>
                <Text style={styles.texto}>Produto: {this.props.nome}</Text>
                <Text style={styles.texto}>Valor: {this.props.valor}</Text>
            </View>
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