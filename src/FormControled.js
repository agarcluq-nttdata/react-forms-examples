import React from 'react';
import './style.css';
import { useRef } from 'react';

export const FormControled = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const genreRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const checkRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formRef = {
      nameRef: nameRef.current.value,
      ageRef: ageRef.current.value,
      genreRef: genreRef.current.value,
      passwordRef: passwordRef.current.value,
      emailRef: emailRef.current.value,
      checkRef: checkRef.current.value,
    };
    // console.log(formRef);
    const form = new FormData(event.target);
    console.log(form);

    for (const [key, value] of Object.entries(form)) {
      console.log(`${key}: ${value}`);
    }
  };
  return (
    <div>
      <h2>Form Controlled</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Datos personales</legend>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Nombre"
            ref={nameRef}
          />
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            id="age"
            name="age"
            aria-label="Edad"
            ref={ageRef}
          />
          <select id="genre" ref={genreRef}>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Cuenta</legend>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            aria-label="Contraseña"
            ref={passwordRef}
          />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" aria-label="Email" ref={emailRef} />
          <input type="checkbox" id="allAccepted" ref={checkRef} />
          <label htmlFor="allAccepted" id="allAccepted">
            Ok?
          </label>
        </fieldset>
        <button>Enviar</button>
      </form>
    </div>
  );
};
