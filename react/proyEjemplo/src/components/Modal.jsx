import { createPortal } from 'react-dom'
import './Modal.css'

export function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className="modal-fondo" onClick={(onClose)}>
            <div className="modal-contenido" onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>, document.body
    )
}