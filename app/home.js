import React from 'react'
import { YellowBox, View, TextInput, Text, BackHandler } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SocketIOClient from 'socket.io-client';
import style from './style'

const messages = [];
var message = ""
export default class Home extends React.Component {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp()
            return true;
        })
    }

    constructor(props) {
        super(props)
        this.state = { 'messages': messages }
        this.socket = SocketIOClient("https://socket-js.herokuapp.com")
        this.socket.emit('join', this.props.user + " has entered !")
        this.socket.on('message', (msg) => {
            messages.push(msg + "\n")
            this.setState({ 'messages': messages })
        })
        YellowBox.ignoreWarnings([
            'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
        ]);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={style.statusBar}>Welcome To Global Chat</Text>
                <Text style={{ textAlign: 'center', margin: 10 }}>{this.state.messages}</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TextInput
                        ref={input => this.textInput = input}
                        onEndEditing={() => {
                            this.socket.emit('message', this.props.user + " : " + message)
                            this.textInput.clear()
                        }}
                        onChangeText={(text) => message = text} style={style.edittext}
                        placeholder="Enter Something to Send" />
                </View>

            </View>

        );
    }
}