import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function JuniorTi(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Função de Um Junior em TI </Text>
        <Text style={estilo.conceito}> 
          No nível júnior, estão os cargos com complexidade menor de tarefas, sem tantas exigências de competências profissionais e normalmente sem autonomia para decisões. É aqui que começa a carreira de um profissional em determinada área. Tem até 5 anos de experiência na área.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/junior.jpg')}/>
        <Text style={estilo.subtitulo}> Empregos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
         Programador Junior </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
        Desenvolvedor Front-End Junior </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        Desenvolvedor Back-End Junior </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
        Analise de dados Junior </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
        Cloud Junior </Text> 
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
    width: largura -20,
    height: 200,
    borderRadius: 30,
    margin: 10,
  },
  fundo:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor: '#708090',
    borderRadius: 20,
    marginHorizontal: 20,
  }
})

