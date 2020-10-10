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

class Register extends Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <BackgroundColor
                    title='Registrarse'
                    backgroundColor='#45A4C0'
                />
                <ScrollView>
                    <TextInputAlt
                        label='Nombre completo'
                        placeholder='Tu nombre completo'
                        autoCapitalize='words'
                    />
                    <TextInputAlt
                        label='Número de celular'
                        placeholder='Tu número de celular'
                        keyboardType='phone-pad'
                    />
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
                    <View style={{ margin: 20, marginTop: 30 }}>
                        <ButtonBlock
                            title='Registrarse'
                            color='white'
                            borderColor='#3b5998'
                            colorText='#3b5998'
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

export default Register;