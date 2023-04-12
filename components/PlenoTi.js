import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function PlenoTi(){
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Função de Um Pleno em TI </Text>
        <Text style={estilo.conceito}> 
         No nível pleno, existe uma maior complexidade de tarefas. Aqui , o profissional precisa ter maior maturidade e também mais capacidade de tomar de decisões, o que era raramente é exigido no nível júnior. 

No nível pleno normalmente estão profissionais que têm entre 5 e dez anos de experiência. 
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/pleno.png')}/>
        <Text style={estilo.subtitulo}> Empregos: </Text>
        <View style={estilo.fundo}>

        <Text style={estilo.topicos}>
        <AntDesign name="checkcircle" size={24} color="black" style={estilo.icon} />
         Programador Pleno </Text>
        <Text style={estilo.topicos}>
        <AntDesign name="checkcircle" size={24} color="black" style={estilo.icon} />
        Desenvolvedor Front-End Pleno </Text> 
        <Text style={estilo.topicos}>
        <AntDesign name="checkcircle" size={24} color="black" style={estilo.icon} /> 
        Desenvolvedor Back-End Pleno </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="checkcircle" size={24} color="black" style={estilo.icon} /> 
        Analise de dados Pleno </Text> 
        <Text style={estilo.topicos}> 
        <AntDesign name="checkcircle" size={24} color="black" style={estilo.icon} />
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
    backgroundColor: '#B0C4DE',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    justifyContent:'space-between',
  }
})

