var synonyms = {
	'dineen': 'c13',
	'dineen auditorium': 'c13',
	'sunken lounge': '405',
	'headrest': '119',
	'head rest': '119',
	'head hall c13': 'c13',
	'head hall d118': 'd118',
	'hd118': 'd118',
	'it317': '317',
	'itc317': '317',
	'food': '119',
	'women\'s washroom' : '33',
	'men\'s washroom' : '32'
}

//Paths are setup as [start level, floor 1, floor 2, floor 3, floor 4, floor 5, topStart, leftStart]
var paths = {
	'a_c13_119': ['C',null,null,'a_c13_119_C.png','a_c13_119_D.png', null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go toward the elevator</li><li>Enter the elevator and select D level</li><li>Exit the elevator and turn right</li><li>Go down the hallway until you pass room D-37</li><li>Go through the doorway in front of you</li><li>Turn left</li><li>Head Rest</li></ul>'],
	'a_c13_317': ['C',null,null,'a_c13_317_C.png', null, null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go down the hallway</li><li>Continue until you reach the end of the hallway (past C126)</li><li>Turn left</li><li>Go down the hallway until you reach the Dean’s Office (in the IT building)</li><li>Turn left and go down the hallway until you reach IT-C317</li><li>Turn left</li><li>IT-C17</li></ul>'],
	'c13_32': ['C',null,null,'c13_32_C.png', null, null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go forward</li><li>Turn right down the hallway</li><li>Continue to the end of the hallway</li><li>Turn left</li><li>32</li></ul>'],
	'c13_33': ['C',null,null,'c13_33_C.png', null, null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go forward</li><li>Turn right down the hallway</li><li>Continue to the end of the hallway</li><li>Turn left</li><li>33</li></ul>'],
	'c13_119': ['C',null,null,'c13_119_C.png','c13_119_D.png', null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go forward</li><li>Turn left down the hallway</li><li>Enter the stairwell to the left</li><li>Go up one flight of stairs</li><li>Exit the stairwell and turn left</li><li>Go down the hallway until you pass room D-37</li><li>Go through the doorway in front of you</li><li>Turn left</li><li>Head Rest</li></ul>'],
	'c13_317': ['C',null,null,'c13_317_C.png', null, null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13)</li><li>Go toward the wall across from the auditorium entrance</li><li>Turn right and go down the hallway</li><li>Continue until you reach the end of the hallway (past C126)</li><li>Turn left</li><li>Go down the hallway until you reach the Dean’s Office (in the IT building)</li><li>Turn left and go down the hallway until you reach IT-C317</li><li>Turn left</li><li>IT-C17</li></ul>'],
	'c13_d118': ['C',null,null,'c13_d118_C.png','c13_d118_D.png', null, 1250, 1900, '<ul><li>Dineen Auditorium (C-13) </li><li>Go toward the wall across from the auditorium entrance </li><li>Turn right and go forward </li><li>Turn left down the hallway </li><li>Enter the stairwell to the left </li><li>Go up one flight of stairs </li><li>Exit the stairwell and turn right </li><li>Go down the hallway until you reach the end (pass room D-8) </li><li>Turn left</li><li>Go down the hallway until you reach D118</li><li>Turn left </li><li>D118</li></ul>']
};

