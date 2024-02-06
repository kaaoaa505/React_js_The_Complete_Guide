import './Modal.scss';

import ReactDOM from 'react-dom';

import ModalBackdrop from './ModalBackdrop/ModalBackdrop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Modal = (props: any) => {
    const portal_element_by_id: HTMLElement = document.getElementById('overlay') ?? new HTMLElement;

    return (
        <div className='Modal'>
            {ReactDOM.createPortal(<ModalBackdrop onClick={props.onClick} />, portal_element_by_id)}

            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal_element_by_id)}
        </div>
    )
}

export default Modal;