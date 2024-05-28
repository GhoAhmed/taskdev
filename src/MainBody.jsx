import Student from './Student';
import StudentReview from './StudentReview';

export default function MainBody() {
    const whatWeWillLearn = "React Js";
    const lectureCount = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building taskdev.
          <br />
          Total Lecture - {lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Components</li>
        </ul>
        <div className="row">Students Enrolled</div>
        <Student experience={2}
              name="Kris Walley">
              <StudentReview/>
        </Student>
        <Student experience={5}
              name="Jhon Doe">
              <StudentReview/>
        </Student>
        <Student experience={7}
              name="Rene Parker"/>
      </div>
    );
  }