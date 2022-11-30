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
    }
})