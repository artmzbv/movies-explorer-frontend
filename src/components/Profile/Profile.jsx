import "./Profile.css"

function Profile() {
    return(
        <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__container">
        <p className="profile__text">Имя</p>
        <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__container profile__container_bottom">
        <p className="profile__text">Email</p>
        <p className="profile__text">pochta@yandex.ru</p>
        </div>
        <p className="profile__edit">Редактировать</p>
        <p className="profile__exit">Выйти из Аккаунта</p>
        </section>
    )
}

export default Profile