import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";

import Badge from "../Badge";

import { printProgress } from "../../functions";
import { IRoundMeterProps, IPieArrayElements } from "../../types";
import styles from "./RoundMeter.styles";

const RoundMeter: React.FC<IRoundMeterProps> = ({
    title,
    value,
    pieElements,
    primary,
    secondary,
    min,
    max,
    isDecimals,
    badgeType,
    badgeValue
}) => {

    let pieArray: Array<IPieArrayElements> = [];
    let pieColors: Array<string> = [];

    for (let i = 0; i < pieElements; i++) {
        pieArray.push({ x: " ", y: 1 })
    }

    printProgress(value, min, max, pieElements, isDecimals, pieColors, primary, secondary);

    return (
        <View style={styles.container}>
            <View style={styles.descMeterWrapper}>
                <Text style={styles.valueMeter}>{value}</Text>
                <Text style={styles.titleMeter}>{title}</Text>
                <Badge type={badgeType} value={badgeValue}/>
            </View>
            <VictoryPie
                colorScale={pieColors.reverse()}
                data={pieArray}
                innerRadius={65}
                padAngle={5}
                endAngle={-90}
                startAngle={90}
                width={250}
                height={250}
            />
        </View>
    );
};

export default RoundMeter;
