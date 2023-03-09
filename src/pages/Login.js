import React from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import loginLottie from "../common/loginLottie.json";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Login() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Layout>
      <Lottie animationData={loginLottie} />
      <div>오늘 새벽기도 완료!</div>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={open}>
        시작하기
      </Button>
      <Modal opened={opened} onClose={close} title="로그인하기" centered />
    </Layout>
  );
}

export default Login;
