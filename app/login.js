import React from 'react';
import { Alert, TextInput, View, Text, Button, ToastAndroid } from 'react-native';
import style from './style'
import { Actions } from 'react-native-router-flux'
var user = "", pw = "";
export default class Login extends React.Component {
  componentWillMount() {
    user = ""
    pw = ""
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.statusBar}>Welcome To Global Chat</Text>
        <Text style={style.text}>Login</Text>
        <TextInput onChangeText={text => user = text} placeholder="Enter Your Email" style={style.edittext} />
        <TextInput onChangeText={text => pw = text} placeholder="Enter Your Password" secureTextEntry={true} style={style.edittext} />
        <View style={{ alignItems: 'center', marginTop: 4 }}>
          <Button onPress={() => {
            if (user == "" || pw == "") { }
            else if (!user.includes('@') || !user.includes('.'))
              Alert.alert('', 'Please Enter a Valid Email !');
            else {
              if (user == this.props.user &&  pw == this.props.pw) {
                ToastAndroid.show('Logged SuccesFully !', 4000)
                Actions.Home({ 'user': user })
              }
              else Alert.alert('', 'Username and password not matched !')
            }
          }} title='Login' />
        </View>
        <Text style={style.text}>Or</Text>
        <View style={{ alignItems: 'center', marginTop: 5 }}>
          <Button onPress={() => Actions.Register()} color='green' title='Register From Here' />
        </View>
        <Text style={{margin:20,textAlign:'center'}}> Make a account and start to chat !</Text>
      </View>
    );
  }


}
