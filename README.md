# 📋 Student Report Card

A React application to display and manage student scores, built as part of **Web Dev II — Unit 3 Lab Assignment**.

---

## 📸 Preview

Student Report Card    <img width="1347" height="607" alt="image" src="https://github.com/user-attachments/assets/1f173a1c-988f-4b67-bc93-5ce4cea1fe19" />


---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — build tool & dev server
- **JavaScript (JSX)** — logic & templating
- **Pure CSS** — styling (no Tailwind, no libraries)

---

## ✨ Features

- 📊 View all students and their scores in a table
- ✅ Pass / Fail status based on score (Pass ≥ 40, Fail < 40)
- ✏️ Update any student's score dynamically
- ➕ Add new students using a form
- 🎨 Dark black-blue themed UI

---

## 🧩 Component Structure

```
App
├── Header
├── StudentTable
│   └── StudentRow (reusable)
└── AddStudentForm
```

| Component | Description |
|---|---|
| `App` | Root component — holds all state |
| `Header` | Displays app title |
| `StudentTable` | Renders the student data table |
| `StudentRow` | Reusable row for each student |
| `AddStudentForm` | Form to add a new student |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/student-report-card.git

# Navigate into the project
cd student-report-card

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📚 Concepts Used

- `useState` hook for state management
- Props for passing data between components
- Conditional rendering for Pass/Fail status
- Array `.map()` for rendering lists
- Controlled inputs for form handling
- Component-based architecture

---

## 📁 Project Structure

```
student-report-card/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Header.css
        ├── StudentTable.jsx
        ├── StudentTable.css
        ├── StudentRow.jsx
        ├── StudentRow.css
        ├── AddStudentForm.jsx
        └── AddStudentForm.css
```

---

## 👨‍💻 Author

Made with 💙 for Web Dev II — Unit 3 Lab Assignment
