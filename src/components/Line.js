import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = ({label="", content="-"}) => {
    return(
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        backgroundColor: '#5b3ab4',
        borderBottomWidth: 1,
        borderBottomColor: '#ebb927',
        padding: 15,
    },
    cell: {
        fontSize: 14,
        color: 'white',
    },
    label: {
        fontWeight: 'bold',
        flex: 2,
    },
    content: {
        flex: 10,
    },
    longLabel: {
        fontSize: 10,
    }

});

export default Line;
