const progressCalc = (
    value: number,
    min: number,
    max: number,
    pieElements: number,
    isDecimals: boolean | undefined
): number => {

    const percentCalc = (((value - min) * 100) / (max - min)) / 10
    const percentRound = Math.round(percentCalc);
    const percentFloor = Math.floor(percentRound / pieElements);

    if (!isDecimals) {
        return Math.floor(percentCalc)
    }

    return percentFloor
};

export const printProgress = (
    value: number, 
    min: number, 
    max: number, 
    pieElements: number, 
    isDecimals: boolean | undefined, 
    pieColors: Array<string>, 
    primary: string, 
    secondary: string
    ): void => {

    for (let i = 0; i < pieElements; i++) {
        pieColors.push(secondary)
    }

    const numberArray = progressCalc(value, min, max, pieElements, isDecimals);
    pieColors[numberArray - 1] = primary;
}