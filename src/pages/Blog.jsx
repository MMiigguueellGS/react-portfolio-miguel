import React from 'react'

const Blog = () => {
  return (
    <main className="layout__content">
    <section className="content__page content__blog">
      {/* <!-- ESTE CONTENIDO CAMBIA EN CADA SITIO web --> */}
      <header className="blog__header">
        <h1 className="blog__title">Blog</h1>
      </header>
      <section className="blog__articles">
        <article className="articles__article animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">

          <div className="article__top">
            <div className="article__category">Desarrollo</div>
            <a className="article__image-link" href="#">
              <div className="article__mask">
                <img className="article__image" src="/img/articulo-1.jpg" alt="imagen del blog"/>
              </div>

              <div className="article__logo">
                <i className="article__icon fa-solid fa-book"></i>
              </div>
            </a>

          </div>

          <div className="article__bottom">
            <time className="article__date" dateTime="2024-08-30">30/08/2024</time>
            <a className="article__link" href="#">
              <h2 className="article__title">Como aprender a programar </h2>
            </a>
          </div>

        </article>
        <article className="articles__article animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">

          <div className="article__top">
            <div className="article__category">Desarrollo</div>
            <a className="article__image-link" href="#">
              <div className="article__mask">
                <img className="article__image" src="/img/articulo-2.jpg" alt="imagen del blog"/>
              </div>

              <div className="article__logo">
                <i className="article__icon fa-solid fa-book"></i>
              </div>
            </a>

          </div>

          <div className="article__bottom">
            <time className="article__date" dateTime="2024-08-30">05/09/2024</time>
            <a className="article__link" href="#">
              <h2 className="article__title">Como hacer animaciones en css </h2>
            </a>
          </div>

        </article>
        <article className="articles__article animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">

          <div className="article__top">
            <div className="article__category">Desarrollo</div>
            <a className="article__image-link" href="#">
              <div className="article__mask">
                <img className="article__image" src="/img/articulo-3.jpg" alt="imagen del blog"/>
              </div>

              <div className="article__logo">
                <i className="article__icon fa-solid fa-book"></i>
              </div>
            </a>

          </div>

          <div className="article__bottom">
            <time className="article__date" dateTime="2024-08-30">30/04/2024</time>
            <a className="article__link" href="#">
              <h2 className="article__title">Como usar el local Store en js </h2>
            </a>
          </div>

        </article>
        <article className="articles__article animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal animate-fill-both">

          <div className="article__top">
            <div className="article__category">Desarrollo</div>
            <a className="article__image-link" href="#">
              <div className="article__mask">
                <img className="article__image" src="/img/articulo-4.jpg" alt="imagen del blog"/>
              </div>

              <div className="article__logo">
                <i className="article__icon fa-solid fa-book"></i>
              </div>
            </a>

          </div>

          <div className="article__bottom">
            <time className="article__date" dateTime="2024-08-30">01/06/2024</time>
            <a className="article__link" href="#">
              <h2 className="article__title">Como maquetar una web </h2>
            </a>
          </div>

        </article>
      </section>


    </section>
  </main>
  )
}

export default Blog