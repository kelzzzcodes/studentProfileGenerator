const students = [
  {
    firstName: 'Kelechi',
    lastName: 'Otugbuali',
    sex: 'Male',
    age: 20,
    score: 88,
    courses: ['Math', 'Physics', 'Computer Science'],
  },
  {
    firstName: 'Cynthia',
    lastName: 'Ezeakolam',
    sex: 'Female',
    age: 19,
    score: 91,
    courses: ['Biology', 'Chemistry', 'English', 'Literature'],
  },
  {
    firstName: 'Gilbert',
    lastName: 'James',
    sex: 'Male',
    age: 21,
    score: 76,
    courses: ['Economics', 'Accounting', 'Statistics'],
  },
  {
    firstName: 'Kenneth',
    lastName: 'Whyte',
    sex: 'Male',
    age: 22,
    score: 83,
    courses: ['Philosophy', 'Sociology', 'Political Science'],
  },
  {
    firstName: 'Chinwe',
    lastName: 'Dimabo',
    sex: 'Female',
    age: 20,
    score: 89,
    courses: ['Art', 'History', 'Geography', 'Civic Education'],
  },
]

// Using .map() and destructuring to create a descriptive array
const studentDescriptions = students.map(
  ({ firstName, lastName, age, score, courses, sex }) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. ${
      sex === 'Female' ? 'She' : 'He'
    } is taking the following courses: ${courses.join(', ')}.`
  },
)

// Logging each student nicely using .forEach()
studentDescriptions.forEach((desc, index) => {
  console.log(`Student ${index + 1}:\n${desc}\n`)
})
