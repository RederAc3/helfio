import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    descMeterWrapper: {
        paddingTop: 20,
        alignItems: "center",
        position: "absolute",
    },
    valueMeter: {
        fontSize: 40,
        color: "#293C32"
    },
    titleMeter: {
        fontSize: 20,
        marginBottom: 10 
    },

    badgeMeter: {
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 16
    },
    titleBadgeMeter: {
        fontSize: 18,
        color: "#8FBD12"
    }
})