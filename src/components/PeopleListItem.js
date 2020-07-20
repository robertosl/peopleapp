import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {capitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name;

    return(
        <TouchableOpacity onPress={ () => {
            console.log('clicou em: '+first);
            navigateToPeopleDetail( { people } );
        } }>
            <View  style={styles.line}>
                <Image source={{ uri: people.picture.thumbnail }} style={styles.avatar} />
                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(title)
                    } ${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)
                    }` }
                </Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#5b3ab4',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ebb927',
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        color: '#fff',
        flex: 10,
    },
    avatar: {
        aspectRatio: 1,
        marginRight: 20,
        flex: 2,
        borderRadius: 100
    }
});





export default PeopleListItem;
