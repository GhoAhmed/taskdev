import React from "react";
import Student from "./Components/Student";
import StudentReview from "./Components/StudentReview";
class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building
          TaskDev! <br />
          Total Lecture - {lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student
          experience={2}
          name="Kris Walley"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="Angel Patrice"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Rene Parker"
        >
          <StudentReview />
        </Student>
      </div>
    );
  }
}

export default MainBody;
