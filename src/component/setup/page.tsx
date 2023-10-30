"use client";
import React from "react";
import useLogin, { Props } from "./hook";
import { ReceivedProps } from "./type";

const LoginPageLayout = () => {
  return (
    <section>
      <div>123</div>
    </section>
  );
};

const Login = (props: ReceivedProps) => {
  return <LoginPageLayout {...useLogin(props)} />;
};

export default Login;
