import React from 'react'

const Portafolio = () => {
  return (
    <main className="layout__content">
    <section className="content__page content__portfolio">
      {/* <!-- ESTE CONTENIDO CAMBIA EN CADA SITIO web --> */}
      <header className="portfolio__header">
        <h1 className="portfolio__title">Portafolio</h1>
      </header>


      <section className="portfolio__gallery">

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://ma-react-e01.netlify.app/" target="_blank" >
              <img className="gallery__image" src="/img/fortuneCookies.png" alt=""/>
            </a>
          </div>
          <figcaption className="gallery__title">app de galletas de la fortuna</figcaption>
          <i className="gallery__icon fa-solid fa-cookie"></i>
          <span className="gallery__category">App con frases motivadoras</span>
        </figure>

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://ma-e02-weather-app.netlify.app/" target="_blank">
              <img className="gallery__image" src="/img/weather.png" alt=""/>
            </a>
          </div>
          <figcaption className="gallery__title">App del clima</figcaption>
          <i className="gallery__icon fa-solid fa-code"></i>
          <span className="gallery__category">Conoce el clima de tu ubicacion</span>
        </figure>

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://mg-e-commerce-ac.netlify.app/" target="_blank">
              <img className="gallery__image" src="/img/ecommerce.png" alt=""/>
            </a>
          </div>
          <figcaption className="gallery__title">App e-commerce</figcaption>
          <i className="gallery__icon fa-solid fa-cart-arrow-down"></i>
          <span className="gallery__category">e-commerce</span>
        </figure>

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://poquedex-mdm-2023.netlify.app/pokedex/59" target="_blank">
              <img className="gallery__image" src="/img/pokedx.png" alt=""/>
              
            </a>
          </div>
          <figcaption className="gallery__title">App de pokedex</figcaption>
          <i className="gallery__icon fa-solid fa-dog"></i>
          <span className="gallery__category">Encuentra tu pokemon favorito</span>
        </figure>

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://ma-react3-rick-and-morty.netlify.app/" target="_blank">
              <img className="gallery__image" src="/img/rickMorty.png" alt=""/>
            </a>
          </div>
          <figcaption className="gallery__title">App Rick and Morty</figcaption>
          <i className="gallery__icon fa-solid fa-plane"></i>
          <span className="gallery__category">Busca tu personaje</span>
        </figure>

        <figure className="gallery__item animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">
          <div className="gallery_container-image">
            <a className="gallery__link" href="https://ma-userforge-e04.netlify.app/" target="_blank">
              <img className="gallery__image" src="/img/usuarios.png" alt=""/>
            </a>
          </div>
          <figcaption className="gallery__title">App CRUD de usuarios</figcaption>
          <i className="gallery__icon fa-solid fa-image-portrait"></i>
          <span className="gallery__category">manejo de usarios</span>
        </figure>

      </section>


    </section>
  </main>
  )
}

export default Portafolio