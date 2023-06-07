import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/apiService";
import { toast } from "react-toastify";

interface ICategoriaContext {
  categorias: any[];
  setCategorias: (value: any) => void;
  salvarCategoria: (nome: string, id?: number) => Promise<void>;
  removerCategoria: (id: number) => void;
}

interface ICategoriaProviderProps {
  children: ReactNode;
}

const CategoriaContext = createContext({} as ICategoriaContext);

const CategoriaProvider = ({ children }: ICategoriaProviderProps) => {
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    const { data } = await api.get("/api/Categoria");

    setCategorias(data);
  };

  const removerCategoria = async (id: number) => {
    await api.delete(`/api/Categoria/${id}`);

    getCategorias();
  };

  const salvarCategoria = async (nome: string, id?: number) => {
    try {
      if (id === undefined || id === null) {
        await api.post("/api/Categoria", { nome });
      } else {
        await api.put(`/api/Categoria/${id}`, { nome });
      }
    } catch (error: any) {
      Object.keys(error.response.data.errors).forEach((key) => {
        if (key.toLowerCase().includes("nome")) {
          toast.warning(error.response.data.errors["Nome"][0]);
        }
      });
      throw new Error("error");
    }

    getCategorias();
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{ categorias, setCategorias, removerCategoria, salvarCategoria }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};

export { CategoriaContext, CategoriaProvider };
