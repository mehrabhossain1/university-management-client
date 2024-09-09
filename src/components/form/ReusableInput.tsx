import { useFormContext } from "react-hook-form";

const ReusableInput = ({ type, name, label }) => {
  const { register } = useFormContext();

  return (
    <>
      {label ? label : null}
      <input type={type} id={name} {...register(name)} />
    </>
  );
};

export default ReusableInput;
