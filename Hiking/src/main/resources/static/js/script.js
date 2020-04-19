window.addEventListener('load', evt => {
	console.log('Window loaded.');
	init(); 
});

function init() {
	document.hikeForm.lookup.addEventListener('click', function(evt) {
		evt.preventDefault();
		var hikeId = document.hikeForm.hikeId.value;
		if (!isNaN(hikeId) && hikeId > 0) {
			getEvent(hikeId);
		}
	});

	getAllEvents();

	document.addHikeForm.eventSubmit.addEventListener('click', function(event) {
		event.preventDefault();
		createEvent(document.createEventForm);
	});
	
}

function createEvent(formObj) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/hikes/'+formObj.emotion.value, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      getAllEvents();
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};

	var userObject = {
	  description: formObj.description.value, 
	};
	var userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string

	xhr.send(userObjectJson);
}

function getAllEvents() {
	let xhr = new XMLHttpRequest();
  
	xhr.open('GET', 'api/hikes/');
	xhr.onreadystatechange = function (){
		
	  if ( xhr.readyState === 4){
		if( xhr.status === 200){
		  let dataJSON = xhr.responseText;
		  let eventsObj = JSON.parse(dataJSON);
		  console.log(eventsObj);
		displayAllEvents(eventsObj);
		}
		else if ( xhr.status === 404 ){
		  displayAllEvents(null);
		  console.log('Events not found.');
		}
	  }
	}
	xhr.send();
}

function getEvent(hikeId) {
	let xhr = new XMLHttpRequest();
  
	xhr.open('GET', 'api/hikes/'+hikeId);
	xhr.onreadystatechange = function (){
		
	  if ( xhr.readyState === 4){
		if( xhr.status === 200){
		  let dataJSON = xhr.responseText;
		  let hike = JSON.parse(dataJSON);
		  console.log(hike);
		  displayEvent(hike);
		}
		else if ( xhr.status === 404 ){
		  displayEvent(null);
		  console.log('Event not found.');
		}
	  }
	}
	xhr.send();
}

 function displayEvent(hike) {
    let dataDiv = document.getElementById('eventDiv');
    dataDiv.textContent = '';
    if (event == null){
		dataDiv.textContent = 'Event not found';
	}else{
    let h1 = document.createElement("h1");
    h1.textContent =  hike.name;
      dataDiv.appendChild(h1);
      
      let firstField = document.createElement('text');
      firstField.textContent = 'Hike Date: ' + hike.date;
      dataDiv.appendChild(firstField);
      let secondField = document.createElement('text');
      secondField.textContent = 'Trail Length: ' +  hike.length;
      dataDiv.appendChild(secondField);
      let thirdField = document.createElement('text');
      thirdField.textContent = 'Hike Total Time: ' +  hike.totalTime;
      dataDiv.appendChild(thirdField);
	  console.log(dataDiv);
	}
}

function displayAllEvents(events) {
	var dataDiv = document.getElementById('eventDiv');
	dataDiv.textContent = '';
	if (events == null){
		eventTable.textContent = 'Events not found';
	}else{
		// create all table header elements and append to table
		let table = document.createElement('table');
		table.border = 1;
		dataDiv.appendChild(table);
		let tableHead = document.createElement('thead');
		let tableHeaderRow = document.createElement('tr');
		let tableHeaderRowId = document.createElement('th');
		let tableHeaderRowName = document.createElement('th');
		let tableHeaderRowLength = document.createElement('th');
		let tableHeaderRowDate = document.createElement('th');
		let tableHeaderRowTime = document.createElement('th');
		// give a value to the column headers and append to tr
		tableHeaderRowId.textContent = 'id';
		tableHeaderRowName.textContent = 'Trail Name';
		tableHeaderRowLength.textContent = 'Length';
		tableHeaderRowDate.textContent = 'Date';
		tableHeaderRowTime.textContent = 'Time';
		tableHeaderRow.appendChild(tableHeaderRowId);
		tableHeaderRow.appendChild(tableHeaderRowName);
		tableHeaderRow.appendChild(tableHeaderRowLength);
		tableHeaderRow.appendChild(tableHeaderRowDate);
		tableHeaderRow.appendChild(tableHeaderRowTime);
		tableHead.appendChild(tableHeaderRow);
		table.appendChild(tableHead);


		let tableBody = document.createElement('tbody');
		table.appendChild(tableBody);

		events.forEach(function(event,index,array){
			let tableRow = document.createElement('tr');
			tableBody.appendChild(tableRow);

			tableRow.addEventListener('click', function(){ tableRowClick(event.id); } );

			let logId = document.createElement('td');
			logId.textContent = event.id;
			tableRow.appendChild(logId);

			let hikeName = document.createElement('td');
			hikeName.width = "40%";
			hikeName.textContent = event.name;
			tableRow.appendChild(hikeName);

			let length = document.createElement('td');
			length.textContent = event.length;
			tableRow.appendChild(length);
			
			let hikeDate = document.createElement('td');
			hikeDate.textContent = event.date;
			tableRow.appendChild(hikeDate);	
			
			let hikeTime = document.createElement('td');
			hikeTime.textContent = event.totalTime;
			tableRow.appendChild(hikeTime);
			
		});
		
	}
}
