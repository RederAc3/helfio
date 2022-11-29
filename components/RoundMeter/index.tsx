import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";

import { printProgress } from "../../functions";
import { RoundMeterProps, PieArrayElements } from "../../types";
import styles from "./RoundMeter.styles";

const RoundMeter: React.FC<RoundMeterProps> = ({
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

    let pieArray: Array<PieArrayElements> = [];
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

                <View style={{
                    ...styles.badgeMeter,
                    backgroundColor: badgeType === "success" ? "#EEF3DF" : badgeType === "warning" ? "#FFF0D2" : "#FFF",
                }}>
                    <Text style={{
                        ...styles.titleBadgeMeter,
                        color: badgeType === "success" ? "#8FBD12" : badgeType === "warning" ? "#FDA901" : "#000",
                    }}>{badgeValue}</Text>
                </View>
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
