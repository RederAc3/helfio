import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const RootNavigator = () => {

    return (
        <Tab.Navigator initialRouteName="Health">
            <Tab.Screen
                name="MyPlan"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Insights"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Health"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Awards"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Chatting"
                component={HomeScreen}
            />
        </Tab.Navigator >
    )
}