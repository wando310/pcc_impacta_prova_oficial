const express = require("express");
const cors = require("cors");

const app = express();
const port = 80;
const path = require("path");
const db = require("../db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//upload image no servidor
const uploadImg = require("../src/multer");
const { error } = require("console");
//'http://localhost:80/files/1683975725119 - teste.jpg'
app.use("/files", express.static(path.resolve(__dirname, "../src/multer")));
app.post("/registerImage", uploadImg.single("image"), async (req, res) => {
  if (req.file) {
    return res.json({
      error: false,
      mensagem: "Upload realizado com sucesso!!",
    });
  }

  return res.status(400).json({
    error: true,
    message: "Error: Upload não realizado com sucesso!!",
  });
});
//register product
app.post("/register_product", (req, res) => {
  const { product } = req.body;
  const { description } = req.body;
  const { quantity } = req.body;
  const { price } = req.body;
  const { point } = req.body;
  const { type_product } = req.body;
  const { img_product } = req.body;

  db.query(
    `INSERT INTO produto (nome,descricao,quantidade,preco,pontos,tipo,foto,favorito)
     VALUES('${product}','${description}','${quantity}','${price}','${point}','${type_product}','${img_product}',1)`
  );
});
//get product
app.get("/get_product", (req, res) => {
  db.query("SELECT * FROM produto", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
//update product
app.put("/update_product/:obj", (req, res) => {
  const { id, nameValue, column } = req.body;

  db.query(
    `update produto set ${column} = '${nameValue}' where id = ?;`,
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.listen(port, () => console.log("servidor rodando porta: " + port));
