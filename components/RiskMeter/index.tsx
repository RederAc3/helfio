import { View, Text } from 'react-native';

import Badge from "../Badge";
import styles from "./RiskMeter.styles";

import { IRiskMeterProps } from "../../types";

const RiskMeter: React.FC<IRiskMeterProps> = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Badge value={value} />
            <View style={styles.buttonMore}>
                <Text style={styles.textMore}>Learn more</Text>
            </View>
        </View>
    );
};

export default RiskMeter;