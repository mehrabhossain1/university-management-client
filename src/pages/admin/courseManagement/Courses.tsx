import { Button, Modal, Table } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { useState } from "react";
import ReusableForm from "../../../components/form/ReusableForm";
import ReusableSelect from "../../../components/form/ReusableSelect";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";

const Courses = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: coursesData, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = coursesData?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return <AddFacultyModal data={item} />;
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination, //! Underscore for not using right now
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //   }
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      // showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

const AddFacultyModal = ({ data }) => {
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  console.log(facultiesData);

  const facultiesOption = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handleSubmit = (data) => {
    console.log(data);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReusableForm onSubmit={handleSubmit}>
          <ReusableSelect
            mode="multiple"
            options={facultiesOption}
            name="faculties"
            label="Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </ReusableForm>
      </Modal>
    </>
  );
};

export default Courses;
