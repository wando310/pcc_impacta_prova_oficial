import React, { useState, useEffect } from "react";
import styled from "styled-components";

import fundo from "../../image/fd1.png";

import { AiOutlineEdit } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import Api from "../../apiAxios";

import { useNavigate } from "react-router-dom";

import { AlterProduct } from "../../alterProduct";

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
  margin: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgView = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 7px;
  margin-top: 5px;
`;
const Div = styled.div`
  background-color: #fff;
  margin-top: 30px;
  border-radius: 10px;
  padding: 20px;
`;
const Title = styled.h1`
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Aside = styled.aside`
  & {
    height: 600px;
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    width: 13px;
    border-radius: 10px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
const Aside1 = styled.aside`
  display: flex;
  border: solid 1px #ffc9ae;
  border-left: solid 3px #ff8040;
  border-radius: 7px;
  margin: 2px;
  margin-bottom: 2px;
  padding: 5px;
`;
const P = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0;
  color: #fb8500;
  font-size: 13px;
`;
const Buttom = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  color: #400040;
  cursor: pointer;
`;
const Span = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin: 0 10px;
  color: #400040;
`;

export const Registered = () => {
  const navigate = useNavigate();
  //get product
  const [allProduct, setAllProduct] = useState([]);
  const getProduct = async () => {
    await Api.get("/get_product")
      .then((response) => setAllProduct(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);
  //update product
  const [status, setStatus] = useState("none");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [column, setColumn] = useState("");

  const update = (title, name, id, column) => {
    setTitle(title);
    setName(name);
    setId(id);
    setColumn(column);
    setStatus("flex");
  };

  const urlImage = "http://localhost:80/files/";
  return (
    <ContainerSection>
      <AlterProduct
        display={status}
        title={title}
        name={name}
        id={id}
        column={column}
      />
      <Div>
        <Title>Produtos Cadastrados</Title>
        <Aside>
          <Buttom
            style={{
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
            }}
            onClick={() => navigate("/home")}
          >
            <BsFillArrowLeftCircleFill fontSize={22} />
          </Buttom>
          {allProduct != "" ? (
            allProduct.map((item) => {
              return (
                <Aside1 key={item.id.toString()}>
                  <Div2>
                    <Span>ID</Span>
                    <P>{item.id}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar produto"
                      onClick={(e) =>
                        update(e.target.value, item.nome, item.id, "nome")
                      }
                    >
                      Alterar produto
                      <AiOutlineEdit />
                    </Buttom>
                    <P>{item.nome}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar descrição"
                      onClick={(e) =>
                        update(
                          e.target.value,
                          item.descricao,
                          item.id,
                          "descricao"
                        )
                      }
                    >
                      Alterar descrição
                      <AiOutlineEdit />
                    </Buttom>
                    <P>{item.descricao}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar quantidade"
                      onClick={(e) =>
                        update(
                          e.target.value,
                          item.quantidade,
                          item.id,
                          "quantidade"
                        )
                      }
                    >
                      Alterar quantidade
                      <AiOutlineEdit />
                    </Buttom>
                    <P>{item.quantidade}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar preço"
                      onClick={(e) =>
                        update(e.target.value, item.preco, item.id, "preco")
                      }
                    >
                      Alterar preço
                      <AiOutlineEdit />
                    </Buttom>
                    <P>R${item.preco}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar pontos"
                      onClick={(e) =>
                        update(e.target.value, item.pontos, item.id, "pontos")
                      }
                    >
                      Alterar pontos
                      <AiOutlineEdit />
                    </Buttom>
                    <P>{item.pontos}</P>
                  </Div2>
                  <Div2>
                    <Buttom
                      value="Alterar tipo de produto"
                      onClick={(e) =>
                        update(e.target.value, item.tipo, item.id, "tipo")
                      }
                    >
                      Alterar tipo de produto
                      <AiOutlineEdit />
                    </Buttom>
                    <P>{item.tipo}</P>
                  </Div2>
                  <Buttom>
                    Image
                    <AiOutlineEdit />
                    <ImgView alt="img" src={urlImage + item.foto} />
                  </Buttom>
                </Aside1>
              );
            })
          ) : (
            <Title>Lista de produto vazia...</Title>
          )}
        </Aside>
      </Div>
    </ContainerSection>
  );
};
