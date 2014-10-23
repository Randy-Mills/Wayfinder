var currentFloor;
var levels = ['A','B','C','D','E'];
var mapInitialized = false;

$(document).on('pagecreate', '#mapPage', function(event) {
	if(!mapInitialized) {
		$(document).on('click', '#infoSearchBtn', function () {
		    $(":mobile-pagecontainer").pagecontainer("change", "index.html");
		});

		$(document).on('click', '#infoInfoBtn', function () {
		    $(":mobile-pagecontainer").pagecontainer("change", "info.html");
		});

		$(document).on('click', '#upBtn', function () {
		    changeFloor(0);
		});

		$(document).on('click', '#downBtn', function () {
		    changeFloor(1);
		});

		mapInitialized = true;
	}

	$('#radio-choice-h-2a').bind('change', function(event, ui) {
		$('.direction-container').addClass('hidden');
	    $('#floorControls').removeClass('hidden');
	    $('.map-container').removeClass('hidden');
	});

	$('#radio-choice-h-2b').bind('change', function(event, ui) {
		$('.direction-container').removeClass('hidden');
	    $('#floorControls').addClass('hidden');
	    $('.map-container').addClass('hidden');
	});

	$('#destText').text(dest);
	currentFloor = levels.indexOf(paths[path][0])+1;
	$('#pathImage').bind('load', scroll);

	loadPath();
});

function changeFloor(direction) {
	if(direction == 0) {
		currentFloor++;
	} else {
		currentFloor--;
	}

	loadPath();
}

function loadPath() {
	$('#mapImage').attr('src', 'img/maps/' + levels[currentFloor-1] + 'Level.jpg');
	$('#pathImage').attr('src', 'img/paths/' + paths[path][currentFloor]);

	$('.direction-container').html(paths[path][8]);

	if(currentFloor == 1 || paths[path][currentFloor-1] == null) {
		$('#downBtn').addClass('ui-disabled');
	} else {
		$('#downBtn').removeClass('ui-disabled');
	}

	if(currentFloor == 5 || paths[path][currentFloor+1] == null) {
		$('#upBtn').addClass('ui-disabled');
	} else {
		$('#upBtn').removeClass('ui-disabled');
	}

	$('#floorInfo').text(levels[currentFloor-1]);
}

var scroll = function() {
	$(".map-view").animate({scrollTop:paths[path][6]}, 500);
	$(".map-view").animate({scrollLeft:paths[path][7]}, 500);

	$('#pathImage').unbind('load', scroll);
};