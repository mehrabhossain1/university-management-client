/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ReusableDatePicker from "../../../components/form/ReusableDatePicker";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableInput from "../../../components/form/ReusableInput";
import ReusableSelect from "../../../components/form/ReusableSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import {
  useAddRegisteredSemesterMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();

  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating semester...");

    const courseData = {
      ...data,
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };

    console.log(courseData);

    // try {
    //   const res = (await addSemester(courseData)) as TResponse<any>;
    //   console.log(res);

    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("Semester created successfully", { id: toastId });
    //   }
    // } catch (err: any) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm onSubmit={onSubmit}>
          <ReusableInput type="text" name="title" label="Title" />
          <ReusableInput type="text" name="prefix" label="Prefix" />
          <ReusableInput type="text" name="code" label="Code" />
          <ReusableInput type="text" name="credits" label="Credits" />
          <ReusableSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="Pre Requisite Courses"
          />
          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
