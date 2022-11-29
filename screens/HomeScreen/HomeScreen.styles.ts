import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    mainData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    person: {
        height: 392,
        width: 163,
        marginBottom: 30,
        marginTop: 30,
    },
    riskMeters: {
        paddingBottom: 100
    }
});
