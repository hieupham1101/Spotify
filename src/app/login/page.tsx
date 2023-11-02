"use client";
import React from "react";
import useLogin, { Props } from "./hook";
import { ReceivedProps } from "./type";
import Image from "next/image";
import logo_home from "../../../public/icon/logo_home.png";
import "../../app/globals.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper, Switch } from "@mui/material";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

import Form from 'react-bootstrap/Form';
import Link from "next/link";
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const LoginPageLayout = () => {
  return (
    <Grid container>
        <Grid item xs={12} className="pb-8">
          <Item style={{padding:0}}>
          <header className="h-[80px] bg-[#000000] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pl-[51px] flex items-center">
              <Image className="w-24" src={logo_home} alt="logo-home" width={50} height={36} />
          </header>
          </Item>
          <Grid className="bg-[#181414] h-full flex justify-center pt-[32px]">
              <Grid className="text-white w-[100%] max-w-screen-md rounded-md	 h-[100%] bg-[#000000]">
                  <Grid className="text-center p-10">
                    <h1 className="text-bold text-4xl">Đăng nhập vào Spotify</h1>
                  </Grid>
                  <Grid className="grid grid-rows-4 grid-flow-col text-center pt-4	pb-10">
                    <Grid className="pb-10 flex justify-self-center	align-middle" >
                      <Button variant="secondary" size="sm" className="w-56">
                      <span className="text-center inline-flex	items-center	 justify-center mr-4" > 
                          <FcGoogle />
                      </span>
                      <span className="text-center inline-flex	items-center	 justify-center mr-4" >
                      Tiếp tục bằng Google
                      </span>
                      </Button>
                    </Grid>
                    <Grid className="pb-10">
                      <Button  variant="secondary" size="sm" className="w-56">
                        <span className="text-center inline-flex	items-center	 justify-center mr-4" >
                          <FaFacebook/>
                        </span>
                        <span className="text-center inline-flex	items-center	 justify-center mr-4" >
                        Tiếp tục bằng Facebook
                        </span>
                      </Button>
                    </Grid>
                  <Grid className="pb-10">
                  <Button variant="secondary" size="sm" className="w-56">
                    <span className="text-center inline-flex	items-center	 justify-center mr-4" >
                      <FaApple/>
                    </span>
                    <span className="text-center inline-flex	items-center	 justify-center mr-4" >
                    Tiếp tục bằng Apple
                    </span>
                  </Button>
                  </Grid>
                  <Grid className="pb-10">
                    <Button variant="secondary" size="sm" className="w-56">
                      <span className="text-center inline-flex	items-center	 justify-center mr-3" >
                          Tiếp tục bằng số điện thoại
                      </span>
                    </Button>
                  </Grid>
                  </Grid>
                  <hr className="text-yellow-50	"/>
                  <Grid>
                    <Form className="p-10">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email hoặc tên người dùng" className="bg-gray-500 focus:bg-gray-500 focus:border-white focus:border-2" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control  type="Password" placeholder="Mật khẩu" className="bg-gray-500 focus:bg-gray-500 focus:border-white focus:border-2" />
                      </Form.Group>
                      <Grid className="px-0 py-6">
                      <Switch {...label} />
                    <span>Hãy nhớ tôi</span>
                      </Grid>
                      <Grid className="text-center px-0 py-3">
                      <Button size="lg" className="w-100 rounded-3xl text-gray-50" style={{backgroundColor:'#1ed760'}}>
                        Đăng Nhập
                      </Button>
                    </Grid>
                    <Grid   className="text-center px-0 py-6">
                      <Link href={'/'}>
                          <p>Quên mật khẩu của bạn?</p>
                      </Link>
                    </Grid>
                    <hr className="text-yellow-50	"/>
                    <Grid className="text-center px-0 py-6">
                    <span>Bạn chưa có tài khoản?</span>
                      <Link href={'/'}>
                          <p>Đăng ký Spotify</p>
                      </Link>
                    </Grid>
                    </Form>
                  </Grid>
                  <footer className="text-center">
                    <div className="font-normal	text-xs	">
                      <p>
                        Trang web này được bảo vệ bằng reCAPTCHA và tuân theo 
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                          Chính sách quyền riêng tư
                        </a> cũng như 
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                          Điều khoản dịch vụ</a> của Google.</p>
                    </div>
                  </footer>
              </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
};

const Login = (props: ReceivedProps) => {
  return <LoginPageLayout {...useLogin(props)} />;
};

export default Login;
