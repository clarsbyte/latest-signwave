import { useParams } from "react-router"
import alphabet from '../assets/courses'

export default function Course(){
    const {id} = useParams()
    return (
        <div className="huge w-full my-10 flex flex-col content-center">
            <h1 className="font-DM flex content-center mx-auto font-bold text-center p-2 text-4xl">{alphabet.title}</h1>
            <div className="flex-1 items-center justify-normal content-center gap-3">
            <video src={alphabet.path} controls className="flex-1 mx-auto  items-center justify-center"></video>
        </div>
        </div>
    )
}
