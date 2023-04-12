import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function SeniorTi(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Função de Um Senior em TI </Text>
        <Text style={estilo.conceito}> 
         No nível sênior, o profissional se depara com uma ampla complexidade de tarefas. É esperado que ele tem maturidade profissional e emocional, poder de decisão e também capacidade para assumir funções de liderança. Tem mais de  15 anos de experiência na área.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/Senior.gif')}/>
        <Text style={estilo.subtitulo}> Empregos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="staro" size={24} color="black" style={estilo.icon} />
         Programador Senior </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="staro" size={24} color="black" style={estilo.icon} />
        Desenvolvedor Front-End Senior </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="staro" size={24} color="black" style={estilo.icon} /> 
        Desenvolvedor Back-End Senior </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="staro" size={24} color="black" style={estilo.icon} /> 
        Analise de dados Senior </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="staro" size={24} color="black" style={estilo.icon} />
        Cloud Senior </Text> 
        </View>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#00BFFF',
  },
  conceito:{
fontSize: 18,
textAlign: 'justify',
margin: 15
  },
  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
  },
  subtitulo:{
fontSize: 20,
marginBottom: 20,
marginLeft: 20
  },
  topicos:{
    fontSize: 20,
    marginLeft: 20
  },
  img:{
    width: largura,
    height: 300,
    borderRadius: 30,
    margin: 10,
  },
  fundo:{
    flex:1,
    backgroundColor: '#708090',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical:20,
    justifyContent:'space-between',
  }
})

