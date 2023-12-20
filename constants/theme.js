//HERE CONTAINS THE COLORS, SIZES THAT WOULD BE USED

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#A45EE9", // purple
    secondary: "#301934",   // dark purple

    // purple: "#592693",
    lightPurple: "#A45EE9",

    darkBlack: "#000",
    magneta: "#af69ed",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};



export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: {  fontSize: SIZES.h1, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h3: {  fontSize: SIZES.h3, lineHeight: 22 },
    h4: {  fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: {  fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;