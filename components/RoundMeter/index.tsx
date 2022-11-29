import { View } from "react-native";
import { VictoryPie, VictoryContainer } from "victory-native";

import styles from "./RoundMeter.styles";

const RoundMeter: React.FC = () => {

    return (
        <View
            style={styles.container}>
            <VictoryPie
                colorScale={["#E6EFCF", "#E6EFCF", "#E6EFCF", "#8FBD12", "#E6EFCF"]}
                data={[
                    { x: " ", y: 1 },
                    { x: " ", y: 1 },
                    { x: " ", y: 1 },
                    { x: " ", y: 1 },
                    { x: " ", y: 1 }
                ]}
                containerComponent={
                    <VictoryContainer
                        responsive={true}
                        style={styles.victory}
                    />
                }
                innerRadius={65}
                padAngle={5}
                endAngle={-90}
                startAngle={90}
                width={250}
                height={250}
            />

            <VictoryPie
                colorScale={["#F2EFDC", "#FDA901", "#F2EFDC"]}
                data={[
                    { x: " ", y: 1 },
                    { x: " ", y: 1 },
                    { x: " ", y: 1 }
                ]}
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
