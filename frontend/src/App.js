import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
