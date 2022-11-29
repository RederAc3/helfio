import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#fff",
        alignSelf: 'stretch',
        margin: 10,
        marginBottom: 0,
        padding: 10,
        paddingTop: 15,
        borderRadius: 16,
        shadowColor: '#a0aa8b',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5
    },
    title: {
        fontSize: 18,
        lineHeight: 26
    },
    statusRisk: {
        color: "#B7B232",
        lineHeight: 21.17,
        fontSize: 18,
        fontWeight: "bold",
        padding: 5
    },
    buttonMore: {
        backgroundColor: "#F6F6F6",
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 6,
        padding: 5,
    },
    textMore: {
        color: "#97A98F",
        lineHeight: 26
    }
});
