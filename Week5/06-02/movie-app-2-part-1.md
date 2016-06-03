# Movie App 2

For movie app 2, we are using:

1. A different movie database API: themoviedb.org. You will be supplied with an API Key: fec8b5ab27b292a68294261bb21b04a5
2. We are using AngularJS
3. We are using ajax again, but using AngularJS's $http API
4. We are using an HTTP server called `serve` for convinience

## Part 1

0. Make a new project directory, you will be working within it
1. Create an index.html file
2. Put angular.js into the same directory
3. Put angular-route.js into the same directory
4. Make your own movie-app.js file in the same directory
5. link the 3 .js files above with script tags, in that order
6. Initialize your AngularJS app by creating an Angular module and linking to it in your HTML file using the ng-app directive, hold off on creating a controller for now
7. Create an `<ng-view></ng-view>` element within the element with the ng-app directive, see examples/routing/basic.html for an example
8. Create a main.html for the main page in the same directory, put some place holder text in the page like `<h1>Main Page</h1>`
9. Create a details.html for the details page in the same directory, put some place holder text in the page
10. Create a routing configuration, using app.config with a $routeProvider. See examples/routing/hellos.html for an example
  * / should go to templateUrl: main.html
  * /:movieId should go to templateUrl: details.html
11. Test that these worked. We will use
  1. run `serve` in your terminal, it should run an HTTP server on http://localhost:3000
  2. In your browser, go to http://localhost:3000, you should see the contents of the main page
  3. Now go to http://localhost:3000/#/1, you should see the contents of the details page
12. Now, create two AngularJS controllers - reference previous AngularJS examples or examples/routing/hellos.html if you need help:
  * MainController - this goes with main.html
  * DetailsController - this goes with details.html
13. Link up the controllers in the route configuration by setting the controller properties to their respective controller names. See examples/routing/hellos.html for an example.
14. In your DetailsController function, add a parameter called $routeParams - this will allow you to get the movieId route parameter. Make the movieId accessible to the details.html template by adding it to the scope: `$scope.movieId = $routeParams.movieId`
15. Display the movie Id in the details.html page by using an AngularJS expression.
