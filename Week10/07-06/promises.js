






/*

    ____                       _
   / __ \_________  ____ ___  (_)_______  _____
  / /_/ / ___/ __ \/ __ `__ \/ / ___/ _ \/ ___/
 / ____/ /  / /_/ / / / / / / (__  )  __(__  )
/_/   /_/   \____/_/ /_/ /_/_/____/\___/____/

You've seen them before!

*/


$http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY)
  .success(function(data) {
    console.log("Got data:", data);
  });

// $http.get() returns a promise, which has a success() method. But .success() is not a standard method of promises.










/*

 __    __ _           ___
/ / /\ \ \ |__  _   _/ _ \
\ \/  \/ / '_ \| | | \// /
 \  /\  /| | | | |_| | \/
  \/  \/ |_| |_|\__, | ()
                |___/



* consolidated error handling
* fewer nesting flatten callbacks / avoids pyramid of doom
* cleaner reusable functions that return promises

*/











/*

__    __ _           _   ___
/ / /\ \ \ |__   __ _| |_/ _ \
\ \/  \/ / '_ \ / _` | __\// /
\  /\  /| | | | (_| | |_  \/
 \/  \/ |_| |_|\__,_|\__| ()


* a promise represents a value which will - I promise! - resolve at some point in the future
* commonly used for asynchronous operations
* why doesn't Node.js use this by default? It's political

*/








/*

__ _        _
/ _\ |_ __ _| |_ ___  ___
\ \| __/ _` | __/ _ \/ __|
_\ \ || (_| | ||  __/\__ \
\__/\__\__,_|\__\___||___/
==========================

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

*/










/*
   __                           _      
  /__\_  ____ _ _ __ ___  _ __ | | ___
 /_\ \ \/ / _` | '_ ` _ \| '_ \| |/ _ \
//__  >  < (_| | | | | | | |_) | |  __/
\__/ /_/\_\__,_|_| |_| |_| .__/|_|\___|
                      |_|
*/












/*
 _______  __   __  _______  __    _
|       ||  | |  ||       ||  |  | |
|_     _||  |_|  ||    ___||   |_| |
  |   |  |       ||   |___ |       |
  |   |  |       ||    ___||  _    |
  |   |  |   _   ||   |___ | | |   |
  |___|  |__| |__||_______||_|  |__|
*/


// then() is a standard method of promises:

$http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY)
  .then(function(response) {
    console.log("Got data:", response.data);
    console.log("Status:", response.status);
  });










/*
  _   ____
 (_) /___ \_   _  ___ _ __ _   _
 | |//  / / | | |/ _ \ '__| | | |
 | / \_/ /| |_| |  __/ |  | |_| |
_/ \___,_\ \__,_|\___|_|   \__, |
|__/                        |___/
*/


// jQuery ajax also supports promises:

$.ajax({
  url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY
}).then(function(data) {
  console.log("Got data:", data);
});









/*
  /\/\   ___  _ __   __ _  ___   ___  ___  ___
 /    \ / _ \| '_ \ / _` |/ _ \ / _ \/ __|/ _ \
/ /\/\ \ (_) | | | | (_| | (_) | (_) \__ \  __/
\/    \/\___/|_| |_|\__, |\___/ \___/|___/\___|
                    |___/

*/

// Mongoose also supports promises out of the box (just don't pass in a callback):

Student.findOne({ name: 'Matt' })
  .then(function(matt) {
    console.log('We found matt:', matt);
  });










// vs

Student.findOne({ name: 'Matt' }, function(err, matt) {
  if (err) {
    console.error("We didn't find Matt because:", err.message);
    return;
  }
  console.log('We found matt:', matt);
});









/*

__    __ _                   _      _   _                           ___
/ / /\ \ \ |__   ___ _ __ ___( )__  | |_| |__   ___    ___ _ __ _ __/ _ \
\ \/  \/ / '_ \ / _ \ '__/ _ \/ __| | __| '_ \ / _ \  / _ \ '__| '__\// /
 \  /\  /| | | |  __/ | |  __/\__ \ | |_| | | |  __/ |  __/ |  | |    \/
  \/  \/ |_| |_|\___|_|  \___||___/  \__|_| |_|\___|  \___|_|  |_|    ()


Where did the error handling go?

Well, you can use the catch method to catch errors:
*/


Student.findOne({ name: 'Matt' })
  .then(function(matt) {
    console.log('We found matt:', matt);
  })
  .catch(function(err) {
    console.error("We didn't find Matt because:", err.message);
  });






// vs

Student.findOne({ name: 'Matt' }, function(err, matt) {
  if (err) {
    console.error("We didn't find Matt because:", err.message);
    return;
  }
  console.log('We found matt:', matt);
});












/*

╦┌─┐  ┌┬┐┬ ┬┬┌─┐  ┬─┐┌─┐┌─┐┬  ┬ ┬ ┬  ╔╗ ┌─┐┌┬┐┌┬┐┌─┐┬─┐┌─┐
║└─┐   │ ├─┤│└─┐  ├┬┘├┤ ├─┤│  │ └┬┘  ╠╩╗├┤  │  │ ├┤ ├┬┘ ┌┘
╩└─┘   ┴ ┴ ┴┴└─┘  ┴└─└─┘┴ ┴┴─┘┴─┘┴   ╚═╝└─┘ ┴  ┴ └─┘┴└─ o

*/


















/*

   ___ _           _       _
  / __\ |__   __ _(_)_ __ (_)_ __   __ _
 / /  | '_ \ / _` | | '_ \| | '_ \ / _` |
/ /___| | | | (_| | | | | | | | | | (_| |
\____/|_| |_|\__,_|_|_| |_|_|_| |_|\__, |
                                   |___/

Your then callback function can return another promise.
The .catch callback at the end will catch either of the 2 possible errors
*/

Student.findOne({ name: 'Matt' })
  .then(function(matt) {
    matt.points++;
    return matt.save();
  })
  .catch(function(err) {
    console.error(err.message);
  });


// What would the Node callback style code look like?








// You can also return plain objects or values from your then callback

// Note: this example substitutes the fs-promise module for the standard fs module.

var fs = require('fs-promise');

fs.readFile('data.json')
  .then(function(buffer) {
    var contents = buffer.toString();
    return JSON.parse(contents);
  })
  .then(function(data) {
    console.log('Got data:', data);
  })
  .catch(function(err) {
    console.error(err.message);
  });


// What would the Node callback style code look like?









// User registration example:

// 1. generate encrypted password
bcrypt.hash(info.password, 10, function(err, encryptedPassword) {
  // 2. error handling
  if (err) {
    console.error(err.message);
    return;
  }
  // 3. create a user in the DB
  User.create({
    _id: info.username,
    encryptedPassword: encryptedPassword
  }, function(err) {
    // 4. error handling
    if (err) {
      console.error(err.message);
      return;
    }
    // 5. success
    console.log('Success!');
  });
});




// User registration with promise chaining and consolidated error handling
// Note: this example substitutes the bcrypt-as-promised module for the bcrypt module:

var bcrypt = require('bcrypt-as-promised');

// 1. generate encrypted password
bcrypt.hash(info.password, 10)
  .then(function(encryptedPassword) {
    // 2. create a user in the DB
    return User.create({
      _id: info.username,
      encryptedPassword: encryptedPassword
    });
  })
  .then(function() {
    // 3. success
    console.log('Success!');
  })
  .catch(function(err) {
    // 4. consolidated error handling
    console.error(err.message);
  });









/*

Cleaner, better, easier to write *and* use
   __                      _     _
  /__\ ___ _   _ ___  __ _| |__ | | ___
 / \/// _ \ | | / __|/ _` | '_ \| |/ _ \
/ _  \  __/ |_| \__ \ (_| | |_) | |  __/
\/ \_/\___|\__,_|___/\__,_|_.__/|_|\___|

   ___                 _   _
  / __\   _ _ __   ___| |_(_) ___  _ __  ___
 / _\| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
/ /  | |_| | | | | (__| |_| | (_) | | | \__ \
\/    \__,_|_| |_|\___|\__|_|\___/|_| |_|___/

*/








/*
              _    _
  /\/\   __ _| | _(_)_ __   __ _
 /    \ / _` | |/ / | '_ \ / _` |
/ /\/\ \ (_| |   <| | | | | (_| |
\/    \/\__,_|_|\_\_|_| |_|\__, |
                           |___/

/\_/\___  _   _ _ __
\_ _/ _ \| | | | '__|
 / \ (_) | |_| | |
 \_/\___/ \__,_|_|

   ___
  /___\__      ___ __
 //  //\ \ /\ / / '_ \
/ \_//  \ V  V /| | | |
\___/    \_/\_/ |_| |_|
*/



// A promise that fulfills instantly:
var p = Promise.resolve(1);















// A promise that fulfills a second later:
var p = new Promise(function(accept, reject) {
  setTimeout(function() {
    accept(1);
  }, 1000);
});














// A promise that rejects a second later:
var p = new Promise(function(accept, reject) {
  setTimeout(function() {
    reject(new Error('no bueno'));
  }, 1000);
});











// A promise that reads a file using fs.readFile API
var p = new Promise(function(accept, reject) {
  fs.readFile('somefile.txt', function(err, buffer) {
    if (err) {
      reject(err);
      return;
    }
    accept(buffer);
  });
});







// A readFile function that returns a promise:

function readFile(filename) {
  return new Promise(function(accept, reject) {
    fs.readFile(filename, function(err, buffer) {
      if (err) {
        reject(err);
        return;
      }
      accept(buffer);
    });
  });
}







/*
╔╗╔┌─┐┌┬┐┬┬  ┬┌─┐  ╔═╗┬─┐┌─┐┌┬┐┬┌─┐┌─┐  ╔═╗╔═╗╦
║║║├─┤ │ │└┐┌┘├┤   ╠═╝├┬┘│ │││││└─┐├┤   ╠═╣╠═╝║
╝╚╝┴ ┴ ┴ ┴ └┘ └─┘  ╩  ┴└─└─┘┴ ┴┴└─┘└─┘  ╩ ╩╩  ╩

vs

╔═╗┬─┐┌─┐┌┬┐┬┌─┐┌─┐  ╦  ┬┌┐ ┬─┐┌─┐┬─┐┬┌─┐┌─┐
╠═╝├┬┘│ │││││└─┐├┤   ║  │├┴┐├┬┘├─┤├┬┘│├┤ └─┐
╩  ┴└─└─┘┴ ┴┴└─┘└─┘  ╩═╝┴└─┘┴└─┴ ┴┴└─┴└─┘└─┘

* Bluebird
* Q
* RSVP
* When

*/
