import { Istudent } from "../types";

const validateStudent = (newStudent: Istudent): string[] => {
  const errors: string[] = [];
  // Validate the object before sending it
  if (newStudent.name.length < 3) {
    errors.push("The name must be more than 3 letters");
  }
  if (newStudent.age < 17 || newStudent.age > 25) {
    errors.push("The age must be between 17 & 25");
  }
  if (newStudent.courseList.length <= 0) {
    errors.push("At least you must add one course");
  }
  return errors;
};

export {
  validateStudent,
};
