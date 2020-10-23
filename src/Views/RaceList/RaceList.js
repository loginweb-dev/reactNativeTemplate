import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';

// UI
import CardRace from "../../UI/CardRace";
import ClearFix from "../../UI/ClearFix";

export default class RaceList extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={ styles.container }>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 10 }}>
                    <CardRace
                        customer='Juan perez'
                        avatar=''
                        description='Calle 18 de nov. nro 567'
                        amount='25 Bs.'
                    />
                    <CardRace
                        customer='Jorge Parada'
                        avatar=''
                        description='Av. del mar esq Nicolas Suarez'
                        amount='20 Bs.'
                    />
                    <CardRace
                        customer='María Nosa'
                        avatar=''
                        description='Calle Moxos esq Beni'
                        amount='17 Bs.'
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
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingVertical: 20,
        paddingHorizontal: 10
    }
});