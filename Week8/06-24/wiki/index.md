# Wiki

You will make a 90s style wiki - where anyone from anywhere in the world can edit and create pages.

The URL schemes of this wiki are as follows:

* / will redirect to /HomePage
* /:pageName will render the contents of the specified pageName, if the page doesn't exist, it will display the place holder page, giving users a link to create that page
* /:pageName/edit will display a form for the user to edit the specified page
* /:pageName/save is the URL where the edit form will send a POST request to save the new version of the page

# Steps

1. Create a route with the page name as route parameter /:pageName, and render a default place holder page for the matching URLs. You might call the view template placeholder.hbs. In the placeholder template, put in text that says: this page has not been created yet.
2. In the placeholder.hbs, add a link to /:pageName/edit so the user can click on that and navigate to the edit page. You can do that in handlebars using the syntax: <a href="/{{pageName}}/edit">Create this page.</a>. The pageName property must exist on the object in the second parameter of the response.render() method call. Example: response.render('placeholder', { pageName: ... })
3. 
