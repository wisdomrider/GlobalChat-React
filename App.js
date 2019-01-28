import React from 'react';

import Login from './app/login'
import Register from "./app/reg"
import {Router, Scene} from 'react-native-router-flux';
import Home from './app/home';

export default class App extends React.Component {
    render() {
        return (
            <Router backAndroidHandler={() => {
            }}>
                <Scene key="root" hideNavBar>
                    <Scene key="Login" component={Login}/>
                    <Scene key="Register" component={Register}/>
                    <Scene key="Home" component={Home} title="Home"/>

                </Scene>
            </Router>
        );
    }
}

