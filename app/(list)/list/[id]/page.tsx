import Category from "../../../../componenets/category";
import { Metadata } from 'next';

interface ImetaParams {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params: { id } }: ImetaParams): Promise<Metadata> {
    return {
        title: `${id} | The New York Times`,
    };
}

export default function Detail(){
    return(
        <div>
            <Category/>
        </div>
    )
}