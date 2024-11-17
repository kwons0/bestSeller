import BestSeller from "../../components/best-seller";
import style from '../../css/home.module.css'

export const metadata = {
    title: 'Home | The New York Times',
}

export default function HomePage(){
    return (
        <div>
            <h1 className={style.title}>The New York Times Best Seller Explorer<span>✷</span></h1>
            <img className={style.mainImg}
                src="/image/people.png"
                alt="author rawpixel.com, source Freepik"
            />
            <BestSeller/>
        </div>
    )
}