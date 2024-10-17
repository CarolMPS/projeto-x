import React, { useEffect, useState } from 'react';
import '../../../assets/style.css';
import { elementos as defaultElement } from "../../../assets/backend";
import { useDrag, useDrop } from 'react-dnd';
import { FaCalendar } from 'react-icons/fa';

export default function Elemento1({ onSave, search }) {
    const [elemento, setElemento] = useState(() => {
        const saved = localStorage.getItem('elementos');
        return saved ? JSON.parse(saved) : defaultElement
    });

    const moveTask = (dragIndex, hoverIndex) => {
        const updated = [...elemento];
        const draggedTask = updated[dragIndex];
        updated.splice(dragIndex, 1);
        updated.splice(hoverIndex, 0, draggedTask);
        setElemento(updated);
    };

    useEffect(() => {
        onSave(elemento)
    }, [elemento, onSave]);

    return (
        <div className='row'>
            <div class="col-xxl-12">
                <h3>Elemento Ordenável 1</h3>
            </div>
            {
                elemento.filter((item) => {
                    if (!search) return true
                    return item.title.toLowerCase().includes(search.toLowerCase())
                        ||
                        item.value.toString().toLowerCase().includes(search.toLowerCase());
                }).map((item, i) => {
                    return (
                        <ElementoItem
                            key={item.id}
                            index={i}
                            item={item}
                            moveTask={moveTask}
                        />
                    )
                })
            }
        </div>
    )

}

function ElementoItem({ item, index, moveTask }) {
    const [, ref] = useDrop({
        accept: 'item',
        hover: (draggedItem) => {
            if (draggedItem.index !== index, index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
    });

    return (
        <div
            ref={(node) => drag(ref(node))}
            style={{
                opacity: isDragging ? 0.5 : 1,
                scale: isDragging ? 1 : '',
                padding: '4px',
                margin: '2px',
                backgroundColor: 'white',
                cursor: 'move',
            }}
            className="col-md-6 col-xl-3 mb-4"
        >
            <div className="card shadow border-left-primary py-2">
                <div className="card-body">
                    <div className="row g-0 align-items-center">
                        <div className="col me-2">
                            <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                                <span>{item.title}</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0">
                                <span>{`R$ ${item.value}`}</span>
                            </div>
                        </div>
                        <div className="col-auto">
                            <FaCalendar size={32} color="#d1d5db" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}