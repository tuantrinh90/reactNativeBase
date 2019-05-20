
import { createBottomTabNavigator } from 'react-navigation';
import Tab1 from '../containers/Tab1Container';
import Tab2 from '../containers/Tab2Container';
import HomeContainer from '../containers/HomeContainer';
import Tab4 from '../containers/Tab4Container';
import Tab5 from '../containers/Tab5Container';
import CustomTabBar from '../navigation/TabBarNavigator/CustomTabBar';

export default TabNavigator = createBottomTabNavigator(
    {
        Tab1: Tab1,
        Tab2: Tab2,
        HomeContainer: HomeContainer,
        Tab4: Tab4,
        Tab5: Tab5
    },
    {
        initialRouteName: 'HomeContainer',
        lazy: true,
        tabBarComponent: CustomTabBar,
    }
);