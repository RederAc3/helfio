import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: "stretch",
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15,
        ...Platform.select({
            android: {
                paddingTop: 30
            }
        })
    },
    heartCircles: {
        position: "absolute",
        width: 250,
        height: 250,
        ...Platform.select({
            android: {
                top: -50,
                left: -30,
            },
            ios: {
                top: -70,
                left: -35,
            }
        })
    },
    greenBlur: {
        position: "absolute",
        width: 350,
        height: 350,
        top: -80,
        right: -40
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        lineHeight: 31.75,
        color: "#293C32"
    },
    description: {
        color: "#97A98F",
        fontSize: 20
    },
    iconsWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    notificationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 13,
        borderRadius: 20,
        marginRight: 10,
        shadowColor: '#a0aa8b',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5
    },
    notificationIcon: {
        width: 20,
        height: 25,
        marginRight: 5
    },
    notificationsNumber: {
        fontSize: 16
    },
    profileWrapper: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 50,
        shadowColor: '#a0aa8b',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5
    },
    profileIcon: {
        width: 40,
        height: 40
    }

});