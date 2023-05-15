import React from "react";
import styled from "styled-components";

import logo from "../../image/logo_1.png";
import fundo from "../../image/fd1.png";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom'

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
  font-size: 30px;
`;
const Title1 = styled.h1`
  width: 400px;
  color: #1982c4;
  margin-bottom: 0px;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Button = styled.button`
  width: 100%;
  background-color: #1982c4;
  color: #fff;
  border: none;
  padding: 7px;
  cursor: pointer;
`;
const Buttom = styled.button`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border: 0;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;
const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  width: 500px;
  max-height: 600px;
  border-radius: 7px;
  margin: 10px;
  padding: 10px;
  background-color: #22223b;
  border-top: solid 1px #fff;
  border-bottom: solid 1px #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 13px;
    border-radius: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.8);
  }
`;
const Li = styled.li`
  border-radius: 7px;
  margin: 10px;
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  background-color: #22223b;
`;
const Aside2 = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35px;
  padding: 10px;
`;
const Span = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
`;
const P = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #e76f51;
  font-size: 15px;
  margin: 0;
`;

export const Client = () => {
  const navigate = useNavigate()
  return (
    <ContainerSection>
      <Section>
        <Aside>
          <Aside2>
            <Title1>Clientes cadastrados no sistema</Title1>
            <ImgView alt="img" src={logo} />
          </Aside2>
          <Aside2>
            <Aside style={{justifyContent:'space-between', width:'100%'}}>
              <Buttom  onClick={() => navigate("/home")}>
                <BsFillArrowLeftCircleFill fontSize={22} />
              </Buttom>
              <Title>Clientes</Title>
            </Aside>
            <Ul>
              <Li>
                <Span>Pedro sousa</Span>
                <P>23/04/2023 - 12:03:34</P>
              </Li>              
            </Ul>
            <Button>Gerar código cliente</Button>
          </Aside2>
        </Aside>
      </Section>
    </ContainerSection>
  );
};
