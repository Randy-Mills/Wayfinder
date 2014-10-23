/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//----GLOBALS----\\
var start;
var dest;
var path;
var access = false;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function search() {
    //Assign global variables
    start = $('#start').val().toUpperCase();
    dest = $('#dest').val().toUpperCase();

    console.log(start + " " + dest);

    if($('#access').hasClass('ui-checkbox-on')) {
        access = true;
    } else {
        access = false;
    }

    if(start.trim().length == 0) {
        alert("Please enter a starting location.");
    } else if(dest.trim().length == 0) {
        alert("Please enter a destination.")
    } else if(buildAddresses() == 'not found') {
        alert("A route could not be found. Please ensure you have entered your starting location and destination correctly.");
    } else {
         $(":mobile-pagecontainer").pagecontainer("change", "map.html");
    }
}

function buildAddresses() {
    startTemp = start.toLowerCase();
    destTemp = dest.toLowerCase();
    startTemp = startTemp.replace('-','');
    destTemp = destTemp.replace('-','');

    if(synonyms[startTemp] != undefined) startTemp = synonyms[startTemp];
    if(synonyms[destTemp] != undefined) destTemp = synonyms[destTemp];

    path = startTemp + '_' + destTemp;

    if(access) path = 'a_' + path;

    if(paths[path] == undefined) {
        return 'not found';    
    }
    
    return path;
}

$(document).on('click', '#searchBtn', function () {
    search();
});

$(document).on('click', '#wWash', function () {
    $('#dest').val("Women's Washroom")
});

$(document).on('click', '#mWash', function () {
    $('#dest').val("Men's Washroom")
});

$(document).on('click', '#foodBtn', function () {
    $('#dest').val("Food")
});

$(document).on('click', '#helpBtn', function () {
    $(":mobile-pagecontainer").pagecontainer("change", "info.html");
});