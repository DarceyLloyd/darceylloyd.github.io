/**
 * Author: Darcey@AllForTheCode.co.uk
 * Version: 1.0.1
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Ensure my lazy logger is available
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
if (!log) {
	function log(arg) {
		if (console) {
			console.log(arg);
		}
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var AFTC = AFTC || {}

AFTC.EventManager = function () {

	// Var defs
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	var me = this; // Accessor

	var params = {
		version: "1.0.1",
		events: []
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// Process arguments
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// if (arguments[0] && typeof (arguments[0]) == "object") {

	// 	for (var key in arguments[0]) {
	// 		if (params.hasOwnProperty(key)) {
	// 			params[key] = arguments[0][key];
	// 		} else {
	// 			if (console) {
	// 				if (console.error) {
	// 					console.error("AFTC.EventManager.js : ERROR: Unknown paramater: [" + key + "]");
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function getEventById(id) {
		//log("AFTC.EventManager.getEventById(id): " + id);
		for (var i = 0; i < params.events.length; i++) {

			if (params.events[i].id == id) {
				return params.events[i];
				break;
			}
		}
		return false;
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function add(arg_id, arg_dispatchFunction) {
		// validate
		if (arg_id == "" || !arg_id || arg_id == undefined || arg_id == null || typeof (arg_id) != "string") {
			console.error ("AFTC.EventManager.add(): Unable to add an event ID of [" + arg_id + "], strings only (which are not empty)!");
		}

		if (typeof (arg_dispatchFunction) != "function") {
			console.error ("AFTC.EventManager.add(): Unable to add event! Dispatch function is not a function or not supplied!");
		}



		var eventVo = getEventById(arg_id);
		if (eventVo){
			console.error("AFTC.EventManager.add(id,dispatchFunction): Event id [" + arg_id + "] already exists!");
		} else {
			eventVo = {
				id: arg_id,
				dispatchFunction: arg_dispatchFunction
			};

			params.events.push(eventVo);
			//log("AFTC.EventManager.add(id,dispatchFunction): Event id [" + arg_id + "] has been added.");
		}
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function remove(arg_id) {
		// validate
		if (arg_id == "" || !arg_id || arg_id == undefined || arg_id == null || typeof (arg_id) != "string") {
			console.error ("AFTC.EventManager.remove(arg_id): Unable to add an event ID of [" + arg_id + "], strings only (which are not empty)!");
		}

		var eventVo = getEventById(arg_id);
		if (eventVo) {
			params.events.splice(eventVo.index, 1);
			//log("AFTC.EventManager.remove(id): Event id [" + arg_id + "] has been removed.");
		}
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function removeAll() {
		for (var i = 0; i < params.events.length; i++) {
			params.events[i] = null;
			delete params.events[i];
		}
		params.events = null;
		delete params.events;

		params.events = [];
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function dispatch(arg_id) {
		// validate
		if (arg_id == "" || !arg_id || arg_id == undefined || arg_id == null || typeof (arg_id) != "string") {
			console.error ("AFTC.EventManager.add(): Unable to add an event ID of [" + arg_id + "], strings only (which are not empty)!");
		}

		var eventVo = getEventById(arg_id);
		
		if (eventVo) {
			eventVo.dispatchFunction();
		} else {
			console.error ("AFTC.EventManager.dispatch(): Unable to find an event of ID [" + arg_id + "]!");
		}
	};
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




	// Public
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	return {
		getEventById: function (id) {
			return getEventById(id);
		},
		add: function (id, fn) {
			return add(id, fn);
		},
		remove: function (id) {
			return remove(id);
		},
		dispatch: function (id) {
			return dispatch(id);
		},
		getEvents: function () {
			return params.events;
		},
		removeAll: function(){
			removeAll();
			return params.events;
		}
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -