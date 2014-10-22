var currentFloor;

$(document).on('pagecreate', '#mapPage', function(event) {
	$(document).on('click', '#infoSearchBtn', function () {
	    $(":mobile-pagecontainer").pagecontainer("change", "index.html");
	});

	$(document).on('click', '#infoInfoBtn', function () {
	    $(":mobile-pagecontainer").pagecontainer("change", "info.html");
	});

	$('#destText').text(dest);
	//loadPath();
});

function changeFloor(direction) {
	if(direction == 0) {
		//Go down one floor
	} else {
		//Go up one floor
	}
}

function loadPath(path, level) {
	currentFloor = level;
}