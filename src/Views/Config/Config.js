import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';

// UI
import Card from "../../UI/Card";
import ClearFix from "../../UI/ClearFix";

export default class Config extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={ styles.container }>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 10 }}>
                    <Card
                    />
                    <ClearFix height={50} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    }
});