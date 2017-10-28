/*
 * Author: Darcey@AllForTheCode.co.uk
 * Version: 1.0.3
*/


// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
var AFTC = function () {

    // Var defs
    var me = this; // Accessor

    var params = {
        version: "1.0.3"
    };

    this.version = "1.0.3";

    // Process arguments
    if (arguments[0] && typeof (arguments[0]) == "object") {

        for (var key in arguments[0]) {
            if (params.hasOwnProperty(key)) {
                params[key] = arguments[0][key];
            } else {
                if (console) {
                    if (console.error) {
                        console.error("AFTC : ERROR: Unknown paramater: [" + key + "]");
                    }
                }
            }
        }
    }



    // Public
    // Give access to the AFTC function/object/class simulation
    // Can also use this.fn = function() {}
    return {
        version: function () {
            console.log("AFTC.js v" + params.version);
        }
    };
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #