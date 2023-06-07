import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/apiService";
import { toast } from "react-toastify";

interface IProdutoContext {
  produtos: any[];
  setProdutos: (value: any) => void;
  salvarProduto: (
    nome: string,
    descricao: string,
    preco: number,
    imagem: string,
    categoriaId: number,
    id?: number | null
  ) => Promise<void>;
  removerProduto: (id: number) => void;
}

interface IProdutoProviderProps {
  children: ReactNode;
}

const ProdutoContext = createContext({} as IProdutoContext);

const ProdutoProvider = ({ children }: IProdutoProviderProps) => {
  const [produtos, setProdutos] = useState([]);

  const getProducts = async () => {
    const { data } = await api.get("/api/Produto");

    setProdutos(data);
  };

  const removerProduto = async (id: number) => {
    await api.delete(`/api/Produto/${id}`);

    getProducts();
  };

  const salvarProduto = async (
    nome: string,
    descricao: string,
    preco: number,
    imagem: string,
    categoriaId: number,
    id?: number | null
  ) => {
    try {
      if (id === undefined || id === null) {
        await api.post("/api/Produto", {
          nome,
          descricao,
          preco,
          imagem,
          categoriaId: Number(categoriaId),
        });
      } else {
        await api.put(`/api/Produto/${id}`, {
          nome,
          descricao,
          preco,
          imagem,
          categoriaId: Number(categoriaId),
        });
      }
    } catch (error: any) {
      Object.keys(error.response.data.errors).forEach((key) => {
        if (key.toLowerCase().includes("preco")) {
          toast.warning("Por favor inserir um preço válido");
        }

        if (key.toLowerCase().includes("nome")) {
          toast.warning(error.response.data.errors["Nome"][0]);
        }

        if (key.toLowerCase().includes("descricao")) {
          toast.warning(error.response.data.errors["Descricao"][0]);
        }
        if (key.toLowerCase().includes("imagem")) {
          toast.warning(error.response.data.errors["Imagem"][0]);
        }
        if (key.toLowerCase().includes("categoriaid")) {
          toast.warning("Insira uma categoria válida");
        }
      });
      throw new Error("error");
    }

    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProdutoContext.Provider
      value={{ produtos, setProdutos, salvarProduto, removerProduto }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};

export { ProdutoContext, ProdutoProvider };
