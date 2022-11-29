import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';

import RiskMeter from '../../components/RiskMeter';

import styles from './HomeScreen.styles';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainData}>
                    <Image style={styles.person} resizeMode={'contain'} source={require("../..//assets/person.png")} />
                </View>
                <View style={styles.riskMeters}>
                    <RiskMeter title="Risk of developing diabetes over 10 years" value={"Low"} />
                    <RiskMeter title="Cardiovascular risk" value={"Low"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
