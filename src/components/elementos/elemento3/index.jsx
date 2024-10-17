import { useEffect, useState } from 'react';
import '../../../assets/style.css';
import { useDrag, useDrop } from 'react-dnd';
import { cores as defaultCores } from "../../../assets/backend"

export default function Elemento3({ onSave, search }) {
    const [cores, setCores] = useState(() => {
        const saved = localStorage.getItem('cores');
        return saved ? JSON.parse(saved) : defaultCores;
    });
    const moveTask = (dragIndex, hoverIndex) => {
        const updated = [...cores];
        const draggedTask = updated[dragIndex];
        updated.splice(dragIndex, 1);
        updated.splice(hoverIndex, 0, draggedTask);
        setCores(updated);
    };

    useEffect(() => {
        onSave(cores);
    }, [cores, onSave]);

    return (
        <div className="row">
            <div className="col-xxl-12">
                <h3>Elemento Ordenável 3</h3>
            </div>

            {
                cores
                .filter((item) => {
                    if (!search) return true
                    return item.title.toLowerCase().includes(search.toLowerCase())
                        ||
                        item.hex.toLowerCase().includes(search.toLowerCase());
                }).map((item, i) => {
                    return (
                        <CorItem
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

function CorItem({ item, index, moveTask }) {
    const [, ref] = useDrop({
        accept: 'color',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'color',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            key={item.id}
            ref={(node) => drag(ref(node))}
            className={`col-lg-5 mb-4 ${isDragging ? 'dragging' : ''}`}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '4px',
                margin: '2px',
                backgroundColor: 'white',
                cursor: 'move',
            }}
        >
            <div className={`card text-white ${item.bg} shadow`}>
                <div className="card-body">
                    <p className="m-0">{item.title}</p>
                    <p className="text-white-50 small m-0">{item.hex}</p>
                </div>
            </div>
        </div>
    );
}