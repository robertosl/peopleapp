import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#6ef77a',
        padding: 20,
        marginTop: 50,
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
    }
});

export default Header;
