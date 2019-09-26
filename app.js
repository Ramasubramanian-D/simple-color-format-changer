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
    rgb.formatted = "rgb("+red+","+green+","+blue+")";

    return rgb;
}

module.exports.rgbToHex = (red, green, blue) => {
    redHex = toHex(red);
    greenHex = toHex(green);
    blueHex = toHex(blue);

    hex = "#"+redHex+greenHex+blueHex
    
    return hex;
}

module.exports.hexToHsl = (hex) => {
    rgbVal =  this.hexToRgb(hex);
    hsl = this.rgbToHsl(rgbVal.red, rgbVal.green, rgbVal.blue);
    return hsl;
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
    
    saturation = delta == 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));
    
    saturation = +(saturation * 100).toFixed(1);
    light = +(light * 100).toFixed(1);

    let hsl = new Object;
    hsl.hue = hue;
    hsl.saturation = saturation;
    hsl.light = light;
    hsl.combined = hue+","+saturation+","+light;
    hsl.formatted = "hsl("+hue+","+saturation+","+light+")";

    return hsl;
}

module.exports.hslToRgb = (hue, saturation, light) => {
    saturation  /= 100;
    light /= 100;

    let a = (1 - Math.abs(2 * light - 1)) * saturation;
    let b = a * (1 - Math.abs((hue / 60) % 2 - 1));
    let c = light - a/2;

    let rgb = new Object;

    if (0 <= hue < 60) {
        rgb.red = a; 
        rgb.green = b; 
        rgb.blue = 0;
    } else if (60 <= hue < 120) {
        rgb.red = b; 
        rgb.green = a; 
        rgb.blue = 0;
    } else if (120 <= hue < 180) {
        rgb.red = 0; 
        rgb.green = a; 
        rgb.blue = b;
    } else if (180 <= hue < 240) {
        rgb.red = 0; 
        rgb.green = b; 
        rgb.blue = a;
    } else if (240 <= hue < 300) {
        rgb.red = b; 
        rgb.green = 0; 
        rgb.blue = a;
    } else if (300 <= hue < 360) {
        rgb.red = a; 
        rgb.green = 0; 
        rgb.blue = b;
    }
    
    rgb.red = Math.round((rgb.red + c) * 255);
    rgb.green = Math.round((rgb.green + c) * 255);
    rgb.blue = Math.round((rgb.blue + c) * 255);

    rgb.combined = rgb.red+","+rgb.green+","+rgb.blue;
    rgb.formatted = "rgb("+rgb.red+","+rgb.green+","+rgb.blue+")";
    
    return rgb;
}

module.exports.hslToHex = (hue, saturation, light) => {
    rgb = this.hslToRgb(hue, saturation, light);
    hex = this.rgbToHex(rgb.red, rgb.green, rgb.blue);

    return hex;
}

// Color systems with opacity

module.exports.rgbaToHsla = (red, green, blue, opacity) => {
    hsla = this.rgbToHsl(red, green, blue);
    hsla.opacity = opacity;
    hsla.formatted = "hsla("+hsla.hue+","+hsla.saturation+","+hsla.light+","+hsla.opacity+")";
    hsla.combined = hsla.hue+","+hsla.saturation+","+hsla.light+","+hsla.opacity;

    return hsla;
}

module.exports.hslaToRgba = (hue, saturation, light, opacity) => {
    rgba = this.hslToRgb(hue, saturation, light);
    rgba.opacity = opacity;
    rgba.formatted = "rgba("+rgba.red+","+rgba.green+","+rgba.blue+","+rgba.opacity+")";
    rgba.combined = rgba.red+","+rgba.green+","+rgba.blue+","+rgba.opacity;

    return rgba;
}
const toHex = (decimalVal) => {
    if(decimalVal > 255) {
        decimalVal = 255;
    }
    decimalVal = parseInt(decimalVal);
    decimalVal = decimalVal.toString(16);
    
    return decimalVal;
} 