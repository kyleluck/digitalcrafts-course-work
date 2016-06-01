# AngularJS Cheatsheet

## `ng-app`

Initializes a DOM element to become an AngularJS app. Unless you are writing an AngularJS app with no JS, you should set it to the name of an AngularJS module.

```
<div ng-app="my-app">
</div>
```

## `ng-controller`

Initializes a DOM element to be controlled by an AngularJS controller declared within the module used by as the AngularJS app.

```
<div ng-app="my-app" ng-controller="MainController">
</div>
```

## `ng-class`

Conditionally apply a class to a DOM element based on a scope property. Example, the following code will apply the `open` class to the `<div>` if the `open` property is true.

```
<div ng-class="open ? 'open' : ''">
...
</div>
```

## `ng-show`

Conditionally show or hide a DOM element based on a scope property. Example, the following code will show the `<div>` if the `open` property is true, and hide it when it is false:

```
<div ng-show="open">
...
</div>
```

## `ng-src`

Sets an image's `src` attribute to the value of a scope property. Example

```
<img ng-src="{{imageUrl}}">
```

## `ng-click`

Triggers a function call when a DOM element is clicked. Example, the following code will call the `sayGreeting()` function on the scope object when the button is clicked:

```
<button ng-click="sayGreeting()">Hello</button>
```

## `ng-repeat`

Repeats a DOM element for each object within an array - the array must contain objects. Example, the following code will render an array of tasks as an unordered list. Each task contains a `description` property.

```
<ul>
  <li ng-repeat="task in tasks">{{ task.description }}</li>
</ul>

## `ng-submit`

Triggers a function call when a form is submitted. Forms are submitted whenever the user types ENTER in a text input or clicks on a button with `type="submit"`. Example:

```
<form ng-submit="addTask()">
  <input type="text" ng-model="newTaskDescription">
  <button type="submit">Add</button>
</form>
```
