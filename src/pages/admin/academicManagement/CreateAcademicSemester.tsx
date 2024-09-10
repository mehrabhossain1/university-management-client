import { FieldValues, SubmitHandler } from "react-hook-form";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableInput from "../../../components/form/ReusableInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <ReusableForm onSubmit={onSubmit}>
      <ReusableInput type="text" name="name" label="Semester Name" />
      <Button htmlType="submit">Submit</Button>
    </ReusableForm>
  );
};

export default CreateAcademicSemester;
