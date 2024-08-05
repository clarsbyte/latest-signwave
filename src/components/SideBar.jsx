import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import{ AudioWaveform , BookA , Camera , WalletCards , Globe  } from "lucide-react"
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SidebarContext = createContext()

function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <div className="h-screen w-fit">
      <nav className="h-full w-fit flex flex-col bg-dark border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className={`overflow-hidden text-lg flex-1 flex-col font-mono text-white transition-all ${
              expanded ? "w-42" : "w-0"
            }`}>
               <div></div>
               <div>SignWave</div>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst stroke="white" /> : <ChevronLast stroke="white" />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 text-main">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </div>
  )
}

function SidebarItem({ icon, title, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    
      <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors hover:bg-select
    `}
    >
      {icon}
      <span
        className={`overflow-hidden text-white transition-all ${
          expanded ? "w-52 ml-3 text-white" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 
      `}
        >
        
        </div>
      )}
    </li>
    
  )
}
// hhii
export default function Drawer(){
    return (
      
    <div>
      <Sidebar>
          
          <SidebarItem icon={<Globe stroke="white" size ={20}/>} title={"discover"} text={"Discover"} />
          <SidebarItem icon={<BookA stroke="white" size ={20}/>} title={"dictionary"} text={"Dictionary"} />
          <SidebarItem icon={<WalletCards stroke="white" size ={20}/>} title={"flashcards"} text={"Flashcards"} />
          <SidebarItem icon={<Camera stroke="white" size ={20}/>} title={"camera"} text={"Camera"} />
     </Sidebar>
    </div>
    )
}