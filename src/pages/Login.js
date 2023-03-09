import React from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import loginLottie from "../common/loginLottie.json";

function Login() {
  return (
    <Layout>
      <Lottie animationData={loginLottie} />
      <div>오늘 새벽기도 완료!</div>
    </Layout>
  );
}

export default Login;
