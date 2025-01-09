
import "./CoursesList.css";
interface IProps {
  list: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default CoursesList;
