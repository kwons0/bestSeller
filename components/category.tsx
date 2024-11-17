"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from '../css/category.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Books from "./books";

interface IbuyLink {
    name: string;
    url: string;
}
interface IBooks {
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    asterisk: number;
    author: string;
    book_image: string;
    book_image_height: number;
    book_image_width: number;
    book_review_link: string;
    book_uri: string;
    buy_links: IbuyLink[];
    contributor: string;
    contributor_note: string;
    dagger: number;
    description: string;
    first_chapter_link: string;
    price: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    weeks_on_list: number;
}
interface Icategory {
    bestsellers_date: string;
    books: IBooks[];
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    next_published_date: string;
    normal_list_ends_at: number;
    previous_published_date: string;
    published_date: string;
    published_date_description: string;
    updated: string;
}


export default function Category(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState<Icategory>();

    const getCategory = async() => {
        const json = await(
            await fetch("https://books-api.nomadcoders.workers.dev/list?name=" + id)
        ).json();
        setCategory(json.results)
        setLoading(false)
    }

    useEffect(() => {
        getCategory()
    },[])

    
    return(
        <div>
            { loading ? 'Loading...' : (
                <>
                    <h2 className={style.title}>{category.list_name}</h2>
                    <Swiper 
                        spaceBetween={30}
                        slidesPerView={2.3}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className={style.swiperSlideBox}
                    >
                    {
                        category.books.slice(0,5).map( (book) => (
                            <SwiperSlide key={book.rank} className={style.slide}>
                                <Books
                                    book_image={book.book_image}
                                    title={book.title} 
                                    rank={book.rank} 
                                    author={book.author}
                                    amazon_product_url={book.amazon_product_url}
                                />
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                    <ul className={style.bookList}>
                        {
                            category.books.slice(5).map( (book) => (
                                <li key={book.rank} className={style.book}>
                                    <Books
                                        book_image={book.book_image}
                                        title={book.title} 
                                        rank={book.rank} 
                                        author={book.author}
                                        amazon_product_url={book.amazon_product_url}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </>
            )}
        </div>
    )
}