var currentFloor;

$(document).on('pagecreate', '#mapPage', function(event) {
	$(document).on('click', '#infoSearchBtn', function () {
	    $(":mobile-pagecontainer").pagecontainer("change", "index.html");
	});

	$(document).on('click', '#infoInfoBtn', function () {
	    $(":mobile-pagecontainer").pagecontainer("change", "info.html");
	});

	$('#destText').text(dest);
	loadPath();
});

function changeFloor(direction) {
	if(direction == 0) {
		//Go down one floor
	} else {
		//Go up one floor
	}
}

function loadPath() {
	var levels = ['A','B','C','D','E'];
	currentFloor = levels.indexOf(paths[path][0])+1;

	console.log(currentFloor);

	$('#mapImage').attr('src', 'img/maps/' + paths[path][0] + 'Level.jpg');
	$('#pathImage').attr('src', 'img/paths/' + paths[path][currentFloor]);

	console.log(paths[path][0]);
	console.log(paths[path][currentFloor]);
}