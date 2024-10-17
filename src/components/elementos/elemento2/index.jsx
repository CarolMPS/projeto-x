import { useEffect, useState } from 'react';
import '../../../assets/style.css';
import { useDrag, useDrop } from 'react-dnd';
import { lista as defaultLista } from "../../../assets/backend";

export default function Elemento2({ onSave, search }) {
    const [lista, setLista] = useState(() => {
        const saved = localStorage.getItem('lista');
        return saved ? JSON.parse(saved) : defaultLista;
    });
    const moveTask = (dragIndex, hoverIndex) => {
        const updated = [...lista];
        const draggedTask = updated[dragIndex];
        updated.splice(dragIndex, 1);
        updated.splice(hoverIndex, 0, draggedTask);
        setLista(updated);
    };

    useEffect(() => {
        onSave(lista);
    }, [lista, onSave]);

    return (
        <>
            <div className="col-xxl-12">
                <h3>Elemento Ordenável 2</h3>
            </div>
            <div className="col-lg-12 mb-4">
                <div className="card shadow mb-4"></div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary fw-bold m-0">Lista de Tarefas</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        {lista
                            .filter((item) => {
                                if (!search) return true
                                return item.task.toLowerCase().includes(search.toLowerCase())
                                    ||
                                    item.time.toString().toLowerCase().includes(search.toLowerCase());
                            }).map((item, i) => (
                                <TarefaItem
                                    key={item.id}
                                    index={i}
                                    item={item}
                                    moveTask={moveTask}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

function TarefaItem({ item, index, moveTask }) {
    const [, ref] = useDrop({
        accept: 'task',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'task',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <li
            ref={(node) => drag(ref(node))}
            className={`list-group-item ${isDragging ? 'dragging' : ''}`}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '4px',
                margin: '2px',
                backgroundColor: 'white',
                cursor: 'move',
            }}
        >
            <div className="row g-0 align-items-center">
                <div className="col me-2">
                    <h6 className="mb-0"><strong>{item.task}</strong></h6>
                    <span className="text-xs">{item.time}</span>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id={`formCheck-${item.id}`} />
                        <label className="form-check-label" htmlFor={`formCheck-${item.id}`}></label>
                    </div>
                </div>
            </div>
        </li>
    );
}