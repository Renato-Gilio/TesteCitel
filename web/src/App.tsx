import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Router } from "./router";
import { ProdutoProvider } from "./context/produtoContext";
import { CategoriaProvider } from "./context/categoriaContext";

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <ProdutoProvider>
        <CategoriaProvider>
          <Router />
          <ToastContainer />
        </CategoriaProvider>
      </ProdutoProvider>
    </BrowserRouter>
  );
}

export default App;
