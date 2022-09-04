// function input() {
//     var write = document.getElementById("op").value;
//     console.log(write);
//     output(write);
// }

// function output(input) {
//     var i = document.createElement('h6');
//     var result = document.getElementById("result");
//     result.appendChild(i);
// }

const locationForm = document.querySelector('form');
const search = document.querySelector('#op');
const msg = document.querySelector('#result');

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    msg.textContent = location;
})