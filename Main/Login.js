
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  NavigatorIOS,
  Button,
  StatusBar
} from 'react-native';
import axios from 'axios'
import Home from './Home.js'
const background = require("./Images/bg.jpeg");
const personicon = require("./Images/person.jpg");
const passwordicon = require("./Images/password.jpg");
const googleicon= require("./Images/google.png");
const facebookicon = require("./Images/FB.png");
const logo = require("./Images/Logo.jpg");
const facebooklogo = require("./Images/fblogo.jpg");
const Googlelogo = require("./Images/googleLogo.jpg");
const Base_URL='https://www.reddit.com/r/movies/top.json?limit=5';
class Login extends React.Component {
  static navigationOptions = {
    headerStyle: {
       backgroundColor: '#021355',
       elevation: null},
  }
  constructor(props)
  {
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }
  handleChange(event)
  {
    this.setState({
      username:event.nativeEvent.text
    });
    console.log('USERNAME',event.nativeEvent.text);
  }
  handleChangePass(event)
  {
    this.setState({
      password:event.nativeEvent.text
    });
    console.log('PASSWORD',event.nativeEvent.text);
  }
  _handleInput(){
    axios.get(Base_URL)
      .then(function (response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          })
      .catch(function (error) {
        console.log(error);
      });
      // this.props.navigation.navigate('Home')
  }
  handleSubmit(){
    //fetch data from git
    this.setState({
      isLoading:true

    });
    console.log('SUBMIT',this.state.username);
    console.log('SUBMIT',this.state.password);
     if (this.state.username === "Anna@gmail.com" & this.state.password ==="anna123")
     {
          this.props.navigation.navigate('Home')
     }
     else {
       alert("Username or Password was wrong");
     }

  }
  render() {
    return (
      <View style={styles.outerContainer}>
      <View style={styles.container}/>
      <View>
          <Image
            source={logo}
            style={styles.Notifybackground}
            resizeMode='contain'
            />
          <View style={styles.inputWrapEmail}>
             <View style={styles.iconWrap}>
                 <Image
                   source={personicon}
                   style={styles.icon}
                   resizeMode='contain'
                   />
             </View>
              <TextInput
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
                 placeholderTextColor='white'
                 placeholder='Email'
                 style={styles.input}
              />
          </View>
          <View style={styles.inputWrapPassword}>
              <View style={styles.iconWrap}>
                 <Image
                 source={passwordicon}
                 style={styles.icon}
                 resizeMode='contain'
                 />
              </View>
              <TextInput
                  color='black'
                  value={this.state.password}
                  onChange={this.handleChangePass.bind(this)}
                  placeholderTextColor='white'
                  placeholder='Password'
                  secureTextEntry
                  style={styles.input}
              />
          </View>
          <View style={styles.button}>
              <Button  color='white'
              onPress={this.handleSubmit.bind(this)}
                // onPress={this._handleInput}
                title="Login"
              />
          </View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.facebooklogoStyle}>
              <Button  color='white'
              onPress={this.handleSubmit.bind(this)}
                title="Log In With Facebook"
              />
              <Image
                source={facebooklogo}
                style={styles.facebookiconstyle}
                resizeMode='contain'

              />
          </View>
          <View style={styles.GoogleStyle}>
              <Button  color='white'
              onPress={this.handleSubmit.bind(this)}
                title="Log In With Google"
              />
              <Image
                source={Googlelogo}
                style={styles.googleiconstyle}
                resizeMode='contain'
              />
          </View>
          <TouchableOpacity activeOpacity={.5}>
          <View style={styles.frgtView}>
             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
           </View>
          </TouchableOpacity>
          <View style={styles.registerButton}>
             <Button  color='white'
                onPress={() => this.props.navigation.navigate('Home')}
                title="Register"
             />
          </View>

      </View>
      <View style={styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer : {
    width:'100%',
    height:'100%',
    backgroundColor:'#021355'
  },
  container: {
    flex: 1,
    marginTop:10
  },
  Notifybackground:{
    width:200,
    height:200,
    marginLeft:80,
    marginRight:60,
    marginTop:-70
  },
  inputWrapEmail:{
    flexDirection:"row",
    marginVertical:10,
    height:50,
    backgroundColor:'#3E4B66',
    marginLeft:26,
    marginRight:26,
    borderRadius:8,
    marginTop:-34,

  },
  inputWrapPassword:{
    flexDirection:"row",
    marginVertical:10,
    height:50,
    backgroundColor:'#3E4B66',
    marginLeft:26,
    marginRight:26,
    borderRadius:8,
    marginTop:-2
  },
  input:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'#3E4B66',
    borderRadius:8,
    marginLeft:26,
    marginRight:26,
    color:'white'
    },
  button:{
    backgroundColor:"#A35D3F",
    paddingVertical:15,
    marginVertical:15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginLeft:26,
    marginRight:26,
    height:'9%',
    marginTop:7
    },
  forgotPasswordText:{
    color:"#FFF",
    backgroundColor:"transparent",
    textAlign:"center",
    textDecorationLine:'underline',
    flex:1,
    },
  orText:{
    color:"#FFF",
    backgroundColor:"transparent",
    textAlign:"center",
    marginTop:-3
  },
  facebooklogoStyle:{
    backgroundColor:"#395A94",
    paddingVertical:15,
    marginVertical:15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginLeft:26,
    marginRight:26,
    height:'10%',
    marginTop:16,
  },
  GoogleStyle:{
    backgroundColor:"#D6473C",
    paddingVertical:15,
    marginVertical:15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginLeft:26,
    marginRight:26,
    height:'10%',
    marginTop:0
  },
  frgtView:{
    backgroundColor:"transparent",
    paddingVertical:15,
    marginVertical:1,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    height:'10%',
    marginTop:0,
    flex:1,
    flexDirection:"row",
    marginLeft:-150
  },
  registerButton:{
    backgroundColor:"#002C76",
    paddingVertical:4,
    marginVertical:5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:3,
    marginLeft:190,
    height:'10%',
    marginTop:-40,
    flexDirection:"row",
    width:130,
    borderWidth:2,
    borderColor:"#A35D3F",
  },
  iconWrap:{
  paddingHorizontal:7,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#3E4B66",
  marginLeft:6,
  marginRight:-32

},
icon:{
  width:36,
  height:36
},
googleiconstyle:{
  width:36,
  height:36,
  marginTop:-35,
  marginLeft:-200

},
facebookiconstyle:{
  width:36,
  height:36,
  marginTop:-35,
  marginLeft:-210
}
});
export default Login
