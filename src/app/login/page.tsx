"use client";
import React from "react";
import useLogin, { Props } from "./hook";
import { ReceivedProps } from "./type";
import Image from "next/image";
import logo_home from "../../../public/icon/logo_home.png";
import "../../app/globals.css";

const LoginPageLayout = () => {
  return (
    <section>
      <header className="h-[100px] bg-[#000000] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pl-[51px] flex items-center">
        <Image src={logo_home} alt="logo-home" width={117} height={36} />
      </header>
      <div className="bg-[#181414] h-full flex justify-center pt-[32px]">
        <div className="text-white w-[734px] h-[1000px] bg-[#000000]">
          <h1 className="text-bold text-lg ">Đăng nhập vào Spotify</h1>
          <div>
            <button>abc</button>
            <button>abc</button>
            <button>abc</button>
            <button>abc</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Login = (props: ReceivedProps) => {
  return <LoginPageLayout {...useLogin(props)} />;
};

export default Login;
