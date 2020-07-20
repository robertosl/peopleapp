import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const AppNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({navigation}) => {
            const peopleFistName = navigation.state.params.people.name.first;
            return({
                title: peopleFistName,
                headerTitleStyle: {
                    fontSize: 30,
                    padding: 15,
                }
            });
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Pessoas!',
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: '#6ef77a',
        },
        headerTitleStyle:{
            fontSize: 30,
            color: '#000',
            fontWeight: 'bold',
            padding: 15,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
