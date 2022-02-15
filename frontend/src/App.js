import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import RegisterPage from "./containers/RegisterPage"
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            <div>
              <Link to="/register">Registrer bruker</Link>
            </div>
          } />
        </Routes>
      </BrowserRouter></ChakraProvider>
  );

}

export default App;
