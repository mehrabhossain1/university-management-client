import { Button, Col, Flex } from "antd";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableInput from "../../../components/form/ReusableInput";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import ReusableSelectWithWatch from "../../../components/form/ReusableSelectWithWatch";

const OfferCourse = () => {
  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const academicSemesterOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm onSubmit={onSubmit}>
          <ReusableSelectWithWatch
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <ReusableInput type="text" name="test" label="Test" />

          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
