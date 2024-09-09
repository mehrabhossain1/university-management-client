/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ReusableForm from "../components/form/ReusableForm";
import ReusableInput from "../components/form/ReusableInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const { handleSubmit, register } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in...");

    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Login successful", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err: any) {
    //   toast.error("Something went wrong", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <ReusableForm onSubmit={onSubmit}>
      <div>
        <ReusableInput type="text" name="id" label="ID: " />
      </div>
      <div>
        <ReusableInput type="text" name="password" label="Password: " />
      </div>
      <Button htmlType="submit">Login</Button>
    </ReusableForm>
  );
};

export default Login;
