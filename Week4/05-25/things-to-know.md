# Things To Know

## event.preventDefault()

By default, the browser will reload the page when you click on a link or submit a form. We are building a single page application with the help of Ajax, and at times we don't want the page to reload. In order to prevent that default reload behavior, we can use the `.preventDefault()` method on event objects. Here is how to prevent a form from submitting and reloading a page:

```
$('form').submit(function (event) {
  event.preventDefault();
  // now the form won't submit even when the
  // submit button is clicked
});
```

You can use the same trick to prevent a link from navigating to the next page:

```
$('a').click(function (event) {
  event.preventDefault();
});
```

## Building up elements

Last time we created an element by writing HTML inside of JavaScript. For example, to create an image element and append it to an element with id of `images` we would do this:

```
$('#images').append('<img src="' + url + '" alt="' + description + '">');
```

This was a bit difficult to work with especially with quotes inside quotes. Here is another way to create an element:

```
var img = $('<img>')
  .attr('src', url)
  .attr('alt', description);
$('#images').append(img);
```

This is a 3 step process:

1. you create an `<img>` element
2. you set its attributes
3. then you append it to the #images element

This method might be slight more code, but it's easier to read and edit.

## Simulating Switching Between Multiple Pages

Sometimes in a JavaScript-based app, you want to create a good user experience by not having the browser reload the page, but you want to to create the illusion that there are multiple pages in your app. A simple way to achieve this is by creating multiple sections in your page, each section contained within a div element of a certain ID, and each one representing a page. Then, use JavaScript logic to hide all sections except for the section for the page you want to display. See multi-pages.html and multi-pages.js for an example.
