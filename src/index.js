import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Footer from './Footer';
import Students from './Students';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  const whatWeWillLearn = "React Js";
  const lectureCount = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building taskdev.
        <br />
        Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Components</li>
      </ul>
    </div>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
