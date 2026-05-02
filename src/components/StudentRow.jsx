import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, index, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score)
  const isPassing = student.score >= 40

  const handleUpdate = () => {
    onUpdateScore(student.id, inputScore)
  }

  return (
    <tr className="student-row">
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        {isPassing ? (
          <span className="status-pass">Pass</span>
        ) : (
          <span className="status-fail">Fail</span>
        )}
      </td>
      <td>
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            className="score-input"
          />
          <button onClick={handleUpdate} className="update-btn">
            Update
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow