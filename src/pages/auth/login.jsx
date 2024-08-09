import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./common/login-form";
import Social from "./common/social";
import useDarkMode from "@/hooks/useDarkMode";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
// image import
import Logo from "@/assets/images/ewcllogo.png";

const login = () => {
  const [isDark] = useDarkMode();
  const { isAuthenticated, userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate()

  console.log(isAuthenticated);
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <div className="h-full grid w-full grow grid-cols-1 place-items-center pt-10 2xl:pt-0 ">
        <ToastContainer/>
        <div className=" max-w-[416px] mx-auto w-full  space-y-6">
        
          <div className="p-6 auth-box">
          <div className="text-center">
            {/* Insert EWCL sadaka app Logo */}
            <div className="h-[102px] w-[142px] mx-auto">
              <Link to="/">
                <img
                  src={Logo}
                  alt=""
                  className=" object-contain object-center h-full"
                />
              </Link>
            </div>
            <div className=" text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-1 ">
              Welcome Back
            </div>
            <div className=" text-gray-500 dark:text-gray-400 text-sm">
              Please sign in to continue
            </div>
          </div>
            <LoginForm />
            <div className=" text-center text-sm mt-5 space-x-1 rtl:space-x-reverse mb-1  ">
              <span> Don't have Account?</span>
              <span>
                {/* <Link to="/register" className=" text-[#13317d]">
                  Create account
                </Link> */}
              </span>
            </div>
            {/* <div className="relative border-b-gray-10 dark:border-gray-700  border-b pt-6">
              <div className="absolute inline-block bg-white dark:bg-gray-800 text-gray-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  font-normal">
                OR
              </div>
            </div> */}
            {/* <div className="mt-6">
              <Social />
            </div> */}
          </div>
          <div className="mt-8 flex justify-center text-xs text-gray-400  pb-10 2xl:pb-0">
            <a href="#">Privacy Notice</a>
            <div className="mx-3 my-1 w-px bg-gray-200 "></div>
            <a href="#">Term of service</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
