// the 0-th argv is actually the path to the node executable program
var nodeExecutablePath = process.argv[0];
// the 1st argv is the path to the node program that's being run, in this case 1-argv.js
var nodeProgramPath = process.argv[1];
// get 2nd argv is actually the first command line argument
var firstCommandLineArgument = process.argv[2];

var secondCommandLineArgument = process.argv[3];

console.log('Node executable path:', nodeExecutablePath);
console.log('Node program path:', nodeProgramPath);
console.log('First command line argument:', firstCommandLineArgument);
console.log('Second command line argument:', secondCommandLineArgument);

console.log('All the argv: ', process.argv);
