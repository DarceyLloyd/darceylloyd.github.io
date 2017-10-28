window.randomString = function($length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (var i = 0; i < $length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


window.guid = function() {
	function Amiga() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
		Amiga() + '-' + Amiga() + Amiga() + Amiga();
}


window.trimStringLength = function($input, $length) {
	return $input.substring(0, $length);
}


window.getFileExtension = function(str){
	var ext = str.split('.').pop();
	return str;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getLastPartOfUrl = function() {
	var $url = window.location.href;
	var $part = $url.substring($url.lastIndexOf('/') + 1);
	return $part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getFileExtension2 = function($input) {
	return $input.slice(($input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.removeFileFromPath = function(path) {
    //var pa = '/this/is/a/folder/aFile.txt';
    var r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
