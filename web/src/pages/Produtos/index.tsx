import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/apiService';

import motoImage from '../../assets/moto.jpg';
import { ModalComponent } from '../../Components/ModalComponent';
import { CategoriaModal } from '../../Components/ModalComponent/CategoriaModal';
import { ProdutoModal } from '../../Components/ModalComponent/ProdutoModal';

const Produtos = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [categorias, setCategorias] = useState<any[]>([]);

    const [showModalCategoria, setShowModalCategoria] = useState(false);
    const [showModalProduto, setShowModalProduto] = useState(false);
    const [showModalEditarProduto, setShowModalEditarProduto] = useState(false);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    
    const handleShowCategoria = () => {
        setShowModalCategoria(true);
    }

    const handleCloseCategoria = () => {
        setShowModalCategoria(false);
    }

    const handleShowProduto = () => {
        setShowModalProduto(true);
    }

    const handleCloseProduto = () => {
        setShowModalProduto(false);
    }

    const handleShowProdutoEditar = () => {
        setShowModalEditarProduto(true);
    }

    const handleCloseProdutoEditar = () => {
        setShowModalEditarProduto(false);
    }

    const getAllProducts = async () => {
        const { data } = await api.get('/api/Produto');

        setProducts(data);
    }

    const getAllCategorias = async () => {
        const { data } = await api.get('/api/Categoria');
        
        setCategorias(data);
    }

    useEffect(() => {
        getAllProducts();
        getAllCategorias();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container container-sm">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <h1 className="text-center">Produtos</h1>

                                <ModalComponent 
                                    modalName='Cadastrar Produto' 
                                    show={showModalProduto} 
                                    modalTitle='Cadastrar Produto'
                                    handleClose={handleCloseProduto}
                                    handleShow={handleShowProduto}
                                >
                                    <ProdutoModal onClose={handleCloseProduto} categorias={categorias} />
                                </ModalComponent>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <input type="text" className="form-control mx-2 mb-2" placeholder="Pesquisar" />
                        
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            ssr={true}
                            infinite={true}
                            autoPlay={false}
                            keyBoardControl={true}
                            customTransition="all .5"
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={['tablet', 'mobile']}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {products.map(product => (
                                <div className="mx-2">
                                    <div className="card ml-3 mr-3" key={product.id}>
                                        <img 
                                            src={product.imagem.includes('data:image') 
                                                ? product.imagem 
                                                : 'data:image/*;base64,' + product.imagem
                                            } 
                                            className="card-img-top" 
                                            alt="image" 
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title">{product.nome}</h5>

                                            <p className="card-text">
                                                {product.descricao}
                                            </p>

                                            <div className="d-flex justify-content-around">
                                                <ModalComponent 
                                                    modalName='Editar' 
                                                    show={showModalEditarProduto} 
                                                    modalTitle='Editar Produto'
                                                    handleClose={handleCloseProdutoEditar}
                                                    handleShow={handleShowProdutoEditar}
                                                >
                                                    <ProdutoModal onClose={handleCloseProdutoEditar} categorias={categorias} />
                                                </ModalComponent>

                                                <a href="#" className="btn btn-danger">Excluir</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-5">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <h1 className="text-center">Categorias</h1>

                                <ModalComponent 
                                    modalName='Cadastrar Categoria' 
                                    show={showModalCategoria} 
                                    modalTitle='Cadastrar Categoria'
                                    handleClose={handleCloseCategoria}
                                    handleShow={handleShowCategoria}
                                >
                                    <CategoriaModal />
                                </ModalComponent>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        {categorias.map(categoria => (
                                            <td key={categoria.id}>{categoria.nome}</td>
                                        ))}
                                    </tr>
                                </tbody>
                        
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Produtos };
