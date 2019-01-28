import React from 'react';
import { Alert, TextInput, View, Text, Button,ToastAndroid } from 'react-native';
import style from './style'
import { Actions } from 'react-native-router-flux'
var user = "", pw = "";
export default class Register extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Register</Text>
                <TextInput onChangeText={text => user = text} placeholder="Enter Your Email" style={style.edittext} />
                <TextInput onChangeText={text => pw = text} placeholder="Enter Your Password" secureTextEntry={true} style={style.edittext} />
                <View style={{ alignItems: 'center', marginTop: 4 }}>
                    <Button onPress={() => validateRegister()} title='Register' />
                </View>
                <Text style={style.text}>Or</Text>
                <View style={{ alignItems: 'center', marginTop: 5 }}>
                    <Button onPress={() => Actions.pop()} color='green' title='Login From Here' />
                </View>
            </View>
        );
    }
}



validateRegister = () => {
    if (user == "" || pw == "") { }
    else if (!user.includes('@') || !user.includes('.'))
      Alert.alert('', 'Please Enter a Valid Email !');
    else {
      ToastAndroid.show('Registered SuccesFully Now Login !',3000)
      Actions.Login({'user':user,'pw':pw})
    }
}
