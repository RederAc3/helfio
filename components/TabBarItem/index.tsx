import { View, Text, Image } from "react-native";

import styles from "./TabBarItem.styles"
import { ITabBarItemProps } from "../../types";

const TabBarItem: React.FC<ITabBarItemProps> = ({ title, image, focused }) => {
    return (
        <View style={styles.containerTabBarItem}>
            <Image
                source={image}
                resizeMode={'contain'}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#01340E" : "#92A09F"
                }}
            />
            <Text style={{top: 5, color: focused ? "#01340E" : "#92A09F" }}>{title}</Text>
        </View>
    )
};

export default TabBarItem;