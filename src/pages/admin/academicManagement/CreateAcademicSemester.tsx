import { FieldValues, SubmitHandler } from "react-hook-form";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableInput from "../../../components/form/ReusableInput";
import { Button, Col, Flex } from "antd";
import ReusableSelect from "../../../components/form/ReusableSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm onSubmit={onSubmit}>
          <ReusableInput type="text" name="name" label="Semester Name" />
          <ReusableInput type="text" name="year" label="Semester Year" />
          <ReusableSelect />
          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
