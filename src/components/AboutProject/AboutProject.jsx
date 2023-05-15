import "./AboutProject.css"

function AboutProject(){
    return(
        <section className="project" id="project">
        <h1 className="project__title">О проекте</h1>
        <div className="project__description">
        <h2 className="project__subtitle project__subtitle_first">Дипломный проект включал 5 этапов</h2>
        <p className="project__text project__text_first"> Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h2 className="project__subtitle project__subtitle_second">На выполнение диплома ушло 5 недель</h2>
        <p className="project__text project__text_second"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="project__timing">
        <div className="project__viz project__viz_first">1 неделя</div>
        <div className="project__viz project__viz_second">4 недели</div>
        <p className="project__name">Back-end</p>
        <p className="project__name">Front-end</p>
        </div>
        </section>
    )
}

export default AboutProject
