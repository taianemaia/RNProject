import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Configuracoes extends Component {


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => Actions.login()}>
                    <View style={styles.item}>
                        <Text style={styles.texto}>Sair</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    texto: {
        alignItems: 'flex-start',
        fontSize: 18
    },
    item: {
        borderWidth: 0.5,
        borderColor: '#F4F4F4',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
});
