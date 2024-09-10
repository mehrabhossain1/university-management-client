/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import ReusableForm from "../../../components/form/ReusableForm";
import { Button, Col, Flex } from "antd";
import ReusableSelect from "../../../components/form/ReusableSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions, yearOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      console.log(semesterData);
      const res = await addAcademicSemester(semesterData);
      console.log(res);
    } catch (err: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <ReusableSelect
            label="Semester Name"
            name="name"
            options={semesterOptions}
          />
          <ReusableSelect label="Year" name="year" options={yearOptions} />
          <ReusableSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <ReusableSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
