window.getElementById = function (id) {
	return document.getElementById(id);
}

window.hideShow = function ($ShowClassName, $HideClassName) {
	var $index;

	if (isArray($ShowClassName)) {
		for ($index in $ShowClassName) {
			var $ItemToShow = $ShowClassName[$index];
			log($ItemToShow);
			$("." + $ItemToShow).show();
		}
	} else {
		$("." + $ShowClassName).show();
	}


	if (isArray($ShowClassName)) {
		for ($index in $ShowClassName) {
			var $ItemToHide = $ShowClassName[$index];
			//log($ItemToHide);
			$("." + $ItemToShow).hide();
		}
	} else {
		$("." + $HideClassName).hide();
	}
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.centerAbsoluteItem = function ($element) {
	if (typeof ($element) === "string") {
		$element = $($element);
	}
	//log($element);
	//log($element.width());
	var mLeft = parseInt($element.css("margin-left"));
	var mRight = parseInt($element.css("margin-right"));
	var mTop = parseInt($element.css("margin-top"));
	var mBtm = parseInt($element.css("margin-bottom"));

	var pLeft = parseInt($element.css("padding-left"));
	var pRight = parseInt($element.css("padding-right"));
	var pTop = parseInt($element.css("padding-top"));
	var pBtm = parseInt($element.css("padding-bottom"));

	var bLeft = parseInt($element.css("border-left-width"));
	var bRight = parseInt($element.css("border-right-width"));
	var bTop = parseInt($element.css("border-top-width"));
	var bBtm = parseInt($element.css("border-bottom-width"));

	//log("mLeft:"+mLeft+ "   mRight:"+mRight + "   mTop:"+mTop+"   mBtm:"+mBtm);
	//log("pLeft:"+pLeft+ "   pRight:"+pRight + "   pTop:"+pTop+"   pBtm:"+pBtm);
	//log("bLeft:"+bLeft+ "   bRight:"+bRight + "   bTop:"+bTop+"   bBtm:"+bBtm);

	var w = $element.width() + pLeft + pRight + mLeft + mRight + bLeft + bRight;
	var h = $element.height() + pTop + pBtm + pLeft + pRight + bTop + bBtm;
	var tx = (window.innerWidth / 2) - (w / 2);
	var ty = (window.innerHeight / 2) - (h / 2);
	$element.css("left", tx);
	$element.css("top", ty);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
