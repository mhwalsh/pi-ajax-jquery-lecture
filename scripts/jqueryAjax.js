console.log('sourced!');
//global students arrary
var students = [];

//URL for the json pi student info
var piJsonUrl = 'http://devjana.net/pi/pi_students.json';

// a function to disply the students
// called from the sucess function of getStudents
var displayStudents = function() {
  console.log('in displayStudents global students arr = ', students);
  $('#outputDiv').empty();

  for (var i = 0; i < students.length; i++) {
    //new header for the names
    var newHeader = document.createElement('h2');
    newHeader.textContent = students[i].first_name + ' ' + students[i].last_name;

    console.log('new header = ', newHeader);

    //append new header to the dom
    $('#outputDiv').append(newHeader);
  }
};

var getStudents = function() {
  //run the body onload
  console.log('called function getStudents');

  $.ajax({
    //URL where the data is located
    url: piJsonUrl,
    dataType: 'JSON',
    //sucess fuction: what to do once response (data) is returned
    success: function(data) {
      console.log('in success:', data.students);
      //loop through data and push to global arrary
      for (var i = 0; i < data.students.length; i++) {
        students.push(data.students[i]);
      }
      //diplaydata
      displayStudents();
    }
  });

  // see this log first do to the async nature of ajax
  console.log('outside the ajax call');
};
