window.scrollToElementID = function($id, $speed, $delay) {
	scrollToElement($("#"+$id), $speed, $delay);
}

window.scrollToElementClass = function($class, $speed, $delay) {
	scrollToElement($("."+$class), $speed, $delay);
}


window.scrollToElement = function ($obj, $speed, $delay) {
		
	var isJqueryObject = $obj instanceof jQuery;
	if (!isJqueryObject) {
		log("AFTC.JS: scrollToElement requires an element with a class or id or a jquery object");
		return;
	}

	if (!$speed || $speed == null) {
		$speed = 1;
	}
	$speed *= 1000;

	if (!$delay || $delay == null) {
		$delay = 0;
	}
	$delay *= 1000;

	$('html, body').delay($delay).animate({
		scrollTop: $obj.offset().top
	}, $speed);
}