var button = document.getElementById('button');
// var button = $('#button')
console.log(button);

console.log('Button says: ' + button.textContent);
// button.text();
button.textContent = 'Click Me Please!';
// button.text('Click Me Please!');

//below only returns first matching element
button = document.querySelector('button');
// $('button')
console.log('Found button', button);

//returns all matching elements as a NodeList that has the same behavior as an array
//but has additional methods
var buttons = document.querySelectorAll('button');
// $('button')
console.log('Found buttons', buttons);
//loop through all buttons
for (var i = 0; i < buttons.length; i++) {
  console.log('Button' + i + ":", buttons[i]);
}

buttons = document.getElementsByTagName('button');
buttons = document.getElementsByClassName('btn');
console.log('buttons with class btn', buttons);

//Manipulation of the DOM
var list = document.getElementById('list');
var li = document.createElement('li');
// $('<li>')
li.textContent = 'Three';
list.appendChild(li);
//$('#list').append(li);

var image = document.getElementById('image');
image.setAttribute('src', 'dom-exercises/img1.jpg');
// $('#image').attr('src', 'dom-exercises/img1.jpg');
var imageUrl = image.getAttribute('src');
// $('#image').attr('src');
console.log('Image url is: ', imageUrl);

var content = document.getElementById('content');
content.innerHTML = '<a href="http://google.com">Google</a>';
// $('#content').html('<a href="http://google.com">Google</a>');
console.log('HTML in #content is ' + content.innerHTML);

var bodyTag = document.body;
// $('body');
bodyTag.style.backgroundColor = 'yellow'; //option 1
bodyTag.style['background-color'] = 'yellow'; //option 2
// $('body').css({'background-color': 'yellow'}); option 1
// $('body').css({backgroundColor: 'yellow'}); option 2
content.style.border = '2px solid black';


//add CSS class
var li = document.querySelector('li');
li.classList.add('selected');
if (li.classList.contains('selected')) {
  // $(li).hasClass('selected')
  console.log('Yes it is selected');
} else {
  console.log('No it is not');
}

li.classList.remove('selected');
// $(li).removeClass('selected');

if (li.classList.contains('selected')) {
  console.log('Yes it is selected');
} else {
  console.log('No it is not');
}

var input = document.getElementById('text-field');
input.value = 'Hello';
// $(input).val('Hello')
console.log('Input value is ' + input.value);
// $(input).val()

var googleLink = document.querySelector('#content a');
googleLink.addEventListener('click', function(event) {
  event.preventDefault();
  alert('You tried to go to Google');
});
// // $('#content a').click(function(event) {
//   event.preventDefault();
//   alert('You tried to go to Google');
// })

var removeButtons = document.querySelectorAll('#todo button');
for (var j = 0; j < removeButtons.length; j++) {
  removeButtons[j].addEventListener('click', function(event) {
    var button = event.target;
    // event.target is the element the event happened to
    // in jQuery that is 'this'
    var li = button.parentNode;
    var list = li.parentNode;
    list.removeChild(li);
  });
}
//jQuery
/*
$('#todo button').click(function() {
  var li = $(this).parent();
  li.remove();
});
*/

var todoList = document.getElementById('todo');
var taskLi = document.createElement('li');
taskLi.textContent = 'Watch TV';
var removeButton = document.createElement('button');
removeButton.textContent = 'remove';
taskLi.appendChild(removeButton);
todoList.appendChild(taskLi);

//jquery to register events on dynamically generated elements
/*
$('#todo').on('click', 'button', function() {

});
*/

//in the native dom:
todoList.addEventListener('click', function(event) {
  var target = event.target;
  console.log('Clicked on target ', target);
});
/*
$('#todo').on('click', 'button', function() {
  $(this).parent().remove();
});
*/

//simulate document.ready
window.addEventListener('load', function() {
  console.log('Page has loaded');
});
//or
window.onLoad = function() {
  console.log('Page has loaded');
};
/*
$(document).ready(function() {
  console.log('Page has loaded');
});
or
$(function() {
  console.log('Page has loaded');
});
*/
