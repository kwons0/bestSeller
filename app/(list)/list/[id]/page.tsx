import Category from "../../../../components/category";

export async function generateMetadata(){
    return{
        title: `The New York Times`
    }
}


export default function Detail() {
    return (
        <div>
            <Category />
        </div>
    );
}
