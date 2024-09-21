import { Button, Col, Flex } from "antd";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableInput from "../../../components/form/ReusableInput";
import {
  useGetAcademicDepartmentsQuery,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import ReusableSelectWithWatch from "../../../components/form/ReusableSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ReusableSelect from "../../../components/form/ReusableSelect";
import {
  useCreateOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetCourseFacultiesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { weekDaysOptions } from "../../../constants/global";
import ReusableTimePicker from "../../../components/form/ReusableTimePicker";
import moment from "moment";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");

  const [addOfferedCourse] = useCreateOfferedCourseMutation();
  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: "sort", value: "year" },
    { name: "status", value: "UPCOMING" },
  ]);
  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);
  const { data: academicDepartmentData } =
    useGetAcademicDepartmentsQuery(undefined);
  const { data: coursesData } = useGetAllCoursesQuery(undefined);
  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultiesQuery(courseId, { skip: !courseId });

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );
  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );
  const courseOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));
  const facultiesOptions = facultiesData?.data?.faculties?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const offeredCourseData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };

    const res = await addOfferedCourse(offeredCourseData);
    console.log(res);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ReusableForm onSubmit={onSubmit}>
          <ReusableSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />

          <ReusableSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />

          <ReusableSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />

          <ReusableSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />

          <ReusableSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />

          <ReusableInput type="text" name="section" label="Section" />
          <ReusableInput type="text" name="maxCapacity" label="Max Capacity" />

          <ReusableSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />

          <ReusableTimePicker name="startTime" label="Start Time" />
          <ReusableTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
