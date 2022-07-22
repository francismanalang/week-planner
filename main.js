
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
