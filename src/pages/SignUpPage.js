import React, { useEffect, useState } from "react";
import { Label } from "../component/label";
import { Input } from "../component/input";
import Field from "../component/field/Field";
import { useForm } from "react-hook-form";
import IconEyeClose from "../component/icon/IconEyeClose";
import IconEyeOpen from "../component/icon/IconEyeOpen";
import Button from "../component/button/Button";
import { handleLogin } from "../service/userService";

const SignUpPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMess, setErrMess] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});
  const handleGetEmail = (e) => {
    setUserName(e.target.value);
  };
  const handleGetPass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = async () => {
    setErrMess("");
    try {
      let data = await handleLogin(userName, password);
      if (data && data.errCode !== 0) {
        setErrMess(data.message);
      }
      if (data && data.errCode === 0) {
        console.log("success");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          setErrMess(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className=" bg-gradient-to-r from-[#10bed551] to-[#13da76bb]">
      <div className="min-h-[100vh] p-10 container">
        <div className="p-5 pt-0 w-[70%] rounded-xl bg-white mx-auto">
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
            <div className="grid grid-cols-2">
              <Field>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  // onChange={handleGetfirstName}
                  className="w-[250px]"
                  placeholder="Enter your First Name ..."
                  name="firstName"
                  id="firstName"
                  value={userName}
                  control={control}
                ></Input>
              </Field>
              <Field>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  // onChange={handleGetlastName}
                  className="w-[250px]"
                  placeholder="Enter your Last Name ..."
                  name="lastName"
                  id="lastName"
                  value={userName}
                  control={control}
                ></Input>
              </Field>

              <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  onChange={handleGetEmail}
                  className="w-[250px]"
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
                  className="w-[250px]"
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
              <Field className="max-w-[566px] w-full col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  // onChange={handleGetaddress}
                  placeholder="103 Nguyễn Tất Thành ..."
                  name="address"
                  id="address"
                  value={userName}
                  control={control}
                ></Input>
              </Field>
              <Field className="">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="select"
                  // onChange={handleGetphoneNumber}
                  placeholder="Phone Number ..."
                  name="phoneNumber"
                  className="w-[250px]"
                  id="phoneNumber"
                  value={userName}
                  control={control}
                ></Input>
              </Field>
              <Field className="">
                <Label htmlFor="gender">Gender</Label>
                <Input
                  type="text"
                  // onChange={handleGet}
                  name="gender"
                  id="gender"
                  className="w-[250px]"
                  value={userName}
                  control={control}
                ></Input>
              </Field>
              <Field>
                <div className="mx-auto text-red-600">
                  <p>{errMess}</p>
                </div>
              </Field>
            </div>
            <Field>
              <Button
                type="submit"
                onClick={handleSignIn}
              >
                Sign Up
              </Button>
            </Field>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
