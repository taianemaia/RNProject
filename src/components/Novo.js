import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
} from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class Novo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            valor: ""
        }
    }

    salvarItem() {
       // alert(this.state.nome);
        var nome = this.state.nome;
        var valor = this.state.valor;

        var produtos = firebase.database().ref('produtos'); 
        produtos.push().set({ nome, valor });

        Actions.pop(); 
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(nome) => this.setState({nome})}
                        value={this.state.nome}
                        placeholder='Nome'
                        placeholderTextColor='#D0D0D0'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(valor) => this.setState({valor})}
                        value={this.state.valor}
                        placeholder='Valor'
                        keyboardType='numeric'
                        placeholderTextColor='#D0D0D0'
                    />

                </View>
                <View style={styles.viewButton}>
                    <Button
                        onPress={() => this.salvarItem()}
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