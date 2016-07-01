/*

## Basic CRUD (Create, Retrieve, Update, Delete)

1. Using the student model you made in the previous section, write a Node program to create a student in the DB.
2. Write a program to find all students in the collection.
3. Write a program to find the student you created by name.
4. Write a program to increment that student's points value by 1.
5. Write a program to first find that student, retrieve his ID, then remove that student in the DB by id.

## Validation

Add data validation to the student model. Making:

* name required
* links.website required
* links.github required
* gender required and can only be 'female' or 'male'

1. Try saving an object that doesn't meet the requirements. Do you get an error? Print out the detailed validation errors.
2. Save an object that does meet the requirements.

## Aggregation

Use the zipcode model you made earlier. Write a Node program that performs an aggregation query to find the top 3 most populated cities and print them out to the console.

*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exercises');

// Student model
var Student = mongoose.model('Student', {
  name: { type: String, required: true },
  links: {
    website: String,
    github: String
  },
  gender: { type: String, enum: ['female', 'male'], required: true },
  points: { type: Number, min: 0, max: 100 },
  projects: [String]
});

// Jazz model
var Jazz = mongoose.model('Jazz', {
  name: { type: String, required: true },
  artist: { type: String, required: true },
  released: Number,
  duration: Number,
  styles: [String]
});

// create a student:
var kyle = new Student({
  name: 'Kyle',
  links: {
    website: 'http://kyleluck.com',
    github: 'https://github.com/kyleluck'
  },
  gender: 'male',
  points: 100,
  projects: ['SentiMotion', 'Draw Together', 'Memory Game', 'Blackjack']
});

var anthony = new Student({
  name: 'Anthony',
  links: {
    website: 'http://anthonythompson.com',
    github: 'https://github.com/anthonythompson'
  },
  gender: 'male',
  points: 100,
  projects: ['SentiMotion', 'Memory Game']
});

/* OPTION 1 IS TO USE NEW AND THEN SAVE */

//save kyle to mongodb
// kyle.save(function(err) {
//   if (err) {
//     return console.error(err.errors);
//   }
//   console.log('Saved kyle!', kyle);
// });

//save anthony to mongodb
// anthony.save(function(err) {
//   if (err) {
//     return console.error(err.errors);
//   }
//   console.log('Saved Anthony!', anthony);
// });

/* OPTION TWO IS TO USE CREATE */
// Student.create({
//   name: 'Anthony',
//   links: {
//     website: 'http://anthonythompson.com',
//     github: 'https://github.com/anthonythompson'
//   },
//   gender: 'male',
//   points: 100,
//   projects: ['SentiMotion', 'Memory Game']
// }, function(err, res) {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Save succeeded');
// });


//find all students
// Student.find(function(err, students) {
//   if (err) {
//     return console.error(err.errors);
//   }
//   console.log('Found students: ', students);
// });

//find kyle
// Student.find({ name: 'Kyle' }, function(err, student) {
//   if (err) {
//     return console.error(err.errors);
//   }
//   if (!student) {
//     console.log('No student was found');
//   } else {
//     console.log('Found Kyle: ', student);
//   }
// });

//update kyle points to 15
// kyle.points = 15;
// kyle.save(function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Kyle updated');
// });

/* instead of creating an object with new and then saving it to the db
  alternatively you can do Student.create()
*/

/* Write a program to first find that student, retrieve his ID, then remove that student in the DB by id. */
Student.findOne({ name: 'Anthony' }, function(err, student) {
  if (err) {
    return console.error(err.errors);
  }
  if (!student) {
    console.log('No student was found');
  } else {
    var id = student._id;
    // student.remove(
    //   { _id: id }, //selector
    //   function(err, response) {
    //     if (err) {
    //       return console.error(err);
    //     }
    //     console.log('Successfully removed Anthony', response);
    //   }
    // );
  }
});

/* increment kyle's points by 1 */
Student.findOne({ name: 'Kyle' }, function(err, student) {
  if (err) {
    return console.error(err);
  }
  student.points++;
  student.save(function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Kyle points updated');
  });
});

/* try to save object with validation errors */
var toby = new Student({
  name: 'Toby',
  links: {
    website: 'http://tobyho.com',
    github: 'https://github.com/airportyh'
  },
  gender: 'male',
  points: 100,
});

// save toby, he doesn't have a projects property, but there will be one
// created because it's defined in the model
toby.save(function(err) {
  if (err) {
    return console.error(err); //we get a validation error here
  }
  console.log('toby saved!');
});
