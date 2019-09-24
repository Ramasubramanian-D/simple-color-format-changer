module.exports.hexToRgb = (hex) => {
    let red = hex.slice(1,3);
    let green = hex.slice(3,5);
    let blue = hex.slice(5,7);

    red = parseInt(red, 16);
    green = parseInt(green, 16);
    blue = parseInt(blue, 16);
    
    let rgb = new Object;
    rgb.red = red;
    rgb.green = green;
    rgb.blue = blue;
    rgb.combined = red+","+green+","+blue;

    return rgb;
}

module.exports.rgbToHex = (red, green, blue) => {
    redHex = toHex(red);
    greenHex = toHex(green);
    blueHex = toHex(blue);

    hex = "#"+redHex+greenHex+blueHex
    
    return hex;
}

const toHex = (decimalVal) => {
    if(decimalVal > 255) {
        decimalVal = 255;
    }
    decimalVal = parseInt(decimalVal);
    decimalVal = decimalVal.toString(16);
    
    return decimalVal;
} 