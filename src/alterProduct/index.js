import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Api from "../apiAxios";

const View = styled.section`
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ViewAlter = styled.div`
  width: 500px;
  height: 170px;
  background-color: #fefefe;
  margin-top: -200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0;
`;
const Title = styled.h1`
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Verdana, sans-serif;
  color: #212529;
`;
const Input = styled.input`
  width: 20rem;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Verdana, sans-serif;
  font-weight: 600;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding: 2px;
  color: #415a77;
  outline: none;
`;
const Viewbtn = styled.div`
  margin-top: 10px;
`;
const ButtonAlter = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Verdana, sans-serif;
  margin: 10px;
  border: 0;
  background: #4361ee;
  color: #fff;
  padding: 2px 20px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #6780f1;
  }
`;
const ButtonCancel = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Verdana, sans-serif;
  margin: 10px;
  border: 0;
  background: #9b2226;
  color: #fff;
  padding: 2px 20px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #d33236;
  }
`;

export const AlterProduct = ({ display, title, name, id, column }) => {
  //get product value
  const [nameValue, setNameValue] = useState("");
  const getProductValue = () => {
    setNameValue(name);
  };

  useEffect(() => {
    getProductValue();
  }, [name]);

  //update product
  const update = async () => {
    const obj = {
      id,
      nameValue,
      column,
    };

    await Api.put("/update_product/:", obj)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ display: display }}>
      <ViewAlter>
        <Title>{title}</Title>
        <Input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <Viewbtn>
          <ButtonAlter
            onClick={() => {
              update();
            }}
          >
            Alterar
          </ButtonAlter>
          <ButtonCancel>Cancelar</ButtonCancel>
        </Viewbtn>
      </ViewAlter>
    </View>
  );
};
