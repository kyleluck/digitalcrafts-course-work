# API Exercises

## 1. Valid JSON Response

Write a valid JSON response containing a JS object containing the properties: `firstName`, `lastName`, and `gender`. You can use yourself as an example or just make up the values.

Use http://jsonlint.com/ to validate your JSON code.

## 2. Valid JSON Response 2

Write a valid JSON response containing an array of 5 cards. Each card is an object containing the properties: `point`, and `suit`.

Use http://jsonlint.com/ to validate your JSON code.

## 3. GitHub API 1

Use curl or your browser to make a request to the GitHub API to view your recent activities

```
curl https://api.github.com/users/<your github handle>/events
```

Look through the returned JSON response to get a sense of what kind of information it gives you.

## 4. Github API 2

Make a web page with jquery.js. Use jQuery.ajax (http://api.jquery.com/jquery.ajax/) to make a request to the same URL you made in step 3. Use console.log to print out the resulting data.

## 5. Github API 3

Write a loop to go through the returned data from step 4, and print out just the individual pieces of information that are interesting, such as event type repository name, commit message, and sha.

## 6. Github API 4

Use jQuery display the list of the GitHub events as an unordered list, like:

```
<ul>
  <li>Some commit message - by Toby Ho. 2016-03-17T03:55:14Z</li>
  <li>Another commit message - by Toby Ho. 2016-03-17T02:55:14Z</li>
  ...
</ul>
```

## 7. Extract a getData() function

Extract a `getData(callback)` function whose job is to fetch the data. The getData() function should take in a callback function as its parameter, and when the data from the Ajax request becomes available, call the passed in callback with the data as first argument of the callback.

## 8. Browse Github API Documentation

Browse Github API documentation to get a sense of what else you can do with the GitHub API.

https://developer.github.com/v3

One cool API is the code search:
https://developer.github.com/v3/search/#search-code

Try to come up with a idea for an tiny app you can build using the GitHub API.

## 9. Build a Tiny GitHub App

Choose one of the following:

1. Build your own idea.
2. Build a Github activity ranking app, see below

## GitHub Activity Ranking App

Make an app which will take in a list of GitHub user names, separated by commas, and rank the GitHub users by how many commits they have made recently, in public.
