import "./Profile.css"
import Navigation from "../Navigation/Navigation"
import Burger from "../Burger/Burger";

function Profile({setPopupMenuOpened, popupMenuOpened, popupMenuClosed}) {
    return(
        <section className="profile">
        <Navigation setIsOpened={setPopupMenuOpened}/>
        <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__info">
        <p className="profile__text">Имя</p>
        <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__info profile__info_bottom">
        <p className="profile__text">Email</p>
        <p className="profile__text">pochta@yandex.ru</p>
        </div>
        <p className="profile__edit">Редактировать</p>
        <p className="profile__exit">Выйти из аккаунта</p>
        </div>
        <Burger isOpened={popupMenuOpened} popupMenuClosed={popupMenuClosed}/>
        </section>
    )
}

export default Profile
