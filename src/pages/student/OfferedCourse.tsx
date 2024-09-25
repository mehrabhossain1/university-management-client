import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourse.api";

const OfferedCourse = () => {
  const { data } = useGetAllOfferedCoursesQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is OfferedCourse component</h1>
    </div>
  );
};

export default OfferedCourse;
