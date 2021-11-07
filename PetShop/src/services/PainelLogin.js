import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
  } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      Login:'',

      Login: [
              {Logins: 'LucasCabral', valor: 1},
              {Logins: 'JoaoTrindade', valor: 2},
              {Logins: 'hallyssonmozart', valor:3}
      ],
      Senha:[
        {Senhas:23052317,valor:1},
        {Senhas:22973761,valor:2},
        {Senhas:22812016,valor:3}
      ]

    };

    
  }
  
render(){    
  return(
    <View style={styles.container}>

      <Image source={require('./src/img/logo.png')}
             style={styles.logo}/>


             <View style={styles.caixadelogin}>

               <Text style={styles.h1}> Login: </Text>

                  <Text style={styles.h2}> Informe seu usuario:</Text>

                  <TextInput placeholder='Insira seu Usuario'
                             style={styles.input}/>

                  <Text style={styles.h2}> Informe seu usuario:</Text>
                
                  <TextInput placeholder='Insira sua Senha'
                             style={styles.input}/>
                    <View style={styles.areadeCadastro}>

                        <Text style={styles.Txtif}> Ainda não possui cadastro? </Text>
                        <TouchableOpacity style={styles.cadastrase}>
                          <Text style={styles.txtcadastrar}>Cadastra-se!</Text>

                        </TouchableOpacity>
                    </View>

                           

             </View>

             <TouchableOpacity style={styles.btn}>

                <Text style={styles.btnLogar}>
                  Logar
                </Text>

            </TouchableOpacity>
      
    </View>    
    );
  }}

  const styles = StyleSheet.create({
    container:{
      paddingTop: 20,
      flex: 1,
      alignItems:'center'
    },
    logo:{
      height:100,
      width:100,
      borderWidth:1.5,
      borderColor:"#000",
      borderRadius:50,
    },
    input:{
      width:300,
      height:50,
      borderColor:'#000',
      borderWidth:1,
      padding:10,
      borderRadius:25,
      fontSize:25,
      backgroundColor:'#FFF',
      textAlign:'center'
    },
    caixadelogin:{
      height:350,
      width:350,
      backgroundColor:'#A7F6F5',
      
      alignItems:'center',
      borderRadius:25,
      borderWidth:1,
      marginTop:50
    },
    h1:{
      color:'#339E9C',
      fontSize:35,
      fontWeight:'bold',
      fontStyle:'normal'
    },
    h2:{
      marginTop:50,
      color:'#0F3333',
      fontSize:15
    },
    btn:{
      borderWidth:1,
      marginTop:25,
      height:50,
      width:250,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      backgroundColor:'#405c60'
    },
    btnLogar:{
      color:'#fff',
      fontSize:20,
    
    },
    areadeCadastro:{
      borderWidth:2,
      width:335,
      height:35,
      backgroundColor:'#A1C1C0',
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      borderRadius:25,
      justifyContent:'center'
    },
    cadastrase:{
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:25,
      alignItems:'center',
      width:95
    },
    txtcadastrar:{
      color:'blue',
      fontWeight:'bold'
    },
    Txtif:{
      color:'#FFF'
    }

   
  
  });
  
  /*

  Consulta - Tela de compra
  Cadastro - Cadastro 
  Alteração - Alteração de informações

  */