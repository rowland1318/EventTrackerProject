window.addEventListener("load", (evt) => {
  console.log("Window loaded.");
  init();
});

function init() {
  document.hikeForm.lookup.addEventListener("click", function (evt) {
    evt.preventDefault();
    var hikeId = document.hikeForm.hikeId.value;
    if (!isNaN(hikeId) && hikeId > 0) {
      getEvent(hikeId);
    }
  });

  getAllEvents();

  document.addHikeForm.eventSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You clicked to submit an entry.");

    let form = document.addHikeForm;
    let hike = {
      name: form.name.value,
      length: form.length.value,
      date: form.date.value,
      totalTime: form.totalTime.value,
    };
    createEvent(hike);
  });
}

function getEvent(hikeId) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "api/hikes/" + hikeId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let dataJSON = xhr.responseText;
        let hike = JSON.parse(dataJSON);
        console.log(hike);
        displayEvent(hike);
      } else if (xhr.status === 404) {
        displayEvent(null);
        console.log("Event not found.");
      }
    }
  };
  xhr.send();
}

function displayEvent(hike) {
  let dataDiv = document.getElementById("eventDiv");
  dataDiv.textContent = "";
  if (hike == null) {
    dataDiv.textContent = "Event not found";
  } else {
    let h1 = document.createElement("h1");
    h1.textContent = hike.name;
    dataDiv.appendChild(h1);

    let firstField = document.createElement("text");
    firstField.textContent = "Hike Date: " + hike.date;
    dataDiv.appendChild(firstField);
    let secondField = document.createElement("text");
    secondField.textContent = "Trail Length: " + hike.length;
    dataDiv.appendChild(secondField);
    let thirdField = document.createElement("text");
    thirdField.textContent = "Hike Total Time: " + hike.totalTime;
    dataDiv.appendChild(thirdField);
    console.log(dataDiv);

    let editForm = document.createElement("form");
    editForm.name = "editHikeForm";
	dataDiv.appendChild(editForm);
	
	let hikeId = document.createElement("input");
	hikeId.setAttribute("type", "hidden");
	hikeId.setAttribute("name", "hikeId");
	hikeId.value = hike.id;
	editForm.appendChild(hikeId);

    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Trail Name";
    editForm.appendChild(nameLabel);
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.value = hike.name;
    editForm.appendChild(nameInput);

    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Hike Date";
    editForm.appendChild(dateLabel);
    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateInput.value = hike.date;
    editForm.appendChild(dateInput);

    let lengthLabel = document.createElement("label");
    lengthLabel.textContent = "Trail Length";
    editForm.appendChild(lengthLabel);
    let lengthInput = document.createElement("input");
    lengthInput.setAttribute("type", "text");
    lengthInput.setAttribute("name", "length");
    lengthInput.value = hike.length;
    editForm.appendChild(lengthInput);

    let timeLabel = document.createElement("label");
    timeLabel.textContent = "Hike Total Time";
    editForm.appendChild(timeLabel);
    let timeInput = document.createElement("input");
    timeInput.setAttribute("type", "text");
    timeInput.setAttribute("name", "totalTime");
    timeInput.value = hike.totalTime;
    editForm.appendChild(timeInput);

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("name", "submit");
    submitButton.value = "Edit";
    editForm.appendChild(submitButton);
    submitButton.addEventListener("click", function (e) {
	  e.preventDefault();
	  let form = e.target.parentElement;
      let hike = {
        name: form.name.value,
        length: form.length.value,
        date: form.date.value,
        totalTime: form.totalTime.value,
	  };
	  
      let hikeJSON = JSON.stringify(hike);

      let xhr = new XMLHttpRequest();
      xhr.open("PUT", "api/hikes/"+ form.hikeId.value);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          switch (xhr.status) {
            case 200:
            case 201:
              hikeJSON = xhr.responseText;
              let hike = JSON.parse(hikeJSON);
              displayEvent(hike);
              break;
            case 400:
              displayNotFound("Invalid entry data: " + hikeJSON);
              break;
            default:
              displayNotFound("Error occurred: " + xhr.status);
              break;
          }
        }
      };
      xhr.send(hikeJSON);
      console.log(hikeJSON);
    });
  }
}

function displayNotFound() {
  var dataDiv = document.getElementById("eventDiv");
  dataDiv.textContent = "Entry not found";
}

function createEvent(hike) {
  let hikeJSON = JSON.stringify(hike);
  console.log(hike);
  console.log(hikeJSON);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/hikes/");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      switch (xhr.status) {
        case 200:
        case 201:
          hikeJSON = xhr.responseText;
          let hike = JSON.parse(hikeJSON);
          displayEvent(hike);
          break;
        case 400:
          displayNotFound("Invalid entry data: " + hikeJSON);
          break;
        default:
          displayNotFound("Error occurred: " + xhr.status);
          break;
      }
    }
  };
  xhr.send(hikeJSON);
  console.log(hikeJSON);
}

function getAllEvents() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "api/hikes/");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let hikeJSON = xhr.responseText;
        let eventsObj = JSON.parse(hikeJSON);
        console.log(eventsObj);
        displayAllEvents(eventsObj);
      } else if (xhr.status === 404) {
        displayAllEvents(null);
        console.log("Events not found.");
      }
    }
  };
  xhr.send();
}

function tableRowClick(hikeId) {
  //var eventId = event.target.td.event.id;
  if (!isNaN(hikeId) && hikeId > 0) {
    getEvent(hikeId);
  }
}

function displayAllEvents(events) {
  var dataDiv = document.getElementById("eventDiv");
  dataDiv.textContent = "";
  if (events == null) {
    eventTable.textContent = "Events not found";
  } else {
    // create all table header elements and append to table
    let table = document.createElement("table");
    table.border = 1;
    dataDiv.appendChild(table);
    let tableHead = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");
    let tableHeaderRowId = document.createElement("th");
    let tableHeaderRowName = document.createElement("th");
    let tableHeaderRowLength = document.createElement("th");
    let tableHeaderRowDate = document.createElement("th");
    let tableHeaderRowTime = document.createElement("th");
    // give a value to the column headers and append to tr
    tableHeaderRowId.textContent = "id";
    tableHeaderRowName.textContent = "Trail Name";
    tableHeaderRowLength.textContent = "Length";
    tableHeaderRowDate.textContent = "Date";
    tableHeaderRowTime.textContent = "Time";
    tableHeaderRow.appendChild(tableHeaderRowId);
    tableHeaderRow.appendChild(tableHeaderRowName);
    tableHeaderRow.appendChild(tableHeaderRowLength);
    tableHeaderRow.appendChild(tableHeaderRowDate);
    tableHeaderRow.appendChild(tableHeaderRowTime);
    tableHead.appendChild(tableHeaderRow);
    table.appendChild(tableHead);

    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    events.forEach(function (event, index, array) {
      let tableRow = document.createElement("tr");
      tableBody.appendChild(tableRow);

      tableRow.addEventListener("click", function () {
        tableRowClick(event.id);
      });

      let logId = document.createElement("td");
      logId.textContent = event.id;
      tableRow.appendChild(logId);

      let hikeName = document.createElement("td");
      hikeName.width = "40%";
      hikeName.textContent = event.name;
      tableRow.appendChild(hikeName);

      let length = document.createElement("td");
      length.textContent = event.length;
      tableRow.appendChild(length);

      let hikeDate = document.createElement("td");
      hikeDate.textContent = event.date;
      tableRow.appendChild(hikeDate);

      let hikeTime = document.createElement("td");
      hikeTime.textContent = event.totalTime;
      tableRow.appendChild(hikeTime);
    });
  }
}
