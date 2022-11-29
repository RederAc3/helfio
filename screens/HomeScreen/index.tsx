import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';

import Header from '../../components/Header';
import RiskMeter from '../../components/RiskMeter';
import RoundMeter from '../../components/RoundMeter';

import styles from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainData}>
                    <Image
                        style={styles.person}
                        resizeMode={"contain"}
                        source={require("../../assets/person.png")}
                    />
                    
                    <View>
                        <RoundMeter
                            primary={"#8FBD12"}
                            secondary={"#E6EFCF"}
                            title={"BMI"}
                            value={23}
                            pieElements={5}
                            min={16}
                            max={40}
                            badgeType={"success"}
                            badgeValue={"Normal"}
                        />

                        <RoundMeter
                            primary={"#FDA901"}
                            secondary={"#F2EFDC"}
                            title={"WHR"}
                            value={0.96}
                            isDecimals={true}
                            pieElements={3}
                            min={0}
                            max={1.5}
                            badgeType={"warning"}
                            badgeValue={"Average"}
                        />

                    </View>
                </View>
                <View style={styles.riskMeters}>
                    <RiskMeter
                        title="Risk of developing diabetes over 10 years"
                        value={"Low"}
                    />
                    <RiskMeter
                        title="Cardiovascular risk"
                        value={"Low"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
