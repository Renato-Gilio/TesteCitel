import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/apiService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CategoriaContext } from "../../../context/categoriaContext";

interface ProdutoModalProps {
  id?: number;
  handleClose?: () => void;
}

const CategoriaModal = ({ id, handleClose }: ProdutoModalProps) => {
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [showMessageError, setShowMessageError] = useState(false);

  const { salvarCategoria } = useContext(CategoriaContext);

  const getCategoria = async () => {
    if (id != undefined) {
      const { data } = await api.get(`/api/Categoria/${id}`);

      if (data) {
        setNomeCategoria(data.nome);
      }
    }
  };

  useEffect(() => {
    getCategoria();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (nomeCategoria.length === 0) {
      setShowMessageError(true);
    } else {
      setShowMessageError(false);
    }
    try {
      await salvarCategoria(nomeCategoria, id);  
      if (handleClose) handleClose();      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome da categoria"
            onChange={(e) => setNomeCategoria(e.target.value)}
            value={nomeCategoria}
          />

          {nomeCategoria.length == 0 && showMessageError && (
            <Form.Text className="text-muted"></Form.Text>
          )}
        </Form.Group>

        <div className="col-12">
          <div className="d-flex justify-content-center">
            <Button
              onClick={handleSubmit}
              variant="primary"
              type="submit"
              className="w-40 btn btn-success"
            >
              Salvar
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export { CategoriaModal };
