
window.getUkDateFromDbDateTime = function ($input) {
	// "2016-04-08 21:11:59" to UK date
	if ($input == "" || $input == null) {
		return "no input";
	}
	var $DateTime = $input.split(" ");
	var $DateParts = $DateTime[0].split("-");
	var $UKDate = $DateParts[2] + "/" + $DateParts[1] + "/" + $DateParts[0];
	return $UKDate;
}

window.getUkDateTimeFromDbDateTime = function ($input) {
	// "2016-04-08 21:11:59" to UK date time
	var $DateTime = $input.split(" ");
	var $DateParts = $DateTime[0].split("-");
	var $TimeParts = $DateTime[1].split(":");
	var $UKDate = $DateParts[2] + "/" + $DateParts[1] + "/" + $DateParts[0];
	var $Time = $TimeParts[0] + ":" + $TimeParts[1];
	return ($UKDate + " " + $Time);
}


window.getSQLDateTime = function () {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	if (month.toString().length == 1) {
		var month = '0' + month;
	}
	if (day.toString().length == 1) {
		var day = '0' + day;
	}
	if (hour.toString().length == 1) {
		var hour = '0' + hour;
	}
	if (minute.toString().length == 1) {
		var minute = '0' + minute;
	}
	if (second.toString().length == 1) {
		var second = '0' + second;
	}
	var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
	return dateTime;
}




window.getDateTime = function (local) {
	// NOTE: MySQL DB DateTime format: "2016-04-08 21:11:59"
	var currentdate = new Date(),
		datetime = "";

	if (!local) {
		local = "us";
	}

	switch (local.toLowerCase()) {
		case "db":
			datetime = getSQLDateTime();
			break;
		case "us":
			datetime = currentdate.toLocaleString('en-US', {
				hour12: false,
				month: "numeric",
				day: "numeric",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			});
			datetime = datetime.replace(",", "");
			break;
		default:
			datetime = currentdate.toLocaleString('en-GB');
			datetime = datetime.replace(",", "");
			break;
	}

	return datetime;
}

