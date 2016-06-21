# Node.js 101 Exercises

Save your program as a .js file. To run the program, do: `node your-program.js` and hit ENTER in the terminal.

## Hello world

Write a program hello.js that prints "Hello, world!" to the terminal. Example output:

$ node.js hello.js
Hello, world!

## Hello to you

Write a program that takes a name as a command line argument, and says hello to that name. For more information about how to get command line arguments: https://nodejs.org/docs/latest/api/process.html#process_process_argv. Example output:

$ node hello2.js Jerry
Hello, Jerry!
$ node hello2.js Arnav
Hello, Arnav!

## Calculator

Write a program that takes two numbers as command line arguments, and prints out the sum of the numbers. Example output:

$ node calc.js 1 2
3
$ node calc.js 9 2
11

Bonus: allow the calculator to add any number of numbers:

$ node calc.js 4 8 2 4
18

## Reading a File (Sync)

Write a program that takes a file name as a command line argument, reads that file and prints the contents of the file to the terminal. You will probably want to create a file for testing, for example, create a hello.txt file and put the text `Hello, world!` in it. You will use the fs.readFileSync() method to do this: https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options. Example output:

$ node read-file.js hello.txt
Hello, world!
$ node read-file.js another-file.txt
Some other text

## Reading a File (Async)

Write the same program as the previous exercise. Except this time do it using the asynchronous API: fs.readFile(): https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback

## Convert a file to Uppercase

Same as the previous program, using the fs.readFile to read the contents of the file. But this time print out the contents of the file in ALL CAPS. Example output:

$ node read-file-all-caps.js hello.txt
HELLO, WORLD!
$ node read-file-all-caps.js another-file.txt
SOME OTHER TEXT

## Convert a file to Uppercase (2)

Like the previous problem, but this write out the uppercased version to the same file - overwriting it.

## Writing a File

Write a program that takes some text via a command line argument, and saves it to a file called data.txt. Example:

$ node save.js "Hello, world!"

The file data.txt should now contain the words: Hello, world!

## File Summary

Write a program takes a file name as a command line argument, and prints to the terminal number of lines, and the number of characters in the file.Example output:

$ node file-summary.js hello.txt
Lines: 1
Characters: 13

## Using a 3rd party module

Extending the previous program, you will also print out the number of words in the file. You will do this with the help of the natural module.

## Making a network request

Write a program that takes in an URL from the command line, makes a request to it, and prints the response to the terminal. You will use the request module to do it: https://www.npmjs.com/package/request

Example output:

$ node request.js http://hellohappy.org
...lots of HTML output...

## Save request to a file

Extend the previous program to save the body of the response to a file. The name of the file will be taken in as the second command line argument. Example output:

$ node request.js http://hellohappy.org hellohappy.html

Now the file hellohappy.html should contain the HTML content of hellohappy.org.

## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.
