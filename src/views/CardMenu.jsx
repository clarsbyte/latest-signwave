import { useParams } from "react-router"

export default function CardMenu(){
    const {id} = useParams()
    return (
        <div className="huge w-full my-10 flex flex-col content-center">
            <h1 className="mx-auto">{id}</h1>
        </div>
    )
}
