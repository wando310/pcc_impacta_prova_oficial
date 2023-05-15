import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import logo from "../../image/logo_1.png";
import fundo from "../../image/fd1.png";

const ContainerSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div2 = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImgView = styled.img`
  width: 400px;
`;
const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #22223b;
  opacity: 0.7;
`;
const Title = styled.h1`
  margin: auto;
  color: #1982c4;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Title1 = styled.h1`
  width: 400px;
  color: #1982c4;
  margin-bottom: 0px;
  font-size: 20px;
  text-align: start;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Input = styled.input`
  width: 300px;
  font-size: 15px;
  background-color: #4a4e69;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
const Button = styled.button`
  width: 100%;
  background-color: #1982c4;
  color: #fff;
  border: none;
  padding: 7px;
`;
const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  height: 180px;
  border-radius: 7px;
  margin: 100px;
  padding: 10px;
  background-color: #22223b;
  box-shadow: 2px 2px 10px #fff;
`;
const Aside2 = styled.aside`
  flex: 1;
  margin: 35px;
  margin-bottom: 20px;
  padding: 10px;
`;
const Span = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #fff;
  font-size: 12px;
`;

export const Login = () => {
  const navigate = useNavigate();

  function nextPage() {
    return navigate("/home");
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  /* const login = () => {
    console.log("name = ", name);
    console.log("password = ", password);
  }; */

  return (
    <ContainerSection>
      <Section>
        <Aside>
          <Aside2>
            <Title1>
              Faça o login para ter acesso a tela de cadastrode produtos
            </Title1>
            <ImgView alt="img" src={logo} />
          </Aside2>
          <Form>
            <Title>Login</Title>
            <Div2>
              <Span>Nome</Span>
              <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ex:pedro"
              />
            </Div2>
            <Div2>
              <Span>Senha</Span>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: 1234..."
              />
            </Div2>
            <Div2>
              <Button onClick={() => nextPage()}>Login</Button>
            </Div2>
          </Form>
        </Aside>
      </Section>
    </ContainerSection>
  );
};
