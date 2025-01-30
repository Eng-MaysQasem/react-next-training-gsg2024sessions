import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Student from "../Componanets/Student/Student.componannt";
import { Istudent } from "../types";

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentStudent, setCurrentStudent] = useState<Istudent | null>(null);

  useEffect(() => {
    console.log(" Fetching student data...");

    const studentsListStr = localStorage.getItem("students-list");

    if (studentsListStr) {
      const studentsList: Istudent[] = JSON.parse(studentsListStr);
      

      // Find the student matching the ID from the URL
      const student = studentsList.find((item) => item.id === id);
      
      if (student) {
     
        setCurrentStudent(student);
      } else {
        console.warn(" Student not found! ID mismatch?");
      }
    } else {
      console.warn(" No students list found in localStorage!");
    }
  }, [id]);

  const handleAbsentChange = (studentId: string, absents: number) => {
    if (!currentStudent) return;

    const updatedStudent = { ...currentStudent, absents };
    setCurrentStudent(updatedStudent);

    const studentsListStr = localStorage.getItem("students-list");
    if (studentsListStr) {
      let studentsList: Istudent[] = JSON.parse(studentsListStr);
      studentsList = studentsList.map((s) => (s.id === studentId ? updatedStudent : s));
      localStorage.setItem("students-list", JSON.stringify(studentsList));
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      {currentStudent ? (
        <Student
          id={currentStudent.id}
          name={currentStudent.name}
          age={currentStudent.age}
          isGraduate={currentStudent.isGraduate}
          list={currentStudent.courseList}
          onAbsentChange={handleAbsentChange}
        />
      ) : (
        <p style={{ color: "red" }}>❌ cannot find any student</p>
      )}
    </div>
  );
};

export default StudentDetails;
