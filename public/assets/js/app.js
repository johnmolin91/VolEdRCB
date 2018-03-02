

var teacherArray = [ {
    id: 1,
    name: 'Robert Hickson',
    email: 'rhickson@gmail.com',
    category: 'Arts and Humanities',
    subject: ' The Civil War',
    location: 'New Brunswick Library',
    timeOf: '6-8pm',
    dateOf: 'March 18, 2018',
    numStudents: 4,
    description: 'A house divided against itself cannot stand. The United States could no longer remain half-slave and half-free, and the ensuing war over the fate of slavery ripped apart the nation.' },
  {
    id: 2,
    name: 'James Smith',
    email: 'jsmith@hotmail.com',
    category: 'Computer',
    subject: 'Advanced JS: Games and Visualizations',
    location: 'Franklin Township Library',
    timeOf: '6:30-8:30pm',
    dateOf: 'March 7, 2018',
    numStudents: 2,
    description: 'A quick tour of the many components of games and visualizations, demonstrated by some of our favorite programs.' },
  {
    id: 3,
    name: 'Darren Johnson',
    email: 'djohnson@yahoo.com',
    category: 'Economics and Finance',
    subject: 'The Monetary System',
    location: 'Bridgewater Library',
    timeOf: '12:30-1:30pm',
    dateOf: 'March 29, 2018',
    numStudents: 7,
    description: 'Fractional reserve banking and the money supply.' },
  {
    id: 4,
    name: 'Steve Jones',
    email: 'sjones@yahoo.com',
    category: 'Economics and Finance',
    subject: 'Macroeconomics',
    location: '300 Atrium Drive',
    timeOf: '12:30-2:30pm',
    dateOf: 'March 16, 2018',
    numStudents: 9,
    description: 'Learn about the workings of the economy.' },
  {
    id: 5,
    name: 'Jason Moore',
    email: 'jmoore@hotmail.com',
    category: 'Computer',
    subject: 'Natural Simulations',
    location: 'Franklin Township Library',
    timeOf: '2-4pm',
    dateOf: 'March 30, 2018',
    numStudents: 8,
    description: 'Once you\'ve taken Intro to JS, you can go through this course to learn how to combine JS, ProcessingJS, and mathematical concepts to simulate nature in your programs.' },
  {
    id: 6,
    name: 'Kyle Lee',
    email: 'klee@gmail.com',
    category: 'Computer',
    subject: 'Algorithm',
    location: 'Rutgers Auditorium',
    timeOf: '5:00-6:30pm',
    dateOf: 'April 6, 2018',
    numStudents: 17,
    description: 'What are algorithms and why should you care? ' },
  {
    id: 7,
    name: 'Leann Johnson',
    email: 'ljohnson@hotmail.com',
    category: 'Science',
    subject: 'Special Relativity',
    location: 'Rutgers Atrium',
    timeOf: '5-7pm',
    dateOf: 'March 14, 2018',
    numStudents: 12,
    description: 'Think you know about time and space? Think again. Einstein basically did a pile driver on all our brains when he came up with his theory of special relativity.' },
  {
    id: 8,
    name: 'Regina Johnson',
    email: 'rjohnson@gmail.com',
    category: 'Maths',
    subject: 'Confidence Intervals',
    location: 'Franklin Township Library',
    timeOf: '2-4pm',
    dateOf: 'March 7, 2018',
    numStudents: 18,
    description: 'Confidence intervals give us a range of plausible values for some unknown value based on results from a sample.' },
  {
    id: 9,
    name: 'Kayla Boylan',
    email: 'kboylan@gmail.com',
    category: 'Arts and Humanities',
    subject: 'Global Contemporary Art',
    location: 'New Brunswick Library',
    timeOf: '12-1pm',
    dateOf: 'March 17, 2018',
    numStudents: 14,
    description: '21st-century art is a burgeoning field of practice, research, and publication, making it an incredibly dynamic field of study.' },
  {
    id: 10,
    name: 'Tom Smith',
    email: 'tsmith@gmail.com',
    category: 'Science',
    subject: 'Human Anatomy and Physiology',
    location: 'Rutgers Atrium',
    timeOf: '3-4pm',
    dateOf: 'March 20, 2018',
    numStudents: 11,
    description: 'Get introduced to the major organ systems of the human body!' },
  {
    id: 11,
    name: 'Pat Stevens',
    email: 'pstevens@gmail.com',
    category: 'Maths',
    subject: 'Study Design',
    location: 'Piscataway Township Library',
    timeOf: '11-1pm',
    dateOf: 'March 6, 2018',
    numStudents: 21,
    description: 'Statistics is all about forming questions and gathering data to explore those questions.' },
  {
    id: 12,
    name: 'Jim Edwards',
    email: 'jedwards@gmail.com',
    category: 'Arts and Humanities',
    subject: 'The Gilded Age',
    location: 'New Brunswick Cafe',
    timeOf: '12-2pm',
    dateOf: 'March 16, 2018',
    numStudents: 10,
    description: 'After the Civil War, the United States emerged as the world\'s foremost industrial power. With that came great wealth and great poverty.' } ]

var studentArray = [{ id: 1, name: 'John Molin', teacher_id: 3 },
{ id: 2, name: 'Carl Lopez', teacher_id: 2 },
{ id: 3, name: 'Jim Walker', teacher_id: 1 } ];

console.log(teacherArray);

function swap(teacherArray, i, j) {
  var temp = teacherArray[i];
  teacherArray[i] = teacherArray[j];
  teacherArray[j] = temp;
};

function bubbleSortBasic(teacherArray) {
  for(var i = 0; i < teacherArray.length; i++) {
    for(var j = 1; j < teacherArray.length; j++) {
      if(teacherArray[j - 1].numStudents < teacherArray[j].numStudents) {
        swap(teacherArray, j - 1, j);
      }
    }
  }
  return teacherArray;
}

bubbleSortBasic(teacherArray);


function displayTeachers() {
    for (var i = 0; i<teacherArray.length; i++) {
    	var createCard = $("<div>");
        createCard.addClass("card-body");
        var textDisplay = "<b>" + teacherArray[i].subject + "</b><br>";
        textDisplay += "Lecturer: " + teacherArray[i].name + "<br>";
        textDisplay += teacherArray[i].description + "<br>";
        textDisplay += "Number of students: " + teacherArray[i].numStudents + "<br>";
        textDisplay += "Where: " + teacherArray[i].location + "<br>";
        textDisplay += "Time: " + teacherArray[i].timeOf + "<br>";
        textDisplay += teacherArray[i].dateOf + "<br>";
        createCard.html(textDisplay);
	    $(".card-teacher"+(i+1)).append(createCard);
    }
};

displayTeachers();