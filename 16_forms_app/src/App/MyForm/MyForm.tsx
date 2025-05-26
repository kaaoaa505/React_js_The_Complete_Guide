import React, { useState, useRef } from 'react';    

const MyForm = () => {
    const [name_value, $name_value] = useState('');
    const [name_is_valid, $name_is_valid] = useState(true);
    const email_ref = useRef<HTMLInputElement>(null);

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        $name_value(e.target.value);
        console.warn('Name changed to:', e.target.value);
    }

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!name_value.trim()) {
            console.error('Name is required');
            $name_is_valid(false);
            return;
        }else {
            $name_is_valid(true);
        }   

        if (!email_ref.current || !email_ref.current.value.trim()) {
            console.error('Email input ref is not set');
            return;
        }

        console.info('Form submitted with name:', name_value);
        console.info('Email input ref value:', email_ref.current?.value);
    }

  return (
    <form onSubmit={formSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={nameChange} />
        {name_is_valid ? null : <span style={{color: 'red'}}>Name is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={email_ref} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
