import React from "react";
import "./style.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="title">О проекте</h2>

      <article className="table">
        <div className="table__cell">
          <h2 className="table__heading">Дипломный проект включал 5 этапов</h2>
          <p className="table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="table__cell">
          <h2 className="table__heading">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>

      <div className="timeline">
        <div className="timeline__container">
          <div className="timeline__small-part timeline__small-part_green">
            1 неделя
          </div>
          <div className="timeline__big-part timeline__big-part_grey">
            4 недели
          </div>
        </div>
        <div className="timeline__container">
          <div className="timeline__small-part">Back-end</div>
          <div className="timeline__big-part">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
