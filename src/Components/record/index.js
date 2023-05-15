import React, { useState } from "react";
import styled from "styled-components";

import fundo from "../../image/fd1.png";
import semImage from "../../image/produto-sem-imagem.png";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import InputText from "../../Input";
import Api from "../../apiAxios";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  width: 300px;
  margin: auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImgView = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;
const Form = styled.form`
  width: 1000px;
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
const Buttom = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
const Button1 = styled.button`
  width: 100%;
  padding: 5px;
  border: 0;
  background-color: #7171ff;
  color: #fff;
  cursor: pointer;
`;
const Select = styled.select``;
const Aside = styled.aside`
  display: flex;
`;
const Aside1 = styled.aside`
  height: 28rem;
  flex: 1;
  border: solid 1px #cecece;
  border-radius: 7px;
  margin: 2px;
  margin-bottom: 20px;
  padding: 10px;
`;
const Span = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const Record = () => {
  const navigate = useNavigate();
  const notify_sucess = () => toast("Produto cadastrado com sucesso :)");
  const notify_error = () => toast("Error ao cadastrar produto :(");

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [point, setPoint] = useState("");
  const [type_product, setType_product] = useState("");
  const [img_product, setImg_product] = useState("");
  //register product
  async function register(event) {
    event.preventDefault();

    try {
      notify_sucess();
      const formData = new FormData();
      formData.append("image", img_product);

      await Api.post(`/registerImage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
    //register
    await Api.post(`/register_product`, {
      product,
      description,
      quantity,
      price,
      point,
      type_product,
      img_product: img_product.name,
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log("ERROR = ", error);
      });
  }

  return (
    <ContainerSection>
      <Form>
        <ToastContainer/>
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
        <Title>Cadastro de Produtos</Title>

        <Aside>
          <Aside1>
            <Div2>
              <Span>Produto</Span>
              <InputText
                value={product}
                onChange={(text) => setProduct(text.target.value)}
                placeholder="ex: bolo de morango..."
                type="text"
              />
            </Div2>
            <Div2>
              <Span>Descrição</Span>
              <InputText
                value={description}
                onChange={(text) => setDescription(text.target.value)}
                placeholder="ex: massa,açucar..."
              />
            </Div2>
            <Div2>
              <Span>Quantidade</Span>
              <InputText
                value={quantity}
                onChange={(text) => setQuantity(text.target.value)}
                type="number"
                placeholder="ex: 10,15,20..."
              />
            </Div2>
            <Div2>
              <Span>Preço</Span>
              <InputText
                value={price}
                onChange={(text) => setPrice(text.target.value)}
                type="number"
                placeholder="ex: R$14.99"
              />
            </Div2>
            <Div2>
              <Span>Pontos</Span>
              <InputText
                value={point}
                onChange={(text) => setPoint(text.target.value)}
                type="number"
                placeholder="ex: 3,5,10..."
              />
            </Div2>
            <Div2>
              <Span>Tipo de produto</Span>
              <Select onChange={(text) => setType_product(text.target.value)}>
                <option value="">-- Selecione --</option>
                <option value="bolo">Bolo</option>
                <option value="frios">Frios</option>
                <option value="bebida">Bebida</option>
              </Select>
            </Div2>
            <Div2>
              <InputText
                type="file"
                name="image"
                onChange={(e) => setImg_product(e.target.files[0])}
              />
            </Div2>
          </Aside1>
          <Aside1>
            {img_product ? (
              <ImgView alt="img" src={URL.createObjectURL(img_product)} />
            ) : (
              <ImgView alt="img" src={semImage} />
            )}
          </Aside1>
        </Aside>
        <Button1 type="submit" onClick={register}>
          Cadastrar Produto
        </Button1>
      </Form>
    </ContainerSection>
  );
};
