// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.radToDeg = function (input) {
	return input * (180 / Math.PI);
}
window.rad2deg = function(arg){
	return radToDeg(arg);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.degToRad = function (input) {
	return input * (Math.PI / 180);
}
window.deg2rad = function(arg){
	return degToRad(arg);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -









// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.boolToString = function (arg) {

	if (!arg || arg == undefined || typeof(arg) != "boolean"){
		console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
		return "error";
	}
	
	if (arg) {
		return "true";
	} else {
		return "false";
	}
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.stringToBool = function (str) {

	if (!str || str == undefined || typeof(str) != "string"){
		console.log("AFTC.js: Conversion.js: stringToBoolean(str): Error - input str is not valid!");
		return false;
	}

	switch (str.toLowerCase()) {
		case "y":
			return true;
			break;
		case "yes":
			return true;
			break;
		case "1":
			return true;
			break;
		case "true":
			return true;
			break;
		case "y":
			return true;
			break;
		default:
			return false;
			break;
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
