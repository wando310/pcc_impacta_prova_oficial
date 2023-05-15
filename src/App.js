import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./Components/login"; // Section padrão
import { Home } from "./Components/home";
import { Record } from "./Components/record";
import { Client } from "./Components/cliente";
import { Registered } from "./Components/registered";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="record" element={<Record />} />
        <Route path="client" element={<Client />} />
        <Route path="registered" element={<Registered />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
