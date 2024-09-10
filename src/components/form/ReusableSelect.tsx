import { Form, Select } from "antd";

const ReusableSelect = ({ label }) => {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <Form.Item label={label}>
      <Select
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "jack", label: "Jack" },
        ]}
      />
    </Form.Item>
  );
};

export default ReusableSelect;
