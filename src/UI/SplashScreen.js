import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Configurations
import { env } from '../config/env.js';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          isLoggedIn: false
        }
        this.bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    bootstrapAsync = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        setTimeout(()=>{
            this.setState({
                isLoggedIn: isLoggedIn == '1' ? true : false,
                isLoading: false
            }, () => {
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                    key: null,
                });
            });
        }, 2300);
    };

    render(){
        return (
            <View style={ style.container }>
                <Image 
                    source={{uri: 'https://mystorage.loginweb.dev/storage/Projects/appxi/icon-512x512.png'}}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.title}>{env.appName}</Text>
                <View style={style.footer}>
                    <Text style={style.footerText}>Powered by <Text style={style.footerTextAutor}>{env.autor}</Text></Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Config.color.backgroundSplash,
    },
    logo: {
        flexDirection: 'column',
        width: 200,
        height: 200,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom:10,
        // color: Config.color.backgroundSplashText
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30
    },
    footerText: {
        textAlign: 'center',
        fontSize: 15,
        // color: Config.color.backgroundSplashText
    },
    footerTextAutor: {
        fontWeight: 'bold'
    }
});