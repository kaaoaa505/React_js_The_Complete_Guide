import './MovieCreate.scss';

import { useRef } from 'react';

const MovieCreate = (props: any) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const openingTextRef = useRef<HTMLTextAreaElement>(null);
    const releaseDateRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: { preventDefault: () => void; }) {
        event.preventDefault();

        // could add validation here...

        const movie = {
            title: titleRef.current?.value,
            opening_crawl: openingTextRef.current?.value,
            release_date: releaseDateRef.current?.value,
        };

        props.createMovie(movie);
    }

    return (
        <form className='MovieCreate' onSubmit={submitHandler}>
            <div className='control'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef} />
            </div>

            <div className='control'>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea rows={5} id='opening-text' ref={openingTextRef}></textarea>
            </div>

            <div className='control'>
                <label htmlFor='date'>Release Date</label>
                <input id='date' type='date' pattern="\d{4}-\d{2}-\d{2}" ref={releaseDateRef} />
            </div>

            <button>Add Movie</button>
        </form>
    );
}

export default MovieCreate;
