import './StudentTable.css'
import StudentRow from './StudentRow.jsx'

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h2>Student Scoreboard</h2>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              index={index + 1}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable