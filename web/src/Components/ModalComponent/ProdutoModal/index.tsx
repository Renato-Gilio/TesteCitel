import { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../../services/apiService';

interface ProdutoModalProps {
    categorias: any[];
    onClose: () => void;
}

const ProdutoModal = ({ categorias, onClose }: ProdutoModalProps) => {
    const [nomeProduto, setNomeProduto] = useState('');
    const [showMessageError, setShowMessageError] = useState(false);
    const [base64Image, setBase64Image] = useState('');
    const [categoriaId, setCategoriaId] = useState<number>();
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState<number>();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (nomeProduto.length === 0) {
            setShowMessageError(true);
        } else {
            setShowMessageError(false);
        }

        const { data } = await api.post('/api/Produto', {
            nome: nomeProduto,
            descricao,
            preco: Number(preco),
            imagem: base64Image,
            categoriaId: Number(categoriaId)
        });

        console.log(data);

        onClose();
    }

    
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                setBase64Image(base64String);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Produto</Form.Label>
                    
                    <Form.Control 
                        type="text" 
                        placeholder="Nome do produto"
                        onChange={e => setNomeProduto(e.target.value)}
                        value={nomeProduto}
                    />
                    
                    {nomeProduto.length == 0 && showMessageError && (
                        <Form.Text className="text-muted">
                            Nome obrigatório
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Descricação</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e: any) => setDescricao(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Preço" 
                        value={preco}
                        onChange={(e: any) => setPreco(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        className="custom-file-label"
                        accept="image/*" 
                        onChange={handleImageUpload}
                        id="inputGroupFile01"
                    />
                    <div className="container-sm">
                        {base64Image && <img className="col-sm-12 mt-2 rounded" src={base64Image} alt="Uploaded" />}
                    </div>
                </Form.Group>

                <Form.Select 
                    aria-label="Selecione uma Categoria" 
                    className="mb-3"
                    value={categoriaId}
                    onChange={(e: any) => setCategoriaId(e.target.value)}
                >
                    <option disabled selected>Categoria</option>

                    {categorias.map(categoria => (
                        <option value={categoria.id}>{categoria.nome}</option>
                    ))}
                </Form.Select>

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
    )
};

export { ProdutoModal };
