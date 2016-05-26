# JavaScript Event Loop

In JavaScript, in addition to the stack (stack frame) and the heap (objects), there is also an event queue. The event queue is like a job queue, and all JavaScript code - or "scripts" - have to run on this queue. The queue is FIFO (first in first out), which practically means it's first come first serve - scripts have to wait in line until all previous scripts are done executing.

## What is *All* JavaScript Code?

When I say *all* Javascript code, I mean:

* click and other event handler functions
* setTimeout functions
* requestAnimationFrame functions
* initial setup JavaScript code

## Single Threaded

No 2 JavaScript code can execute at the same time.

## setTimeout

setTimeout doesn't guarantee an accurate timer. The function passed to setTimeout can only execute when the event queue is free, and if you have long running JavaScript code, it will have to wait as well.

## Browser Repaints

An important thing to know is that browser repaints also have to run through the event queue. This means that if you have long running JavaScript code, you will freeze the browser - it doesn't have any *breathing room* to repaint the browser.

## requestAnimationFrame

You can use setTimeout to do animation, but requestAnimationFrame is more optimized for the browser. It will synchronize all operations that affect the display, and perform them all at once before each repaint.
