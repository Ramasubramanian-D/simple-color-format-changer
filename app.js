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

module.exports.rgbToHsl = (red, green, blue) => {
    red = parseInt(red)/255;
    green = parseInt(green)/255;
    blue = parseInt(blue)/255;

    let channelMin = Math.min(red,green,blue);
    let channelMax = Math.max(red,green,blue);
    let delta = channelMax - channelMin;

    let hue,saturation,light;
    if (delta == 0)
        hue = 0;
    else if(channelMax == red)
        hue = (((green - blue) / delta) % 6);
    else if(channelMax == green)
        hue = (((blue - red ) / delta) + 2);    
    else 
        hue = (((red - green) / delta) + 4);
    
    hue = Math.round(hue);
    
    if (hue < 0)
        hue += 360;

    light = ((channelMax + channelMin) / 2);

    if  (delta == 0)
        saturation = 0;
    else 
        saturation = delta / (1 - Math.abs(2 * light - 1))

    saturation = +(saturation * 100).toFixed(1);
    light = +(light * 100).toFixed(1);

    let hsl = new Object;
    hsl.hue = hue;
    hsl.saturation = saturation;
    hsl.light = light;
    hsl.combined = hue+","+saturation+","+light;
    
}

const toHex = (decimalVal) => {
    if(decimalVal > 255) {
        decimalVal = 255;
    }
    decimalVal = parseInt(decimalVal);
    decimalVal = decimalVal.toString(16);
    
    return decimalVal;
} 