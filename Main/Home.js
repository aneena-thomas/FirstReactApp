import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ListView,
  ScrollView,
  Button
} from 'react-native';


const background = require("./Images/bg.jpeg");
const mapImg = require("./Images/map.jpg");
const logo = require("./Images/Logo.jpg");

class Home extends Component {

  state = {
      names: [
         {
            id: 0,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >prem
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Hair Stylist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >thejaswini
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Kazhakootam
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>

         },
         {
            id: 1,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >Anu
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Beauty Therapist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >bhavani
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Kazhakootam
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>


         },
         {
            id: 2,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >Joy
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Hair Stylist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >thejas
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Pettah
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>


          },
         {
            id: 3,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >Ammu Vincent
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Beauty Therapist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >fair
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Kottayam
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>


         },
         {
            id: 4,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >Kamalam
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Beauty Therapist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >bella
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Kochi
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>


         },
         {
            id: 5,
            name:<Image
            style={[styles.background]}
            source={background}
            resizeMode='cover'
            ></Image>,
            mapImage:<Image
            style={[styles.mapStyle]}
            source={mapImg}
            resizeMode='cover'
            ></Image>,
            text1:<View style={styles.text1Style}><Text style={styles.text1}
            >Pinky
            </Text></View>,
            text2:<View style={styles.text2Style}><Text style={styles.text2}
            >Hair Therapist
            </Text></View>,
            text3:<View style={styles.text3Style}><Text style={styles.text3}
            >Karma
            </Text></View>,
            text4:<View style={styles.text4Style}><Text style={styles.text4}
            >Tvm
            </Text></View>,
            text5:<View style={styles.text5Style}><Text style={styles.text5}
            >2.4 Mi
            </Text></View>


         }
      ]
   }
   static navigationOptions = ({navigation}) => ({
      title: "Nearby Providers",
      headerTintColor: "white",
      headerStyle: {
         backgroundColor: '#021355',
         elevation: null,
       },
    });
  render() {

    return (
      <View style={styles.outerContainer}>
         <View style={styles.topView}>
              <View
                 style={styles.input}>
                 <Text style={styles.topText}>Wednesday,May 31 2017</Text>

              </View>
         </View>
         <ScrollView>
         {
               this.state.names.map((item) => (
               <View key = {item.id} style = {styles.item}>
                           <Text>{[item.name,item.mapImage,item.text1,item.text2,item.text3,item.text4,item.text5]}</Text>
               </View>
               ))
          }
         </ScrollView>
         <View style={styles.bottomView}>
               <Image
                  source={logo}
                  style={styles.bottomImageStyle}
                  resizeMode='contain'
               />
         </View>
    </View>

        );
       }
    }
    const styles = StyleSheet.create({
      container : {
        marginTop:10,
        height:130,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
      },
      item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      marginLeft: 10,
      marginRight:10,
      marginTop:6,
      backgroundColor: '#FFF',
      height:130
   },
      outerContainer:{
        height:'100%',
        width:'100%',
        marginTop:0,
        backgroundColor:'#F7F7F7'
      },
      text1: {
        color: '#4f603c',
        fontWeight: "bold"
      },
      text2:{
         color: '#4f603c',
      },
      text3:{
         color: '#4f603c',
         fontSize:9
      },
      text4:{
         color: '#4f603c',
         fontSize:9
      },
      text5:{
         color: '#4f603c',
         fontSize:10,
         color:'orange'
      },
     background:{
        width:'80%',
        height:'80%',
        marginLeft:-18,
        marginTop:3,
        borderRadius: 40

     },
     text1Style:{
        height:'50%',
        width:'150%',
        marginLeft:-20,
        marginTop:-27,
        marginRight:10,
        flexDirection:'row',
        flex:1
     },
     text2Style:{
        height:'16%',
        width:'130%',
        marginLeft:75,
        marginTop:-60,
        marginRight:10,
        backgroundColor:'transparent',
        flexDirection:'row',
        flex:2

     },
     text3Style:{
        height:'10%',
        width:'130%',
        marginLeft:-55,
        marginTop:-46,
        marginRight:10,
        backgroundColor:'transparent',
        flexDirection:'row',
        flex:3

     },
     text4Style:{
        height:'10%',
        width:'90%',
        marginLeft:76,
        marginTop:-43,
        marginRight:10,
        backgroundColor:'transparent',
        flexDirection:'row',
        flex:4

     },
     text5Style:{
        height:'10%',
        width:'40%',
        marginLeft:194,
        marginTop:-90,
        marginRight:10,
        backgroundColor:'transparent',
        flexDirection:'row',
        flex:5

     },
     topView:{
       height:40,
       width:300,
       marginTop:8
     },
     input:{
       flex:1,
       paddingHorizontal:10,
       backgroundColor:'#FFF',
       marginLeft:10,
       marginRight:10,
       color:'black',
       width:356
     },
     topText:{
       marginTop:10,
       marginLeft:90,
       fontWeight:"bold"
     },
     bottomView:{
       height:60,
       width:400,
       marginBottom:0,
       backgroundColor:'#021355'
     },
     bottomImageStyle:{
       width:200,
       height:60,
       marginLeft:80,
       marginRight:60,
       marginBottom:0
     },
     mapStyle:{
       width:14,
       height:14,
       marginTop:-62,
       marginLeft:190

     },


  });
export default Home
