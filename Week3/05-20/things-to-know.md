# Things to Know

## No jQuery

We are not using jQuery for this game. Instead of using $('#someid') to find an element, we will use `document.getElementById('someid')` - this will return a native DOM element though, and it will not have the jQuery methods available.

## Canvas Coordinate

The Canvas coordinate system starts for (0, 0) at the top left.

## How to Obtain a Context Object

In order to draw anything on the canvas, you need a context object.

```
// find the canvas element with the ID of `canvas`
var canvas = document.getElementById('canvas');
// get the canvas' drawing context
var ctx = canvas.getContext('2d');
```

## Some Drawing Methods

### ctx.fillRect(x, y, width, height)

Draws a rectangle at the specified coordinate with the specified width and height.

```
ctx.fillRect(100, 100, 50, 50);
```

### ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);

Draws an ellipse given the x and y position for the center of the ellipse, the x and y radius', a rotation in radians, and a start and end angles in radians. If you want a full ellipse drawn, provide 0 and Math.PI * 2 as the start and end angles, respectively.

The code below draws a circle:

```
ctx.beginPath();
ctx.ellipse(100, 100, 50, 50, 0, 0, Math.PI * 2);
ctx.fill();
```

### ctx.drawImage(image, x, y)

Draws an image to the canvas at the specified coordinate:

```
var image = new Image();
image.src = 'images/some-image.png';
ctx.drawImage(image, 100, 100);
```

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

## Keyboard Events

You can respond to keyboard events using the `window.addEventListener` method.

```
window.addEventListener('keydown', function(event) {
  // this will execute if a key is pressed down
});

window.addEventListener('keyup', function(event) {
  // this will execute if a pressed key is released
});

window.addEventListener('keypress', function(event) {
  // this will execute if a key is pressed down, then released
});
```

## The Game Loop

`requestAnimationFrame(fun)` is the recommended way to render real-time graphical applications. You pass a function to it as the first parameter, and it will run that function before the next time the browser repaints the page contents. We will use it like this to implement a game loop:

```
function main() {
  // perform actions required at every frame of the game
  requestAnimationFrame(main);
}

main();
```

The `main()` starts the game loop, and will keep itself going by asking requestAnimationFrame to call itself again, and again, and again, and again, and again...

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

## Resources
