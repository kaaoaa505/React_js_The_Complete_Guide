import './ModalOverlay.scss';

const ModalOverlay = (props: any) => {
    return (
        <div className='ModalOverlay'>
            <div className='content'>{props.children}</div>
        </div>
    )
}

export default ModalOverlay;