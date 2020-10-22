import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Alert
} from 'react-native';

// Firebase
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

// UI
import BackgroundColor from "../../../UI/BackgroundColor";
import TextInputAlt from "../../../UI/TextInputAlt";
import ButtonBlock from "../../../UI/ButtonBlock";

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '932613022200-34onbha0rj13ef7gkl8kvoldtrea7gm4.apps.googleusercontent.com',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
});

async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    AccessToken.getCurrentAccessToken()
    .then((data) => {
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        auth().signInWithCredential(facebookCredential);

        // Get information from Facebook API 
        fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${data.accessToken}`)
        .then(res => res.json())
        .then(res => {
            let user = {
                id: null,
                name: res.name,
                email: res.email ? res.email : `${res.id}@loginweb.dev`,
                codePhone: '+591',
                numberPhone: '',
                avatar: `http://graph.facebook.com/${res.id}/picture?type=large`,
                nit: '',
                type: 'facebook'
            }
            Alert.alert(`Hola, ${user.name}`);
        })
        .catch(error => {
            console.log(error);
        })
    })
}

async function onGoogleButtonPress() {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        Alert.alert(`Hola, ${userInfo.user.name}`);
    } catch (error) {
        console.log(error)
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
    }

    test(){
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'TabMenu' }],
            key: null,
        });
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <BackgroundColor
                    title='Login'
                    backgroundColor='transparent'
                />
                <ScrollView style={{ paddingTop: 20 }} showsVerticalScrollIndicator={false}>
                    <View style={ styles.form }>
                        <TextInputAlt
                            label='Email'
                            placeholder='Tu email o celular'
                            keyboardType='email-address'
                        />
                        <TextInputAlt
                            label='Contraseña'
                            placeholder='Tu contraseña'
                            password
                        />
                        <View style={{ margin: 20 }}>
                            <ButtonBlock
                                title='Iniciar sesión'
                                color='white'
                                borderColor='#3b5998'
                                colorText='#3b5998'
                                onPress={() => this.test()}
                            />
                        </View>
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <Text style={{ color: '#B7B7B7' }}>O inicia sesión con tus redes sociales</Text>
                        </View>
                        <View style={{ padding: 30, paddingTop: 20}}>
                            <ButtonBlock
                                icon='ios-logo-facebook'
                                title='Login con Facebook'
                                color='#3b5998'
                                onPress={() => onFacebookButtonPress()}
                            />
                            <ButtonBlock
                                icon='ios-logo-google'
                                title='Login con Google'
                                color='red'
                                onPress={() => onGoogleButtonPress()}
                            />
                            <ButtonBlock
                                title='Registrarse'
                                color='transparent'
                                colorText='#45A4C0'
                                style={{ marginTop: 15 }}
                                onPress={() => this.props.navigation.navigate('Register')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A80DB'
    },
    form:{
        paddingTop: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
});

export default Login;