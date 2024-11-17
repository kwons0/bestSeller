import style from '../../../css/about.module.css'

export const metadata = {
    title: 'About | The New York Times',
}

export default function About(){
    return(
        <article>
            <h2 className={style.title}>About us</h2>
            <img className={style.aboutImg}
                src="/image/book.png"
                alt="Hand drawing illustration of lifestyle concept"
            />
            <div className={style.content}>
                Welcome to the official for The New York Best Seller list explorer.<br/>
                We hope you enjoy your stay!
            </div>
        </article>
    )
}