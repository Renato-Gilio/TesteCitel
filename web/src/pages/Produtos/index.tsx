import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ModalComponent } from "../../Components/ModalComponent";
import { CategoriaModal } from "../../Components/ModalComponent/CategoriaModal";
import { ProdutoModal } from "../../Components/ModalComponent/ProdutoModal";
import { ProdutoContext } from "../../context/produtoContext";
import { CategoriaContext } from "../../context/categoriaContext";
import { RemoverModal } from "../../Components/RemoverModal";

const Produtos = () => {
  const { produtos, removerProduto } = useContext(ProdutoContext);
  const { categorias, removerCategoria } = useContext(CategoriaContext);

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

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container container-sm">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="text-center">Produtos</h1>

                <ModalComponent
                  modalName="Cadastrar Produto"
                  modalTitle="Cadastrar Produto"
                  component={ProdutoModal}
                  arrayChild={categorias}
                />
              </div>
            </div>
          </div>

          <div className="row">
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
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {produtos.map((product: any) => (
                <div className="mx-2" key={product.id}>
                  <div className="card ml-3 mr-3">
                    <img
                      src={
                        product.imagem.includes("data:image")
                          ? product.imagem
                          : "data:image/*;base64," + product.imagem
                      }
                      className="card-img-top"
                      alt="image"
                    />

                    <div className="card-body">
                      <h5 className="card-title">{product.nome}</h5>

                      <p className="card-text">{product.descricao}</p>

                      <div className="d-flex justify-content-around">
                        <ModalComponent
                          modalName="Editar"
                          modalTitle="Editar Produto"
                          type="editar"
                          component={ProdutoModal}
                          arrayChild={categorias}
                          id={product.id}
                        />

                        <RemoverModal
                          item={product.nome}
                          modalName="Excluir"
                          title="Deseja remover"
                          key={product.id}
                          id={product.id}
                          remover={removerProduto}
                        />
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
                  modalName="Cadastrar Categoria"
                  modalTitle="Cadastrar Categoria"
                  component={CategoriaModal}
                />
              </div>

              <table className="table col-12">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th className="text-end">Ação</th>
                  </tr>
                </thead>

                <tbody>
                  {categorias.map((categoria) => (
                    <tr key={categoria.id}>
                      <td>{categoria.nome}</td>
                      <td className="text-end">
                        <ModalComponent
                          modalName="Editar"
                          modalTitle="Editar Categoria"
                          type="editar"
                          component={CategoriaModal}
                          id={categoria.id}
                        />{" "}
                        <RemoverModal
                          item={categoria.nome}
                          modalName="Excluir"
                          title="Deseja remover a categoria"
                          key={categoria.id}
                          id={categoria.id}
                          remover={removerCategoria}
                        />
                      </td>
                    </tr>
                  ))}
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
