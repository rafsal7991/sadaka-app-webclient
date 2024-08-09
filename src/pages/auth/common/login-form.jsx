import React, { useState } from "react";
import InputGroup from "@/components/ui/InputGroup";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useLoginMutation } from "@/store/api/auth/authApiSlice";
import { setUser } from "@/store/api/auth/authSlice";
import UserController from "../controller/controller";
import { setUserInfo, loginSuccess } from "../../../store/slices/auth/userSlice";
import {UserIcon} from "lucide-react";

const schema = yup
  .object({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();


  const onSubmit = async (data) => {

    try {
      const loginResult = await UserController.userLogin(
        data["username"],
      data["password"]+"+7"
      );
      if (loginResult.status==200){
        const userInfo = await UserController.getUserDetail(
          data.username,
          loginResult.resultCurl
        );


        if (userInfo.status == 401) {
            setIsLoading(false);
            toast.error( userInfo.message.MsgResp.StsDesc, { autoClose: 2000 });
          }
        if(userInfo.status == 200){
              dispatch(loginSuccess(loginResult.resultCurl));
              dispatch(setUserInfo(userInfo.resultCurl));
              navigate("/dashboard");
              toast.success("You have logged Successfully", { autoClose: 2000 });
      }
      else{
        toast.error( "Inactive or invalid codeClassfication", { autoClose: 2000 });
      }
    }

    } catch (error) {
      console.log(error);
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <InputGroup
        name="username"
        type="text"
        label="username"
        placeholder="username"
        prepend={<UserIcon size={15}/>}
        defaultValue="e-retail.admin"
        register={register}
        error={errors.username}
        merged
        disabled={isLoading}
      />
      <InputGroup
        name="password"
        label="password"
        type="password"
        placeholder="password"
        prepend={<Icon icon="ph:lock-simple" />}
        defaultValue="Mauzo@654321#"
        register={register}
        error={errors.password}
        merged
        disabled={isLoading}
      />

      <div className="flex justify-between">
        {/* <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Remember me"
        /> */}
        <Link
          to="/forgot-password"
          className="text-sm text-gray-400 dark:text-gray-400 hover:text-[#13317d] hover:underline  "
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        text="Sign in"
        className="btn btn-primary block w-full text-center bg-[#13317d] hover:bg-[#13317d]/10 "
        isLoading={isLoading}
      />
    </form>
  );
};

export default LoginForm;
