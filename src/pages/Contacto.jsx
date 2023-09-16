import React, { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";
import Map from "../components/Map";

const Contacto = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.button.value = "Enviando...";
    emailjs
      .sendForm(
        "service_nmipaot",
        "template_0tbm55e",
        e.target,
        "DO5uTH-WViRKwLwbu"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          e.target.button.value = "Enviar mensaje";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="layout__content" id="contact">
      <section className="content__page content__contact">
        {/* <!-- ESTE CONTENIDO CAMBIA EN CADA SITIO web --> */}
        <header className="contact__header">
          <h1 className="contact__title">Contacto</h1>
        </header>

        <section className="contact__container">
          <section className="contact__info">
            <div className="contact__data">
              <i className="contact__icon fa-solid fa-location-dot"></i>
              <h2 className="contact__subtitle">Trujillo</h2>
            </div>
            <div className="contact__data">
              <i className="contact__icon fa-solid fa-phone"></i>
              <h2 className="contact__subtitle">914290630</h2>
            </div>
            <div className="contact__data">
              <i className="contact__icon fa-solid fa-envelope"></i>
              <h2 className="contact__subtitle">mguevarasimon@gmail.com</h2>
            </div>
            <div className="contact__data">
              <i className="contact__icon fa-solid fa-circle-check"></i>
              <h2 className="contact__subtitle">Desarrollador Freelance</h2>
            </div>
          </section>

          <section className="contact__form-box">
            <div className="contact__map" id="load-iframe-map">
              {isMapLoaded ? null : <span className="loader "></span>}
              <Map setIsMapLoaded={setIsMapLoaded} />
            </div>

            <header className="contact__form-header">
              <h3 className="form-header__title">
                Como puedo <span className="title__color">ayudarte?</span>
              </h3>
            </header>

            {/* <!-- FORMULARIO --> */}
            <form className="contact__form" id="form" onSubmit={sendEmail}>
              <div className="form__container">
                <section className="form__left">
                  <div className="form_group">
                    <input
                      className="form__input"
                      type="text"
                      name="from_name"
                      required
                      placeholder="Nombre"
                      autoComplete="off"
                    />
                    <label className="form__label" htmlFor="from_name">
                      Nombre
                    </label>
                  </div>
                  <div className="form_group">
                    <input
                      className="form__input"
                      type="email"
                      name="email_id"
                      required
                      placeholder="Email"
                      autoComplete="off"
                    />
                    <label className="form__label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="form_group">
                    <input
                      className="form__input"
                      type="text"
                      name="reply_to"
                      required
                      placeholder="Subject"
                      autoComplete="off"
                    />
                    <label className="form__label" htmlFor="reply_to">
                      Asunto
                    </label>
                  </div>
                </section>

                <section className="form__right">
                  <div className="form_group form_group--textarea">
                    <textarea
                      className="form__input form__input--textarea"
                      name="message"
                      required
                      placeholder="Mensaje"
                    ></textarea>
                    <label className="form__label" htmlFor="message">
                      Mensaje
                    </label>
                  </div>
                </section>
              </div>
              <div id="message"></div>
              <input
                className="form__button"
                type="submit"
                value="Enviar mensaje"
                id="button"
              />
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Contacto;
