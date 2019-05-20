import {createStackNavigator} from "react-navigation";
import HomeContainer from '../containers/HomeContainer'


export default AppNavigator = createStackNavigator({
        HomeContainer: HomeContainer,
    },
    {
        initialRouteName: "HomeContainer",
        mode: 'card',
    });