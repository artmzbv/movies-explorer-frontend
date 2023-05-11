import "./AboutMe.css"
import logoReference from '../../images/reference.svg'
import student from '../../images/student.png'

function AboutMe(){
    return(
        <section className="me" id="me">
        <h1 className="me__title">Студент</h1>
        <div className="me__info">
        <img className="me__picture" src={student} alt="студент" />
        <h2 className="me__name">Виталий</h2>
        <h3 className="me__profession">Фронтенд-разработчик, 30 лет</h3>
        <p className="me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
        У меня есть жена<br></br> и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
        С <br></br> 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по <br></br> веб-разработке, 
        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <p className="me__github">Github</p>
        <p className="me__portfolio">Портфолио</p>
        </div>
        <div className="me__reference">Статичный сайт
        <img src={logoReference} alt="ссылка" />
        </div>
        <div className="me__reference">Адаптивный сайт
        <img src={logoReference} alt="ссылка" />
        </div>
        <div className="me__reference">Одностраничное приложение
        <img src={logoReference} alt="ссылка" />
        </div>
        </section>
    )
}

export default AboutMe