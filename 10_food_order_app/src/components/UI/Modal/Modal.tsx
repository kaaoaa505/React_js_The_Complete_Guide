import './Modal.scss';

import ReactDOM from 'react-dom';

import ModalBackdrop from './ModalBackdrop/ModalBackdrop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Modal = (props: any) => {
    const overlay_id: HTMLElement = document.getElementById('overlay') ?? new HTMLElement;

    return (
        <div className='Modal'>
            {ReactDOM.createPortal(<ModalBackdrop onClick={props.onClick} />, overlay_id)}

            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay_id)}
        </div>
    )
}

export default Modal;