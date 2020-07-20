import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Line from '../components/Line';

export default class PeopleDatailPage extends React.Component{
    render(){
        const {people} = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Image
                    source={{ uri: people.picture.large}}
                    style={styles.avatar}
                />
                <Line label="E-mail: " content={people.email} />
                <Line label="Cidade: " content={people.location.city} />
                <Line label="Tel: " content={people.phone} />
                <Line label="Cel: " content={people.cell} />
                <Line label="Nacionalidade: " content={people.nat} />
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 300,
        marginBottom: 15,
    }
});
