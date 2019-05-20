import {createSwitchNavigator} from "react-navigation";
import SplashContainer from '../containers/SplashContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import HomeContainer from '../containers/HomeContainer'

export default AppNavigator = createSwitchNavigator({
        SplashContainer: SplashContainer,
        LoginContainer: LoginContainer,
        RegisterContainer: RegisterContainer,
        HomeContainer: HomeContainer
    },
    {
        initialRouteName: "SplashContainer",
        mode: 'card',
        defaultNavigationOptions: {
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white'
        }
    });