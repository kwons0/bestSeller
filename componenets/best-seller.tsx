import Link from "next/link";
import style from '../css/home.module.css'

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";
async function getList(){
    const response = await fetch(API_URL)
    const json = await response.json()
    return json;
};

export default async function BestSeller(){
    const lists = await getList();
    return(
        <ul className={style.list}>
            {
                lists.results.map( (list, idx) => (
                    <li key={idx}>
                        <Link href={`/list/${list.list_name_encoded}`}>
                        {list.display_name} →
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}