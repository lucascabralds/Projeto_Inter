import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Picker,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
  } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
              {sexoNome: 'Masculino', value: 1},
              {sexoNome: 'Feminino', value: 2},
              {sexoNome: 'Prefiro não dizer',value:3},
              {sexoNome: 'Outros',value:3}
      ],
      limite: 250,
      estudante: false,
    };

    this.validarDados = this.validarDados.bind(this);
  }
  validarDados(){
    if(this.state.nome==='' || this.state.idade === ''){
      alert('Dados não preenchido corretamente, peço que preenche novamente!')
      return;
  }

  alert(
          'Conta aberta com sucesso!! \n\n' + 
          'Nome: '+this.state.nome + '\n' + 
          'Idade: ' + this.state.idade + '\n' +
          'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
          'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
          'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
  );
}
  

render(){
    let itemSexo = this.state.sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}/>
  }); 

  return(

  <ScrollView>
    <View style={styles.container}>
      <View style={styles.logo}>

        <Text style={styles.logopet}>Petshop</Text>
        <Image source={require('./src/img/logo.png')}
               style={styles.imglogo}/>

      </View>
        <View style={styles.areaFormulario}>
 
          <Text style={styles.form}>Nome:</Text>
            <TextInput  style={styles.input}
                        placeholder="Digite seu nome completo"
                        underlineColorAndroid="transparent"
                        onChangeText={(texto) => this.setState({nome: texto})}/>

              <Text style={styles.form}>CPF:</Text>
              <TextInput  style={styles.input}
                          placeholder="Digite seu CPF"
                          underlineColorAndroid="transparent"
                          onChangeText={(texto) => this.setState({idade: texto})}
                          keyboardType="numeric"/>
                          
                          <View style={styles.areaSexo}>  
                              <Text style={styles.form}>Sexo:</Text>
                                <Picker style={styles.pickerSexo} 
                                        selectedValue={this.state.sexo} 
                                        onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  

                                    {itemSexo}

                                </Picker>
                                

                            </View>

                            
                            <View style={styles.areadeaniversario}>

                                <Text style={styles.form}>Data de nascimento:</Text>
                            
                                <TextInput  style={styles.input}
                                placeholder = "Dia"
                                keyboardType="numeric"/>
                                
                                <TextInput  style={styles.input}
                                placeholder = "Mês"
                                keyboardType="numeric"/>

                                <TextInput  style={styles.input}
                                placeholder = "Ano"
                                keyboardType="numeric"/>
                                
                            </View>

                      <Text style={styles.form}>Telefone Fixo ou Comercial:</Text>

                      <TextInput  style={styles.input}
                                  placeholder="Digite seu Telefone Fixo"
                                  underlineColorAndroid="transparent"
                                  keyboardType="numeric"/>

                      <Text style={styles.form}>Telefone Celular:</Text>

                      <TextInput  style={styles.input}
                                  placeholder="Digite seu Telefone Celular"
                                  underlineColorAndroid="transparent"
                                  keyboardType="numeric"/>

                      <Text style={styles.form}>E-mail:</Text>

                      <TextInput  style={styles.input}
                                  placeholder="Digite seu E-mail"
                                  underlineColorAndroid="transparent"/>

                      <Text style={styles.form}>Digite novamente seu e-mail:</Text>

                      <TextInput  style={styles.input}
                                  underlineColorAndroid="transparent"/>

                      <Text style={styles.form}>Crie sua senha de acesso:</Text>

                      <TextInput  style={styles.input}
                                  placeholder="Digite sua senha de acesso"
                                  underlineColorAndroid="transparent"/>

                      <Text style={styles.form}>Digite novamente seu e-mail:</Text>

                      <TextInput  style={styles.input}
                                  underlineColorAndroid="transparent"/>

                                  <View style={{marginTop:15}}></View>

      
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.validarDados} underlayColor="#000000">
                  <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
    </View>    
  </ScrollView>
    );
  }}

  const styles = StyleSheet.create({
    container:{
      paddingTop: 20,
      flex: 1,
    },
    areaFormulario:{
      flexDirection: 'column',
      margin: 20,
      marginTop:75,
      backgroundColor:'#A7F6F5',
      borderRadius:25,
      borderColor:'#5EC0BE',
      borderWidth:3
    },
    logopet:{
      textAlign: 'center',
      fontSize: 45,
      fontWeight: 'bold',
      color: 'grey'
    },
    form:{
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      margin:5,
    },
    input:{
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#999999',
      backgroundColor: '#EEEEEE',
      color: '#000000',
      height: 38,
      padding: 10,
      marginBottom: 10,
      margin: 5,
    },
    areaSexo:{
       flexDirection: 'row',
       alignItems: 'center',
       paddingBottom: 5,
   },
   pickerSexo:{
      flex:1,
      color:'#000',
      fontFamily:'bold',
      fontSize:20
    },
    limiteArea:{
      flexDirection:'row',
      paddingBottom: 5,
  },
  limiteTexto:{
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaEstudante:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  botao:{
   height: 35,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#A1C1C0',
   borderRadius: 150,
   margin: 20,
   marginTop:15,
   borderColor:'#000',
   borderWidth:1
  },
  botaoTexto:{
     fontSize: 20,
     fontWeight: 'bold',
     color: '#FFFFFF'
  },
  logo:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  imglogo:{
    height:65,
    width:65,
    borderWidth:1.5,
    borderColor:"#000",
    borderRadius:50,
    
  },
  areadeaniversario:{
    flexDirection:'row',
    
  }
  });
  
  /*

  Consulta - Tela de compra
  Cadastro - Cadastro 
  Alteração - Alteração de informações

  */