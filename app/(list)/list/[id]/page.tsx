import Category from "../../../../componenets/category";

interface ImetaParams {
    params: {
        id: string;
    }
}

export async function generateMetadata({params: {id}}: ImetaParams){
    return{
        title: `${id} | The New York Times`
    }
}

export default function Detail(){
    return(
        <div>
            <Category/>
        </div>
    )
}