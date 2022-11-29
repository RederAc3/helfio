import { View, Text, Image } from "react-native";

import styles from "./Header.styles";

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.heartCircles}
                resizeMode={'contain'}
                source={require("../../assets/heart-circles.png")} />
            <View>
                <Text style={styles.title}>Health</Text>
                <Text style={styles.description}>Your body condition</Text>
            </View>
            <View>
                <Image
                    style={styles.greenBlur}
                    resizeMode={'contain'}
                    source={require("../../assets/green-blur.png")}
                />
                <View style={styles.iconsWrapper}>
                    <View style={styles.notificationWrapper}>
                        <Image
                            style={styles.notificationIcon}
                            source={require("../../assets/icons/lighting.png")}
                        />
                        <Text style={styles.notificationsNumber}>1</Text>
                    </View>
                    <View style={styles.profileWrapper}>
                        <Image
                            style={styles.profileIcon}
                            source={require("../../assets/icons/profile.png")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;