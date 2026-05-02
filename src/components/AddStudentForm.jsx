import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '') {
      alert('Please enter a student name')
      return
    }
    if (score === '' || Number(score) < 0 || Number(score) > 100) {
      alert('Please enter a valid score between 0 and 100')
      return
    }

    onAddStudent(name.trim(), score)

    setName('')
    setScore('')
  }

  return (
    <div className="form-wrapper">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="e.g. Ananya Verma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Score (0 – 100)</label>
          <input
            type="number"
            placeholder="e.g. 72"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          + Add Student
        </button>
      </form>
    </div>
  )
}

export default AddStudentForm