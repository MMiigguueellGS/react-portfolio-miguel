import React from "react";

const SobreMi = () => {
  return (
    <>
      <main className="layout__content">
        <section className="content__page content__about">
          {/* <!-- ESTE CONTENIDO CAMBIA EN CADA SITIO web --> */}
          <header className="about__header">
            <h1 className="about__title animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-in-out animate-normal animate-fill-both">
              Sobre <span className="title__color">Mi</span>
            </h1>
          </header>
          <section className="about__personal-info">
            <article className="personal-info__bio">
              <p className="personal_info__description animate-flip-down animate-once animate-duration-500 animate-delay-300 animate-ease-in-out animate-normal animate-fill-both">
                ¡Hola! Soy <span className="title__color">miguel </span> un entusiasta del desarrollo web. Me gusta crear proyectos con tecnologias como javaScript, react js y node js, que no solo sean visualmente atractivos, sino que también ofrezcan una funcionalidad interesante y útil .
              </p>
            </article>
          </section>

          <section className="about__services">
            <header className="services__header modifier">
              <h2 className="services__title">
                Lo que <span className="title__color">hago</span>
              </h2>
            </header>

            <div className="services__container">
              <article className="services__service">
                <div className="service_icon">
                  <i className="service_real-icon fa-solid fa-code"></i>
                </div>

                <div className="serice__content">
                  <h3 className="service__title">Programacion</h3>
                  <p className="service__description animate-flip-down animate-once animate-duration-500 animate-delay-350 animate-ease-in-out animate-normal animate-fill-both">
                    me sumerjo en el mundo del código, donde transformo ideas en
                    realidad. Utilizo una variedad de lenguajes de programación,
                    como JavaScript, HTML, CSS, y react, para crear soluciones
                    técnicas efectivas y robustas.{" "}
                  </p>
                </div>
              </article>

              <article className="services__service">
                <div className="service_icon">
                  <i className="service_real-icon fa-solid fa-chalkboard-user"></i>
                </div>

                <div className="serice__content">
                  <h3 className="service__title">Formacion</h3>
                  <p className="service__description animate-flip-down animate-once animate-duration-500 animate-delay-450 animate-ease-in-out animate-normal animate-fill-both">
                    Siempre estoy en busca de oportunidades para mejorar mis
                    habilidades y mantenerme actualizado en un campo en
                    constante evolución. Participar en cursos, conferencias y
                    proyectos de aprendizaje es fundamental para mantenerme a la
                    vanguardia de las últimas tendencias y tecnologías en
                    desarrollo web.
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section className="about__services">
            <header className="services__header">
              <h2 className="services__title">
                Mis <span className="title__color">Skills</span>
              </h2>
            </header>

            <div className="services__container">
              <article className="services__service">
                <div className="service_icon">
                  <i className="service_real-icon fa-solid fa-code"></i>
                </div>

                <div className="serice__content">
                  <h3 className="service__title">ACA VA UN TITULO</h3>
                  <p className="service__description animate-flip-down animate-once animate-duration-500 animate-delay-350 animate-ease-in-out animate-normal animate-fill-both">
                    HTML - CSS - JAVASCRIPT - REACT - NODE JS - SQL SERVER -
                    POWER BY -{" "}
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="about__extra">
            <header className="extra__header modifier">
              <h2 className="extra__title">
                Mi Soft <span className="title__color">Skills</span>
              </h2>
            </header>

            <div className="extra__container">
              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-people-group"></i>
                <h4 className="extra__subtitle">Trabajo en equipo</h4>
              </article>

              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-briefcase-clock"></i>
                <h4 className="extra__subtitle">Gestión del Tiempo</h4>
              </article>

              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-heartbeat"></i>
                <h4 className="extra__subtitle">Resiliencia</h4>
              </article>
              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-brain"></i>
                <h4 className="extra__subtitle">Pensamiento Crítico</h4>
              </article>

              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-cogs"></i>
                <h4 className="extra__subtitle">Adaptabilidad</h4>
              </article>

              <article className="extra__info">
                <i className="extra__icon service_real-icon fa-solid fa-book-open-reader"></i>
                <h4 className="extra__subtitle">Aprendizaje Continuo</h4>
              </article>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default SobreMi;
