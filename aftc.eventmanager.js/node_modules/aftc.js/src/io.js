// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.AJAXLoad = function($url, $method, $data, $callback) {

	$.ajax({
		method: $method,
		url: $url,
		data: $data,
		success: function (response) {
			$callback(response);
			//return response;
		},
		error: function (jqXHR, textStatus) {
			var msg = "";
			msg += "AFTC.JS: AJAXLoad(): ERROR\n";
			msg += "\t" + "URL: [" + $url + "]\n";
			msg += "\t" + "method: [" + $method + "]\n";
			msg += "\t" + "data: [" + $data + "]\n";
			msg += "\t" + "status: [" + ajax.status + "]\n";
			msg += "\t" + "statusText: [" + ajax.statusText + "]\n";
			msg += "\t" + "jqXHR: [" + jqXHR + "]\n";
			msg += "\t" + "textStatus: [" + textStatus + "]\n";
			log(msg);
		}
	});
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



window.loadJSONFile = function($url, $callback) {
	/*
	 var $data = $.getJSON($file, function(result){
	 $.each(result, function(key, val){
	 //$("div").append(field + " ");
	 //log(val);
	 });
	 return result;
	 });
	 */

	var ajax = $.ajax({
		dataType: "json",
		url: $url,
		global: false,
		success: function (data) {
			$callback(data);
		},
		error: function (data) {
			var msg = "";
			msg += "loadJSONFile: ERROR\n";
			msg += "\t" + "URL: [" + $url + "]\n";
			//msg += "\t" + "ID: [" + $id + "]\n";
			//msg += "\t" + "method: [" + $method + "]\n";
			msg += "\t" + "data: [" + data + "]\n";
			msg += "\t" + "status: [" + ajax.status + "]\n";
			msg += "\t" + "statusText: [" + ajax.statusText + "]\n";
			log(msg);
		}
	});
}

