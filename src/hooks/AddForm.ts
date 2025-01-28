import { useState, useEffect, useMemo } from "react";
import { Istudent } from "../../src/types";
import { validateStudent } from "../../src/ulills/Validation";

interface UseAddFormProps {
  onSubmit: (std: Istudent) => void;
}

const AddForm = ({ onSubmit }: UseAddFormProps) => {
  const [student, setStudent] = useState<Istudent>({
    id: "",
    name: "",
    age: 0,
    isGraduate: false,
    courseList: [],
  });
  const [studentsList, setStudentsList] = useState<Istudent[]>([]);
  const [errorList, setErrorList] = useState<string[]>([]);

  const memoizedErrorList = useMemo(() => validateStudent(student), [student]);

  useEffect(() => {
    if (errorList.length > 0) {
      setErrorList([]);
    }
  }, [student]);

  const handleChange = (field: keyof Istudent, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  const handleSubmit = () => {
    const newStudent: Istudent = { ...student, id: Date.now().toString() };

    if (memoizedErrorList.length > 0) {
      setErrorList(memoizedErrorList);
    } else {
      onSubmit(newStudent);
      handleClear();

      const updatedStudentsList = [...studentsList, newStudent];
      setStudentsList(updatedStudentsList);
      localStorage.setItem("students-list", JSON.stringify(updatedStudentsList));
      console.log("Data saved to localStorage:", updatedStudentsList);
    }
  };

  const handleClear = () => {
    setStudent({ id: "", name: "", age: 0, isGraduate: false, courseList: [] });
  };

  const handleCoursesChange = (courseList: string[]) => {
    setStudent({ ...student, courseList });
  };

  const storeData = (newData: Istudent[]) => {
    localStorage.setItem("students-list", JSON.stringify(newData));
    console.log("Data saved to localStorage:", newData);
  };

  useEffect(() => {
    storeData(studentsList);
  }, [studentsList]);

  return {
    student,
    studentsList,
    errorList,
    memoizedErrorList,
    handleChange,
    handleSubmit,
    handleClear,
    handleCoursesChange,
  };
};

export default AddForm;
