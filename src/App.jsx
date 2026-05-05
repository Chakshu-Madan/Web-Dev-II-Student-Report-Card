import { useState } from 'react'
import Header from './components/Header.jsx'
import StudentTable from './components/StudentTable.jsx'
import AddStudentForm from './components/AddStudentForm.jsx'

// Initial student data
const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 78 },
  { id: 2, name: 'Priya Patel', score: 35 },
  { id: 3, name: 'Rohan Mehta', score: 55 },
  { id: 4, name: 'Sneha Gupta', score: 20 },
  { id: 5, name: 'Kabir Singh', score: 90 },
]

function App() {
  // useState stores the students array in state
  // 'students' is the current data, 'setStudents' is used to update it
  // whenever setStudents is called, React re-renders the UI automatically
  const [students, setStudents] = useState(initialStudents)

  // 'updateScore' updates the score of a specific student by their id
  // 'id' - the unique id of the student to update
  // 'newScore' - the new score value entered by the user

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>   // .map() loops through all the students
      student.id === id         // if the student's id matches, we return a new object with updated score
        ? { ...student, score: Number(newScore) }
        : student
    ))    // if id doesn't match , we return the student unchanged
  }

// addStudent - adds a brand new student to the students array
// name - student name from the form input
// score - student score from the form input
  const addStudent = (name, score) => {
    // creates a new student object
    // Date.now() generates a unique number based on current time which is used as id
    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score),
    }
    setStudents([...students, newStudent])
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px' }}>
      <Header />
      <StudentTable students={students} onUpdateScore={updateScore} />
      <br />
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  )
}

export default App