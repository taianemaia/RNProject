import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
} from 'react-native';

export default class Novo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(nome) => (false)}
                        placeholder='Nome'
                        placeholderTextColor='#D0D0D0'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(valor) => (false)}
                        secureTextEntry={true}
                        placeholder='Valor'
                        placeholderTextColor='#D0D0D0'
                    />

                </View>
                <View style={styles.viewButton}>
                    <Button
                        onPress={() => false}
                        title="Cadastrar"
                        color="#1D5DA7"
                        accessibilityLabel="Cadastrar Produto"
                    />
                </View>
            </View>
        )

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