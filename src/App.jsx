import { useState } from 'react'
import Header from './components/Header.jsx'
import StudentTable from './components/StudentTable.jsx'
import AddStudentForm from './components/AddStudentForm.jsx'

const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 78 },
  { id: 2, name: 'Priya Patel', score: 35 },
  { id: 3, name: 'Rohan Mehta', score: 55 },
  { id: 4, name: 'Sneha Gupta', score: 20 },
  { id: 5, name: 'Kabir Singh', score: 90 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    ))
  }

  const addStudent = (name, score) => {
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