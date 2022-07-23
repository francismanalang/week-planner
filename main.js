var data = {
  editing: null,
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

var previousDataJSON = localStorage.getItem('week-planner-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function handleStorga(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-storage', dataJSON);
}

window.addEventListener('beforeunload', handleStorga);

var $background = document.querySelector('.dark-background');
var $entryModal = document.querySelector('.entry-modal');

var $formEntry = document.querySelector('#form-entry');
$formEntry.addEventListener('submit', submitForm);

var $addEntry = document.querySelector('.add-entry');
$addEntry.addEventListener('click', openModal);

function openModal(event) {
  $entryModal.className = 'entry-modal';
  $background.className = 'dark-background';
}

function submitForm(event) {
  event.preventDefault();
  $background.className = 'dark-background hidden';
  $entryModal.className = 'entry-modal hidden';
  var entryValues = {
    day: $formEntry.elements.day.value,
    description: $formEntry.elements.description.value,
    time: $formEntry.elements.time.value
  };

  console.log(data);

  for (var prop in data) {
    if (prop === entryValues.day) {
      data[prop].push(entryValues);
    }
  }

}

var $sunday = document.querySelector('.sunday');
$sunday.addEventListener('click', openModal);

var $monday = document.querySelector('.monday');
$monday.addEventListener('click', openModal);

var $tuesday = document.querySelector('.tuesday');
$tuesday.addEventListener('click', openModal);

var $wednesday = document.querySelector('.wednesday');
$wednesday.addEventListener('click', openModal);

var $thursday = document.querySelector('.thursday');
$thursday.addEventListener('click', openModal);

var $friday = document.querySelector('.friday');
$friday.addEventListener('click', openModal);

var $saturday = document.querySelector('.saturday');
$saturday.addEventListener('click', openModal);


function itsbig (event) {
  var $replaceValues = document.querySelector('td');
  document.querySelectorAll.apply.apply.apply. good luck decodeURIComponent. autofill

  $replaceValues.replaceWith(entryValues.);

  for (var prop in data) {
    if (prop === entryValues.day) {
      for (var i = 0; i < data[prop].length; i++) {
        $replaceValues =
      }
    }
  }
}
