# Simple-color format changer

This is a simple package that lets you to change the color format from one format to another. 

## Possible color changes

### Hex to HSL `hexToHsl(hexvalue)`
This function converts colors in Hexadecimal format to Hue Saturation and Light format.

    
    Example - .hexToHsl("#AB3456")
    
### Hex to RGB `hexToRgb(hexvalue)`
This function converts colors in Hexadecimal format to Red Green and Blue format.
    
    
    Example - .hexToRgb("#ABCDEF")
    
### HSL to Hex `hslToHex(hue, sat, light)`
This function converts colors in Hue Saturation and Light format to Hexadecimal format.

    
    Example - .hslToHex("274","100","50")
    
### HSL to RGB `hexToRgb(hue, sat, light)`
This function converts colors in Hue Saturation and Light format to Red Green and Blue format.

    
    Example - .hslToRgb("123","45","67")
    
### HSLA to RGBA `hexToRgb(hue, sat, light, alpha)`
This function converts colors in Hue Saturation Light and Alpha format to Red Green Blue and Alpha format.

    
    Example - .hslaToRgba("123","54","43","0.5")
    
### RGB to Hex `rgbToHex(red, green, blue)`
This function converts colors in Red Green and Blue format to Hexadecimal format.

    
    Example - .rgbToHex("45","45","56")
    
### RGB to HSL `hexToRgb(red, green, blue)`
This function converts colors in Red Green and Blue format to Hue Saturation and Light format.

    
    Example - .rgbToHsl("34","98","76")
    
### RGBA to HSLA `hexToRgb(red, green, blue, alpha)`
This function converts colors in Red green Blue and Alpha format to Hue Saturation Light and Alpha format.

    
    Example - .rgbaToHsla("#ABCDEF")
    

## Output format

The output of the all the above functions are in the following format :

    {
        ... // individual componet values
        "combined" : // combined unformated value
        "formatted" : //combined formated value
    }

For example, for the Hexadecimal `#123456` to RGB function the output will be: 

    {
        "red" : "18" // value of Red
        "green" : "52" // value of Green
        "blue" : "86" // value of Blue
        "combined" : "18,52,86" // combined unformated value
        "formatted" : "rgb(18,52,86)" // combined formated value
    }

    
