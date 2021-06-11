// Creates an array containing names of five students in the class
var students = [ 'Sarah', 'Orlando', 'Heather', 'Ismael', 'Hung' ];

// Logs length of the students array
console.log(students.length);

// Now, write a console log introducing each student
for (var i = 0; i < students.length; i++) {
	console.log('Welcome to the class ' + students[i]);
}
