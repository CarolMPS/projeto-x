import { useState } from 'react';
import Navbar from "../../components/navbar";
import Modal from "../../components/modal";
import { FaSearch } from 'react-icons/fa';
import Elemento1 from "../../components/elementos/elemento1";
import Elemento2 from "../../components/elementos/elemento2";
import Elemento3 from '../../components/elementos/elemento3';
import { toast } from 'react-toastify';
import "../../assets/style.css";

export default function Home() {

    //ESTADOS
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState();
    const [listaElementos, setListaElementos] = useState([]);
    const [listaTarefas, setListaTarefas] = useState([]);
    const [listaCores, setListaCores] = useState([]);

    const handleShow = _ => setShow(!show);

    const salvarLocal = () => {
        localStorage.setItem('elementos', JSON.stringify(listaElementos));
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
        localStorage.setItem('cores', JSON.stringify(listaCores));
        toast("Listas salvas com sucesso!");
    };

    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <Navbar show={show} handleShow={handleShow} salvarLocal={salvarLocal} />
                    <Modal show={show} handleShow={handleShow} />
                    {/* <!-- CONTEUDO PRINCIPAL --> */}
                    <div className="d-flex flex-column" id="content-wrapper">
                        <div id="content">
                            <nav className="navbar navbar-expand bg-white text-center shadow justify-content-center mb-4 topbar">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
                                                style={{ marginRight: "0px", marginBottom: "0px", textAlign: "center", marginLeft: "37px" }}>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="bg-light form-control border-0 small"
                                                        placeholder="Buscar Componente"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                    <button
                                                        className="btn btn-primary py-0"
                                                        type="button"
                                                    >
                                                        <FaSearch size={24} color="black" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="container-fluid">
                                <div className="text-start d-sm-flex justify-content-between align-items-center mb-4">
                                    <h1 className="text-dark mb-0">Elementos</h1>
                                </div>

                                {/* <!-- ELEMENTO ORDERNÁVEL 1 --> */}
                                <Elemento1 onSave={setListaElementos} search={search} />
                                {/* <!-- ELEMENTO ORDENÁVEL 2 --> */}
                                <div className="row">
                                    <div className="col">
                                        <Elemento2 onSave={setListaTarefas} search={search} />
                                    </div>
                                    <div className="col">
                                        <Elemento3 onSave={setListaCores} search={search} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="bg-white sticky-footer">
                            <div className="container my-auto">
                                <div className="text-center my-auto copyright"><span>Copyright © Meu editor</span></div>
                            </div>
                        </footer>
                    </div>
                </div>

                <script src="./assets/popper.min.js"></script>
                <script src="./assets/bootstrap.min.js"></script>
            </div>
        </>
    )
}