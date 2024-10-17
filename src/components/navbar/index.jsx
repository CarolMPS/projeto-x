import '../../assets/style.css';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar({handleShow, show, salvarLocal}) {
    const notify = () => toast("Listas salvas com sucesso");
    return (
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
            // style={{ width: "300px" }}
            >
            <div className="container-fluid d-flex flex-column p-0"><a
                className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-layer-group"></i></div>
                <div className="sidebar-brand-text mx-3"><span>CAMADAS</span></div>
            </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item">
                        <div className="nav-item dropdown" style={{ padding: "15px;" }}>
                            <a aria-expanded="true" type="button"
                                data-bs-toggle="dropdown" className="dropdown-toggle link-light" href="#">
                                <i className="fas fa-grip-horizontal icon-draggable"></i>
                                Elemento Ordenável 1
                            </a>
                            <div data-bs-popper="none" className="dropdown-menu">
                                <a className="dropdown-item" href="#">Elemento 1</a>
                                <a className="dropdown-item" href="#">Elemento 2</a>
                                <a className="dropdown-item" href="#">Elemento 3</a>
                                <a className="dropdown-item" href="#">Elemento 4</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown" style={{ padding: "15px;" }}>
                            <a aria-expanded="true"
                                data-bs-toggle="dropdown" className="dropdown-toggle link-light" href="#">
                                <i className="fas fa-grip-horizontal icon-draggable"></i>
                                Elemento Ordenável 2
                            </a>
                            <div data-bs-popper="none" className="dropdown-menu">
                                <a className="dropdown-item" href="#">Lista de Tarefas</a>
                                <a className="dropdown-item" href="#">Grade de Cores</a>
                            </div>
                        </div>

                        <div className="nav-item" style={{ padding: "15px;" }}>
                            <button 
                            type="button" 
                            className="btn btn-success text-light fw-bold" 
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={()=> handleShow(!show)}
                            >
                                Modelo de Modal de Componente
                            </button>
                        </div>
                        <div className="nav-item" style={{ padding: "15px;" }}>
                            <button 
                            type="button" 
                            className="btn btn-dark col-12 text-light fw-bold"
                            onClick={()=>(salvarLocal(),notify)}
                            >
                                Salvar Layout
                            </button>
                        </div>
                        <ToastContainer />
                    </li>
                    <li className="nav-item"></li>
                </ul>
                <div className="text-center d-none d-md-inline"></div>
            </div>
        </nav>
    )
}