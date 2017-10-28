// Requires jQuery (was initially built on v1.12, not seen any issues with 3.x yet)
var $ = require("jquery"); // See webpack.config.js for "resolve"" path for jquery)

// Comment out the ones you don't want/need
import "./src/debug.js";
import "./src/animation.js";
import "./src/conversion.js"; 
import "./src/cookies.js"; 
import "./src/cordova.js"; 
import "./src/datetime.js";  
import "./src/detection.js"; 
import "./src/dom.js"; 
import "./src/form.js"; 
import "./src/graphics.js"; 
import "./src/io.js"; 
import "./src/misc.js"; 
import "./src/string.js"; 
import "./src/validation.js"; 

// Example on including lodash, axios etc from nodemodules via nodejs apps
//var _ = require('lodash'); // https://lodash.com/
//import "../node_modules/axios/dist/axios.min.js"; // https://github.com/mzabriskie/axios




// This section is for more advanced features and access to the AFTC function object
import "./src/aftc.js"; // Required