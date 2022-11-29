export type TabBarItemProps = {
    title: string,
    image: Image,
    focused: boolean,
}

export type RiskMeterProps = {
    title: string,
    value: string
}

export type PieArrayElements = {
    x: string,
    y: number
}

export type RoundMeterProps = {
    title: string,
    value: number,
    primary: string,
    secondary: string,
    min: number,
    max: number,
    isDecimals?: boolean,
    badgeType: string,
    badgeValue: string
    pieElements: number
}
