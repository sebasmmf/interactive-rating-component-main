// Varibles
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#form button[type="submit"]');
const sectionRating = document.querySelector('.rating');
const sectionThanks = document.querySelector('.thanks');

let option;


eventListeners();
function eventListeners() {
    form.addEventListener('change', getInput);
    btnSubmit.addEventListener('click', showSectionThanks);
}

// Funtions

function getInput(e) {
    option = e.target.value;
    createSummary(option);
}

function showSectionThanks(e) {
    e.preventDefault();

    if(option === undefined) {
        btnSubmit.textContent = 'You have not selected an option yet';
        setTimeout( () => btnSubmit.textContent = 'Submit', 4000);
        return;
    }

    sectionRating.style.display = 'none';
    sectionThanks.style.display = 'flex';

    setTimeout( () => location.reload(), 10000);
}

function createSummary(rating) {
    if(rating === undefined) {
        return;
    }

    const summary = document.querySelector('.summary');
    summary.textContent = `You selected ${rating} out of 5`;
}