import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RegisterPage from "./containers/RegisterPage";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <div>
                <Link to="/register">Registrer bruker</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
