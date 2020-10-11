import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


export default class Config extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={ style.container }>
                <Text>Config</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});