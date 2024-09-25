import { Button, Col, Row } from "antd";
import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourse.api";

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);

  const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
    const key = item.course.title;

    acc[key] = acc[key] || { courseTitle: key, sections: [] };

    acc[key].sections.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });

    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});

  return (
    <Row gutter={[0, 20]}>
      {modifiedData?.map((item) => (
        <Col
          key={item.courseTitle}
          span={24}
          style={{ border: "2px solid #d4d4d4" }}
        >
          <div style={{ padding: "10px" }}>
            <h1>{item.courseTitle}</h1>
          </div>
          <div>
            {item.sections?.map((section) => (
              <Row
                key={section._id}
                justify="space-between"
                align="middle"
                style={{ borderTop: "2px solid #d4d4d4", padding: "10px" }}
              >
                <Col span={5}>Section: {section.section}</Col>
                <Col span={5}>
                  Days:
                  {section.days.map((day) => (
                    <span> {day} </span>
                  ))}
                </Col>
                <Col span={5}>Start Time: {section.startTime}</Col>
                <Col span={5}>End Time: {section.endTime}</Col>
                <Button>Enroll</Button>
              </Row>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default OfferedCourse;
