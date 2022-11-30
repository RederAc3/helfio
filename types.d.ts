export interface ITabBarItemProps {
    title: string,
    image: Image,
    focused: boolean,
}

export interface IRiskMeterProps {
    title: string,
    value: string
}

export interface IPieArrayElements {
    x: string,
    y: number
}

export interface IRoundMeterProps {
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

export interface IBadgeProps {
    value: string,
    type?: string
}

export interface IBadgeTypeValue {
    bg: string,
    text: string
}

export interface IBadgeTypes {
    warning: IBadgeTypeValue,
    success: IBadgeTypeValue,
    info: IBadgeTypeValue
}