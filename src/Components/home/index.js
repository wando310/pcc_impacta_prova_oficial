import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
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
const Header = styled.header`
  width: 100%;
  background: #22223b;
  opacity: 0.8;
  flex-wrap: wrap;
`;
const Div = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
`;
const View = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Button = styled.button`
  & {
    font-size: 15px;
    font-weight: 700;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    padding: 5px 12px;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 5px 10px;
    background-color: #3a86ff;
  }
  &:hover {
    border: 0;
    border-radius: 8px;
    color: #3a86ff;
    background-color: #fff;
  }
`;
const Img = styled.img`
  width: 70px;
`;
const ImgLogo = styled.img`
  width: 400px;
  margin-top: 160px;
`;
const TitleLogo = styled.h1`
  font-size: 27px;
  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow:2px 2px 10px #000000;
`;

export const Home = () => {
  const navigate = useNavigate();

  const nextPage = (page) => {
    if (page === "client") return navigate("/client");
    if (page === "product") return navigate("/product");
    if (page === "record") return navigate("/record");
    if (page === "registered") return navigate("/registered");
  };

  return (
    <ContainerSection>
      <Header>
        <Div>
          <View>
            <Img alt="img" src={logo} />
            <TitleLogo>Panificação</TitleLogo>
          </View>
          <View>
            <Button onClick={() => nextPage("client")}>
              Clientes cadastrados
            </Button>
            <Button onClick={() => nextPage("record")}>
              Cadastro de Produtos
            </Button>
            <Button onClick={() => nextPage("registered")}>
              Produtos cadastrados
            </Button>
          </View>
        </Div>
      </Header>
      <ImgLogo alt="img" src={logo} />
    </ContainerSection>
  );
};
