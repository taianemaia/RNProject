import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Produto extends Component {

    render() {

        var icone = require('../img/product.png');
        

        return (
            <TouchableHighlight
                onPress={() => Actions.detalhe({nome: this.props.nome, valor: this.props.valor})}
                activeOpacity={0.1}
                underlayColor='#1D5DA7'
            >
                <View style={styles.mensagem}>
                    <View style={styles.ico}>
                        <Image style={{ height: 40, width: 40 }} source={icone} />
                    </View>
                    <View style={styles.viewTexto}>
                        <Text>{this.props.nome}</Text>
                        <Text>{this.props.valor}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    mensagem: {
        borderWidth: 0.5,
        borderColor: '#F4F4F4',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    ico: {
        width: 42,
        height: 42
    },
    viewTexto: {
        marginLeft: 20
    }
});
