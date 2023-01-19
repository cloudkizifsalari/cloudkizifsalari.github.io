var counter = 0;
var counterElement = document.createElement('div');
document.body.appendChild(counterElement);
setInterval(function() {
  counterElement.innerHTML = counter++;
}, 10);
counterElement.style.color = 'lime';
document.body.style.background = '#202020';
counterElement.style.textAlign = 'center';
counterElement.style.fontSize = '5rem';
counterElement.style.textAlign = 'center';
counterElement.style.position = 'absolute';
counterElement.style.top = '50%';
counterElement.style.left = '50%';
counterElement.style.transform = 'translate(-50%, -50%)';
counterElement.style.fontSize = '8rem';
counterElement.style.userSelect = 'none';
counterElement.addEventListener('click', function() {
  counterElement.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
counterElement.style.fontFamily = 'Roboto';
counterElement.style.fontWeight = 'bold';
counterElement.addEventListener('mousedown', function() {
  counterElement.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://httpbin.org/post');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  counter: counter
}));
