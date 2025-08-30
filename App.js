import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'Aisha Khan', course: 'Computer Science' },
    { id: 2, name: 'Rahul Sharma', course: 'Information Technology' },
    { id: 3, name: 'Shifa Aqueel', course: 'Computer Engineering' },
  ];

  return (
    <div className="app">
      <Header title="Day 17 — React Functional Components" />
      <main className="content">
        {students.map((s) => (
          <StudentCard key={s.id} name={s.name} course={s.course} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
