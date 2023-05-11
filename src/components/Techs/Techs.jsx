import "./Techs.css"

function Techs() {
    return(
        
        <section className="techs" id="techs">
        <h1 className="techs__title">Технологии</h1>
        <h2 className="techs__subtitle">7 технологий</h2>
        <h3 className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        <ul className="techs__list">
        <li className="techs__text">HTML</li>
        <li className="techs__text">CSS</li>
        <li className="techs__text">JS</li>
        <li className="techs__text">React</li>
        <li className="techs__text">Git</li>
        <li className="techs__text">Express.js</li>
        <li className="techs__text">mongoDB</li>
        </ul>
        </section>
    )
}

export default Techs