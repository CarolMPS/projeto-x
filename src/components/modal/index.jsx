import '../../assets/style.css';
export default function Modal({ show, handleShow }) {
    return (
        <div
            className={`modal fade ${show ? 'show' : ''}`} 
            id="exampleModal" 
            tabIndex="-1"
            style={{ display: show ? 'block' : 'none' }} 
            aria-labelledby="exampleModalLabel"
            aria-hidden={!show}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
                        <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        onClick={()=> handleShow(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <small>
                            Os campos devem ser referentes ao conteúdo dos Elementos
                            editáveis do bloco escolhido.
                        </small>
                        <form className="mt-4">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Subtítulo</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Título</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Classe do Ícone</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal"
                        onClick={()=> handleShow(false)}
                        >Cancelar
                        </button>
                        <button type="button" className="btn btn-primary">Salvar Alterações</button>
                    </div>
                </div>
            </div>
        </div>
    )
}