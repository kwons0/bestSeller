import style from '../css/category.module.css'
import Link from "next/link";

interface IBooksProps {
    book_image: string;
    title: string;
    rank: number;
    author: string;
    amazon_product_url: string;
}

export default function Books({book_image, title, rank, author, amazon_product_url}: IBooksProps){
    return(
        <div>
            <p className={style.bookImg}><img src={book_image} alt={title}/></p>
            <span className={style.rank}>{rank}</span>
            <ul>
                <li className={style.bookTitle}>{title}</li>
                <li className={style.bookAuthor}>{author}</li>
            </ul>
            {amazon_product_url ? (
                <Link href={amazon_product_url} target="_blank" className={style.purchase}>Buy →</Link>
            ) : (
                <span className={style.blocked}>No purchase link available</span>
            )}
        </div>
    )
}