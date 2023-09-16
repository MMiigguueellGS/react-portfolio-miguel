import React from 'react'

const SobreMi = () => {
  return (
    <>
       <main className="layout__content">
      <section className="content__page content__about">
        {/* <!-- ESTE CONTENIDO CAMBIA EN CADA SITIO web --> */}
        <header className="about__header">
          <h1 className="about__title">Sobre <span className="title__color">Mi</span></h1>
        </header>
        <section className="about__personal-info">
          <article className="personal-info__bio">
            <p className="personal_info__description">
              ¡Hola! Soy <span className="title__color">miguel </span>Soy un apasionado del desarrollo web, transformando
              ideas en soluciones efectivas. Utilizo JavaScript, HTML, CSS y React para crear experiencias técnicas
              robustas y atractivas.
            </p>

          </article>

        </section>

        <section className="about__services">
          <header className="services__header">
            <h2 className="services__title">
              Lo que <span className="title__color">hago</span></h2>
          </header>

          <div className="services__container">
            <article className="services__service">
              <div className="service_icon">
                <i className="service_real-icon fa-solid fa-code"></i>
              </div>

              <div className="serice__content">
                <h3 className="service__title">Programacion</h3>
                <p className="service__description">me sumerjo en el mundo del código, donde transformo ideas en realidad.
                  Utilizo una variedad de lenguajes de programación, como JavaScript, HTML, CSS, y react, para crear
                  soluciones técnicas efectivas y robustas. </p>
              </div>
            </article>

            <article className="services__service">
              <div className="service_icon">
                <i className="service_real-icon fa-solid fa-chalkboard-user"></i>
              </div>

              <div className="serice__content">
                <h3 className="service__title">Formacion</h3>
                <p className="service__description">Siempre estoy en busca de oportunidades para mejorar mis habilidades y
                  mantenerme actualizado en un campo en constante evolución. Participar en cursos, conferencias y
                  proyectos de aprendizaje es fundamental para mantenerme a la vanguardia de las últimas tendencias y
                  tecnologías en desarrollo web.</p>
              </div>
            </article>




          </div>

        </section>

        <section className="about__extra">

          <header className="extra__header">
            <h2 className="extra__title">Informacion <span className="title__color">Extra</span></h2>
          </header>

          <div className="extra__container">

            <article className="extra__info">
              <i className="extra__icon service_real-icon fa-solid fa-music"></i>
              <h4 className="extra__subtitle">Me gusta la musica</h4>
              <span className="extra__quantity"></span>
            </article>

            <article className="extra__info">
              <i className="extra__icon service_real-icon fa-solid fa-walking"></i>
              <h4 className="extra__subtitle">salir a caminar</h4>
              <span className="extra__quantity"></span>
            </article>

            <article className="extra__info">
              <i className="extra__icon service_real-icon fa-solid fa-star"></i>
              <h4 className="extra__subtitle"></h4>
              <span className="extra__quantity"></span>
            </article>
          </div>

        </section>

      </section>
    </main>
    </>
  )
}

export default SobreMi