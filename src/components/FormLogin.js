import React, { Component } from 'react';
import { AppRegistry, StyleSheet,View, Text, TextInput, Button} from 'react-native';

export default props => (

    <View style={estilos.cabecalho} >

        <View style={estilos.tituloPrincipal}>
        <Text style={estilos.texto_cabecalho}>Positivo Pagamentos</Text>
    </View>

    <View style={estilos.OutrosTextos}>

      <TextInput style={estilos.texto_FormLogin} placeholder='E-mail'/>
      <TextInput style={estilos.texto_FormLogin} placeholder='Senha'/>
      <Text style={estilos.texto_Info} >Insira os seus dados de acesso!</Text>
    </View>

    <View style={estilos.OutrosTextos} >
        <Button title="Acessar" color='#120a8F'  onPress={ () => false } />
    </View>

    </View>
)


const estilos = StyleSheet.create({

    cabecalho:{
        flex:1,
        padding: 10,
    },
    texto_cabecalho:{
        fontSize: 25
    },
    tituloPrincipal:{
        flex:1,
        justifyContent: 'center',
        alignItems:  'center'
        
    },
    texto_FormLogin:{
        fontSize: 25,
        height: 45
        
    },

    texto_Info:{
        fontSize: 20
        
    },

    OutrosTextos:{
        flex:2
        
    }



});