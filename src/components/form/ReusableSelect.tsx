import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TReusableSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const ReusableSelect = ({
  label,
  name,
  options,
  disabled,
}: TReusableSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default ReusableSelect;
