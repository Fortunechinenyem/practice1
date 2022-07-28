import React, {useState} from "react";
import Hamburger from "./Hamburger";



export default function NavBar (){
  const [hamburgerOpen,setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

    return (
        <div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </div>
        </div>
    );
}

