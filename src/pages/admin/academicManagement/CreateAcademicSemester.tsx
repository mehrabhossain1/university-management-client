import { FieldValues, SubmitHandler } from "react-hook-form";
import ReusableForm from "../../../components/form/ReusableForm";
import { Button, Col, Flex } from "antd";
import ReusableSelect from "../../../components/form/ReusableSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm onSubmit={onSubmit}>
          <ReusableSelect
            label="Semester Name"
            name="name"
            options={nameOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
