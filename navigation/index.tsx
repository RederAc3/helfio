
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import TabBarItem from "../components/TabBarItem";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const RootNavigator: React.FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Health"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        position: "absolute",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 94,

                        shadowColor: "#525252",
                        shadowOffset: {
                            width: 0,
                            height: -5
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 3.5,
                        elevation: 5
                    }
                ]
            }}
        >
            <Tab.Screen
                name="MyPlan"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarItem
                            title={"MyPlan"}
                            image={require("../assets/icons/myplan.png")}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Insights"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarItem
                            title={"Insights"}
                            image={require("../assets/icons/insights.png")}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Health"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarItem
                            title={"Health"}
                            image={require("../assets/icons/health.png")}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Awards"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarItem
                            title={"Awards"}
                            image={require("../assets/icons/awards.png")}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Chatting"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarItem
                            title={"Chatting"}
                            image={require("../assets/icons/chatting.png")}
                            focused={focused}
                        />
                    )
                }}
            />
        </Tab.Navigator >
    )
}