import Category from "../../../../componenets/category";


export async function generateMetadata({params: {id}}){
    return{
        title: id + ' | The New York Times'
    }
}

export default function Detail({params: {id}}){
    return(
        <div>
            <Category/>
        </div>
    )
}