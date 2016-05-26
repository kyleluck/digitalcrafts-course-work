# HTTP Exercises

## 1. See your website

Use Chrome to go to a website you made. This can be a site you made during class, but doesn't have to be. Use the Developer Tools network tab to view the network requests that were made. You should see a request for the HTML file, and then additional requests any CSS and JS file that were linked from the HTML file. You can click into each individual request and view their respective request and response headers, and response bodies.

## 2. See your website more

Use Wireshark to view the HTTP communication your browser makes to a website you made. See the screenshots in wireshark directory for more info.

## 3. Use curl

Use curl to fetch the web page to your website using the -v flag. curl is a handy tool for quickly making an HTTP request and examining the response.

```
curl -v <your website url>
```

Find other files on your website: JS files, CSS files, image files. You can do this by using "view source" or by looking at the network tab of the Chrome Dev Tools. Use the curl command to fetch these resources on the command line as well. Hint: you can right click on a request and select "copy as cURL", and then go to your terminal and paste in the required curl command.

## 4. Use curl more

Pick 5 websites you like. Use curl to fetch the URL for each of these websites. Look at their source code and note anything that's interesting.

## 5. Duck Duck Go

Send a query to Duck Duck Go:

```
curl https://duckduckgo.com/?q=hello
```

Look at the source for the search results. Change the search query - the q parameter and run the command again, see the different results for the new query.

## 6. Duck Duck Go Form

Make your own Duck Duck Go form. You will make your own form page that searches Duck Duck Go. The form needs to have an `action` attribute of `https://duckduckgo.com` and a `method` attribute of `GET`, a text input and a submit button. When this form submits, it should go to the Duck Duck Go search results page, displaying the results for the search query the user typed in.

## 7. Make a Contact Form

Make your own contact form contact.html. It should at the minimum contain:

* a name field
* a message text area

but not limited to those, be creative. Give each form element a `name` attribute - they will used in the submit request. Use `submit.php` as the action attribute of the form, and set the `method` attribute to `GET`. Run in the same directory the command to run a local server:

```
php -S localhost:3000
```

Go to http://localhost:3000/contact.html to run your form. Fill it in and submit it. You should see the entered form information displayed under query parameters.

Use http://htmldog.com/guides/html/beginner/forms/ as a reference.

## 8. POST Method

Change your contact form's `method` attribute to `POST`. Fill it out and submit again. See that the now, Post parameters are displayed rather than query parameters.

## 9. View the form requests

Use Wireshark to view the difference between using a GET request vs using a POST request for your form.

Do the following for both method="GET" and method="POST" to compare the difference between a GET and a POST request.

This time in Wireshark, under Capture -> Options, select the "Loopback: lo0" interface. This interface captures any network traffic your computer makes to itself - click "Start". Fill in the form and submit again and find the HTTP request GET /submit.php. Right click and select "Follow TCP stream". Copy this network stream data into a text file. Remember to click the filter box by clicking on the "x" button to the right before trying to capture data for a different form method.
