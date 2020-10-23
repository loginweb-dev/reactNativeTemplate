import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

export default function Card(props) {
    return (
        <View style={ [styles.cardContainer] }>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomWidth: 0,
        backgroundColor: 'white',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3 },
        // borderRadius: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 80,
        width: '100%',
        elevation: 3,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 2
    }
});