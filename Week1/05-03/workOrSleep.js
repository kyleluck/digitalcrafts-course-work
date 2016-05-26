//Given a number between 0 and 6 representing the days of the week, print "Go to work." if it's a work day and "Sleep in." if it's a weekend day. #if #easy

var d = new Date();
var day = d.getDay();

if (day === 0 || day === 6) {
  console.log("Sleep in!");
} else {
  console.log("Go to work!");
}
