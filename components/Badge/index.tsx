import { View, Text } from "react-native";

import { IBadgeProps, IBadgeTypes } from "../../types";
import styles from "./Badge.styles";

const Badge: React.FC<IBadgeProps> = ({ type = "info", value }) => {

    const types: IBadgeTypes = {
        warning: { bg: "#FFF0D2", text: "#FDA901" },
        success: { bg: "#EEF3DF", text: "#8FBD12" },
        info: { bg: "", text: "#B7B232" }
    }
    return (
        <View style={{
            ...styles.container,
            backgroundColor: types[type].bg
        }}>
            <Text style={{
                ...styles.textValue,
                color: types[type].text
            }}>{value}</Text>
        </View>
    )
}

export default Badge;