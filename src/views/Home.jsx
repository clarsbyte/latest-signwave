import { Outlet, Link } from "react-router-dom";
export default function Home(){
    return (
        <div>Home 
            <ul>
                <Link to="camera"><li>Hi</li></Link>
            </ul>
        </div>
        
    )
}