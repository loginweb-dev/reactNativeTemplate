import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';

// UI
import BackgroundColor from "../../../UI/BackgroundColor";
import TextInputAlt from "../../../UI/TextInputAlt";
import ButtonBlock from "../../../UI/ButtonBlock";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <BackgroundColor
                    title='Login'
                    backgroundColor='#45A4C0'
                />
                <ScrollView>
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
                        />
                    </View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <Text style={{ color: '#B7B7B7' }}>O inicia sesión con tus redes sociales</Text>
                    </View>
                    <View style={{ padding: 30, paddingTop: 20}}>
                        <ButtonBlock
                            icon='facebook'
                            title='Login con Facebook'
                            color='#3b5998'
                        />
                        <ButtonBlock
                            icon='google'
                            title='Login con Google'
                            color='red'
                        />
                        <ButtonBlock
                            title='Registrarse'
                            color='transparent'
                            colorText='#45A4C0'
                            style={{ marginTop: 15 }}
                            onPress={() => this.props.navigation.navigate('Register')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default Login;