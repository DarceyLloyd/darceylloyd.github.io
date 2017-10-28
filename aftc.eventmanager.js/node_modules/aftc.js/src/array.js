// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayRemoveIndex = function (array, index) {
	return array.splice(index);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


window.isArrayInString = function ($string, $array) {
	return (new RegExp('(' + $array.join('|').replace(/\./g, '\\.') + ')$')).test($string);
}



window.isArray = function(obj) {
	return !!obj && obj.constructor === Array;
	//return arr.constructor == Array;
}

