const currHunit = document.getElementById('current-h-unit');
const hUnit = document.getElementById('h-unit');
const currWunit = document.getElementById('current-w-unit');
const wUnit = document.getElementById('w-unit');
const clearForm = document.getElementById('clearForm');

var updateCurrentUnit_H = () => {
    hUnit.style.color = 'transparent';
    currHunit.innerText = hUnit.value;
};

var updateCurrentUnit_W = () => {
    wUnit.style.color = 'transparent';
    currWunit.innerText = wUnit.value;
};

clearForm.addEventListener('click', () => {
    clearForm.style.animation = 'none';
    clearForm.offsetHeight;
    clearForm.style.animation = 'reload 1s';

    document.querySelector('form').reset();

    currHunit.innerText = 'cm';
    currWunit.innerText = 'kg';
});
