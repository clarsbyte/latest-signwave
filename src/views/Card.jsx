import { useState } from "react"
import { useParams } from "react-router"
import { Ban, Check, RotateCcwSquare} from 'lucide-react'
import { Navigate } from "react-router"

export default function Flashcards(){
    const {id} = useParams()
    const [flip, setFlip] = useState(false)
    const [index, setIndex] = useState(0)
    const [skip, setSkip] = useState(false)
    const [wrong, setWrong] = useState(0)
    const [correct, setCorrect] = useState(0)

    const qna = [
        {
            question: "A",
            answer: "video path"
        },{
            question: "B",
            answer: "video path 2"
        }
    ]

    function Know(){
        if ((index+1) == qna.length){
            setCorrect(correct+1)
            setSkip(true)
        }else
        {setIndex(index+1)
        setCorrect(correct+1)
        setFlip(false)
        console.log(qna.length)}
        
     }

    function dontKnow(){
        if ((index+1) == qna.length){
            setWrong(wrong+1)
            setSkip(true)
        }else
        {setIndex(index+1)
        setWrong(wrong+1)
        setFlip(false)}
     }

    return (
        <div className="flex gap-2 flex-col justify-center m-auto items-center h-screen w-screen">
            <div className={`flex ${!flip ? 'visible' : 'hidden'} rounded-xl text-xl font-mono font-semibold items-center justify-center h-1/2 w-1/2 bg-gray`}>
            {qna[index].question}
            </div>

            <div className={`flex ${flip ? 'visible' : 'hidden'} rounded-xl text-xl font-mono font-semibold items-center justify-center h-1/2 w-1/2 bg-gray`}>
            {qna[index].answer}
            </div>
            
            <div className="buttons flex gap-5">
            <button onClick={()=> Know()} className="yes bg-green rounded-md py-2 px-6"><Check color="white" strokeWidth={4}/></button>
            <button onClick={()=> setFlip(!flip)} className="flip bg-yellow rounded-md py-2 px-6"><RotateCcwSquare color="white" strokeWidth={3}/></button>
            <button onClick={()=> dontKnow()} className="no bg-red rounded-md py-2 px-6"><Ban color="white" strokeWidth={3.5}/></button>
            {skip ? <Navigate to="/flashcards"/> : ""}
            </div>
            
        </div>
    )
}