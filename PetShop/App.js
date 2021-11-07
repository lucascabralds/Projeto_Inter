import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
  } from 'react-native';

  import Lista from './src/Lista/Lista.js'

export default class App extends Component{

  

  constructor(props){
    super(props);
    this.state={
      feed:[
        {
          id:'1',
          nomeproduto:'CAMA BICHINHO CHIC ACONCHEGO VERMELHA',
          imgProduto:'../src/img/CAMABICHINHOVERMELHA.jpg',
          Preço:164.78,
        },
        {
          id:'2',
          nomeproduto:'Ração Golden Power Sabor Frango e Arroz',
          imgProduto:'../src/img/Ração_Golden_Power.jpg',
          Preço:153.99,
        },
        {
          id:'3',
          nomeproduto:'Caixa de Transporte Luxo Furacão Pet Preto e Azul',
          imgProduto:'../src/img/Caixa_de_Transporte_Luxo.jpg',
          Preço:105.29,
        },
        {
          id:'4',
          nomeproduto:'Casa Iglu Furacão Pet Preta para Cães',
          imgProduto:'../src/img/Casa_Iglu_Furacão.jpg',
          Preço:64.59,
        },
        {
          id:'5',
          nomeproduto:'Tapete Higiênico Petz Carvão Ativado para Cães 30 Unidades',
          imgProduto:'../src/img/Tapete_Higiênico_Petz.jpg',
          Preço:105.99,
        },
        {
          id:'6',
          nomeproduto:'Mini Bifinho Petz Strip Carne para Cães 500g',
          imgProduto:'../src/img/Mini_Bifinho_Petz.jpg',
          Preço:22.99,
        },
      ]
    }
  }

  
render(){

  return(

  <ScrollView>
    <View style={styles.container}>
      <View style={styles.logo}>

        <Text style={styles.logotext}>Petshop</Text>
        <Image source={require('./src/img/logo.png')}
               style={styles.imglogo}/>
      </View>

      <View style={styles.areaFormulario}>

        <FlatList showsHorizontalScrollIndicator={false}
                  keyExtractor={(item)=> item.id}
                  data={ this.state.feed}
                  renderItem={ ({item}) => <Lista data ={item}/> }/>

      </View>
        
    </View>    
  </ScrollView>
    );
  }}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    imglogo:{
      height:60,
      width:60,
      borderWidth:1.5,
      borderColor:"#000",
      borderRadius:50,
      marginTop:12
    },
    logo:{
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth:0.5,
      shadowColor:'#000',
      alignContent:'center',
      backgroundColor:'#68bab9',
      borderColor:'#3d6666',
      height:80
    },
    logotext:{
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color:'#294545',
      marginTop:15
    },
    areaFormulario:{
      flexDirection: 'column',
      margin: 20,
      marginTop:15,
      backgroundColor:'#A7F6F5',
      borderRadius:25,
      borderColor:'#5EC0BE',
      borderWidth:3
    }
    

  });
  
  /*

  Consulta - Tela de compra
  Cadastro - Cadastro 
  Alteração - Alteração de informações

  */