import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourse.api";

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);

  const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
    const key = item.course.title;

    acc[key] = acc[key] || { courseTitle: key, sections: [] };

    acc[key].sections.push({
      section: item.section,
      _id: item._id,
    });

    return acc;
  }, {});

  console.log(singleObject);

  return (
    <div>
      <h1>This is OfferedCourse component</h1>
    </div>
  );
};

export default OfferedCourse;
