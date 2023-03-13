import React, { useState } from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import loginLottie from "../common/loginLottie.json";
import { TextInput, Text, Modal, Button, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IMaskInput } from "react-imask";

function Login() {
  const [opened, { open, close }] = useDisclosure(false);
  const [searchValue, onSearchChange] = useState("");

  return (
    <Layout>
      <Lottie animationData={loginLottie} />
      <div>오늘 새벽기도 완료!</div>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={open}>
        로그인
      </Button>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={open}>
        회원가입
      </Button>
      <Modal opened={opened} onClose={close} title="회원가입" centered>
        <TextInput label="이름" placeholder="본인의 이름을 입력해주세요." />
        <TextInput
          label="비밀번호"
          component={IMaskInput}
          placeholder="원하시는 숫자 4자리를 입력해주세요."
          mask="0000"
        />
        <Select
          label="가지장"
          placeholder="본인의 가지를 입력해주세요."
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="가지장 이름을 다시 입력해주세요 :("
          data={["이영인", "오정진", "이강찬"]}
        />
        <Button>확인</Button>
      </Modal>
    </Layout>
  );
}

export default Login;
