import React, {Component} from 'react';
import {View,
        Text,
        Image,
        TouchableOpacity,
        StyleSheet} from 'react-native';
        

        class Lista extends Component{

            constructor(props){
                super(props);
                this.state={
                    feed:this.props.data
                };
            }
            render(){
                return(
                    <View style={styles.viewproduto}>
                        <View style={styles.ordemproduto}>

                               <Text style={styles.nomeUsuario}>{this.state.feed.nomeproduto}</Text>

                                <Image source={require(this.state.feed.imgProduto)}
                                       style={styles.fotoPublicacao}/>
                        </View>
                    </View>
                )
            }
        }


        const styles= StyleSheet.create({
            fotoPublicacao:{
                height:150,
                width:150,
              },
              viewproduto:{
                  

              },
            nomeUsuario:{
                fontSize:12,
                textAlign:'center',
                justifyContent:'center',
                color:'#000',
                height:40,
                width:140
                
            },
            ordemproduto:{
                flexDirection:'row-reverse',
                height:150,
                width:150,
                borderWidth:1,
                borderRadius:25,
            }
            
        })
        export default Lista;