
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
