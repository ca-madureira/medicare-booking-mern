import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contate-nos</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? want to send feedback about a beta feature? let
          us know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Seu email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Deixe-nos saber como ajudá-lo(a)"
              className="form__input mt-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
