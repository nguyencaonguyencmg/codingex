import React, { useEffect, useState } from "react";
import { Label } from "../component/label";
import { Input } from "../component/input";
import Field from "../component/field/Field";
import { useForm } from "react-hook-form";
import IconEyeClose from "../component/icon/IconEyeClose";
import IconEyeOpen from "../component/icon/IconEyeOpen";
import Button from "../component/button/Button";
import { handleLogin } from "../service/userService/yub";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
const SignInPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMess, setErrMess] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const handleGetEmail = (e) => {
    setUserName(e.target.value);
  };
  const handleGetPass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = async (values) => {
    console.log(isSubmitting);
    if (!isValid) return;
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        console.log(userName, password);
      }, 1000);
    });
    // setErrMess("");
    // try {
    //   let data = await handleLogin(userName, password);
    //   if (data && data.errCode !== 0) {
    //     setErrMess(data.message);
    //   }
    //   if (data && data.errCode === 0) {
    //     console.log("success");
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     if (error.response.data) {
    //       setErrMess(error.response.data.message);
    //     }
    //   }
    // }
  };

  return (
    <div className=" bg-gradient-to-r from-[#10bed551] to-[#13da76bb]">
      <div className="min-h-[100vh] p-10 container">
        <div className="p-5 pt-0 w-[50%] rounded-xl bg-white mx-auto">
          <img
            className="mx-auto w-[150px] h-[150px]"
            src="/logo.png "
            alt="Coding Experience"
          />
          <h1 className="mb-3 text-3xl font-bold text-center text-primary">
            <span className="text-4xl text-blue-300">C</span>oding{" "}
            <span className="text-4xl text-blue-300">E</span>xperience
          </h1>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                onChange={handleGetEmail}
                placeholder="Enter your Email ..."
                name="email"
                id="email"
                value={userName}
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input
                type={togglePassword ? "text" : "password"}
                placeholder="Enter your Password ..."
                name="password"
                id="password"
                onChange={handleGetPass}
                value={password}
                control={control}
                // hasIcon
              >
                <span
                  onClick={() => {
                    setTogglePassword(!togglePassword);
                  }}
                >
                  {togglePassword ? (
                    <IconEyeOpen></IconEyeOpen>
                  ) : (
                    <IconEyeClose></IconEyeClose>
                  )}
                </span>
              </Input>
            </Field>
            <Field>
              <div className="mx-auto text-red-600">
                <p>{errMess}</p>
              </div>
            </Field>
            <Field>
              <div>
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-blue-400"
                  >
                    Sign up
                  </a>
                </p>
              </div>
              <Button
                type="submit"
                onClick={handleSignIn}
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Sign In
              </Button>
              <div className="mt-2 cursor-pointer text-primary">
                <span>Forgot your password?</span>
              </div>
              <div className="mx-auto">
                <span>Or Login with:</span>
              </div>
              <div className="flex justify-center gap-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="#fff"
                  viewBox="0 0 488 512"
                  className="w-[60px] h-[60px] rounded-2xl bg-red-400 p-3 cursor-pointer"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="#fff"
                  viewBox="0 0 320 512"
                  className="w-[60px] h-[60px] rounded-2xl bg-blue-400 p-3 cursor-pointer"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </div>
            </Field>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
