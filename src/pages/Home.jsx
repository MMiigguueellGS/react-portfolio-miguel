import React from "react";

const Home = () => {
  return (
    <>
      {/* <!-- contenido Principal --> */}
      <main className="layout__content">
        <section className="content__page">
          <h1 className="page__name animate-fade-down animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out animate-normal animate-fill-both">Miguel Guevara</h1>
          <h3 className="page__job animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out animate-normal animate-fill-both">Desarrollador Web</h3>
          <h2 className="page_hire-me animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-normal animate-fill-both">Ven Aqui . . . </h2>
        </section>
      </main>
    </>
  );
};

export default Home;
