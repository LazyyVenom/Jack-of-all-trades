// Started Working on the Cards showing up using JS

const myDiv = document.getElementById('myDiv');

// Add an event listener for the 'click' event
myDiv.addEventListener('click', function () {
    console.log('Div was clicked!');
    // You can perform other actions here when the div is clicked
});

// Optional: Add an event listener for the 'mousedown' event
myDiv.addEventListener('mousedown', function () {
    console.log('Div is being pressed!');
    // You can perform other actions here when the div is pressed
});