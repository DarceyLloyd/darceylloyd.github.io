// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getHSLColor = function (value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomRGBString = function () {
    var $r = Math.round(Math.random() * 255);
    var $g = Math.round(Math.random() * 255);
    var $b = Math.round(Math.random() * 255);
    var rgb = "rgb(" + $r + "," + $g + "," + $b + ")";
    return rgb;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomHexColor = function () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.rgb2Hex = function (r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.rgbToHex = function (r, g, b) {
    function getHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var rr = getHex(r);
    var gg = getHex(g);
    var bb = getHex(b);

    return "#" + rr + gg + bb;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.numberToHex = function (num) {
    return num.toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





window.rgb2hsv = function() {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}






// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var AFTC = AFTC || {}
AFTC.Color = function (arg_color) {

    // Var ini
    var me = this;

    var params = {
        color: {
            r: 0,
            g: 0,
            b: 0
        }
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function init() {
        //log("AFTC.Color.init()");

        // Process arg_color
        var hex = "";
        var num = "";
        var rgb = "";
        var str = "";
        var conversionError = false;

        switch (typeof (arg_color)) {
            case "string":
                // hex or rgb
                if (arg_color[0] == "#") {
                    //log("AFTC.Color.init(): Converting hex format [" + arg_color + "] to RGB");
                    rgb = hexToRgb(arg_color);
                    params.color.r = rgb.r;
                    params.color.g = rgb.g;
                    params.color.b = rgb.b;
                } else {
                    //log("AFTC.Color.init(): Converting rgb string to RGB");
                    str = arg_color.replace("rgb(", "");
                    str = str.replace(")", "");
                    var arr = str.split(",");
                    if (arr.length == 3) {
                        params.color.r = parseInt(arr[0]);
                        params.color.g = parseInt(arr[1]);
                        params.color.b = parseInt(arr[2]);
                    } else {
                        conversionError = true;
                    }
                }
                break;
            // case "number":
            //     //log("AFTC.Color.init(): Converting number format 0x000000 to RGB");
            //     hex = "#" + numberToHex(arg_color);
            //     log(arg_color);
            //     log(hex);
            //     rgb = hexToRgb(hex);
            //     params.color.r = rgb.r;
            //     params.color.g = rgb.g;
            //     params.color.b = rgb.b;
            //     break;
            case "object":
                var isArray = !!arg_color && arg_color.constructor === Array;
                if (!isArray) {
                    conversionError = true;
                } else if (arg_color.length == 3) {
                    //log("AFTC.Color.init(): Converting array to RGB");
                    params.color.r = parseInt(arg_color[0]);
                    params.color.g = parseInt(arg_color[1]);
                    params.color.b = parseInt(arg_color[2]);
                } else {
                    conversionError = true;
                }
                break;
            default:

                break;
        }


        //log(params.color.rgb);

        if (conversionError) {
            var msg = "";
            msg += "AFTC.Color(): ERROR - Unable to conver the color you supplied [" + arg_color + "] to a useful RGB value!\n";
            msg += "Formats supported are:" + "\n";
            msg += "\t" + "new AFTC.Color('rgb(50,60,70)');" + "\n";
            msg += "\t" + "new AFTC.Color('50,60,70');" + "\n";
            msg += "\t" + "new AFTC.Color([50,60,70]);" + "\n";
            msg += "\t" + "new AFTC.Color('#FFFFFF');" + "\n";
            throw (msg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var adjustBrightness = function (percent) {
        //log("adjustBrightness(): " + percent);
        if (percent == 0) {
            return;
        } else {
            if (percent > 0){
                shadeColor(params.color,percent);
            } else {
                shadeColor(params.color,percent);

            }
            //log("################### - " + rgbToHex(params.color) + " " + percent + "%");
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    // Utility functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Stack exchange was full of rubbish (event hat shadeBlendConvert), done my own based on percentage of number base 255
    function shadeColor(rgbObj, percent) {
        var r = rgbObj.r;
        var g = rgbObj.g;
        var b = rgbObj.b;

        var redPercent = (100/255) * r; // The current value percent of 255
        var redTarget = Math.ceil(redPercent + percent);
        if (redPercent > 100){
            redTarget = 100;
        }

        var greenPercent = (100/255) * g; // The current value percent of 255
        var greenTarget = Math.ceil(greenPercent + percent);
        if (greenTarget > 100){
            greenTarget = 100;
        }

        var bluePercent = (100/255) * b // The current value percent of 255
        var blueTarget = Math.ceil(bluePercent + percent);
        if (blueTarget > 100){
            blueTarget = 100;
        }
        
        
        //log(rgbObj)
        //log("redPercent:" + redPercent.toFixed(2) + "%  redTarget:" + redTarget.toFixed(2));
        // log("greenPercent:" + greenPercent.toFixed(2) + "%  greenTarget:" + greenTarget.toFixed(2));
        //log("bluePercent:" + bluePercent.toFixed(2) + "%  blueTarget:" + blueTarget.toFixed(2));

        var step = 255/100;

        params.color.r = Math.round(step * redTarget);
        params.color.g = Math.round(step * greenTarget);
        params.color.b = Math.round(step * blueTarget);


    }




    var rgbToHex = function (obj) {
        var r = obj.r;
        var g = obj.g;
        var b = obj.b;

        function getHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        var rr = getHex(r);
        var gg = getHex(g);
        var bb = getHex(b);

        return "#" + rr + gg + bb;
    }
    var rgb2hex = function (obj) {
        var red = obj.r;
        var gren = obj.g;
        var blue = obj.b;

        var rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
    }

    var hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    var numberToHex = function (num) {
        return num.toString(16);
    }


    var rgbToNumber = function RGBToHex(obj) {
        var r = obj.r;
        var g = obj.g;
        var b = obj.b;

        var v = r << 16 | g << 8 | b;
        return v;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    // Simulate constructor
    init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Public
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    return {
        lighten: function (percent) {
            adjustBrightness(percent);
        },
        darken: function (percent) {
            adjustBrightness(-percent);
        },
        getHex: function () {
            return rgbToHex(params.color);
        },
        getRGB: function () {
            return {r:params.color.r,g:params.color.g,b:params.color.b};
        },
        getRGBString: function () {
            return "rgb(" + params.color.r + "," + params.color.g + "," + params.color.b + ")";
        },
        getNumber: function () {

            return rgbToNumber(params.color) + " ";
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

