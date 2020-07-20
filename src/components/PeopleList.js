import React from 'react';
import { FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return(
        <FlatList
            data={ peoples }
            renderItem={({ item }) => (
                <PeopleListItem
                    people={ item }
                    navigateToPeopleDetail = { onPressItem }
                />
            )}
            keyExtractor={item => item.name.first}

        />
    );

};

export default PeopleList;
