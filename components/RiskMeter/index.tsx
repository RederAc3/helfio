import { View, Text } from 'react-native';

import styles from "./RiskMeter.styles";

import { IRiskMeterProps } from "../../types";

const RiskMeter: React.FC<IRiskMeterProps> = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.statusRisk}>{value}</Text>
            <View style={styles.buttonMore}>
                <Text style={styles.textMore}>Learn more</Text>
            </View>
        </View>
    );
};

export default RiskMeter;