import Button from '../Button/Button';
import './ErrorModal.scss';

const ErrorModal = (props: any) => {
    if (props.title === '') return <></>;

    return (
        <div className="ErrorModal">
            <div className='backdrop' onClick={props.onErrorConfirm} />

            <div className='modal'>
                <header>
                    <h2>{props.title}</h2>
                </header>

                <article className='content'>
                    {props.content}
                </article>

                <footer className='actions'>
                    <form onSubmit={props.onErrorConfirm}>
                        <Button>Ok</Button>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default ErrorModal;