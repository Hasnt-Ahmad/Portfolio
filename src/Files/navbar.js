import logo from '../Images/LogoCap1.png';
import '../Css Files/navbar.css';
import { RiMenu2Line } from "react-icons/ri";
import $ from 'jquery';


function toggleFunction(){
    //let menuUl = document.getElementById("menuul");
    //menuUl.classList.toggle("active");    
    $(document).ready(function() {
        
        $(".menuul").slideToggle(1000).toggleClass("active");
      });
}

function Navbar() {
    // Add an event listener to wait for the element to load
   

   $(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
   })



    return (
        <div>
            <nav className="App">
                <img src={logo}  alt="Logo"></img>
                <span className="topmenumobile" onClick={toggleFunction}> <RiMenu2Line></RiMenu2Line> </span>
                <ul className="menuul ul">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#whatIDO">What I Do</a></li>
                    <li><a href="#contactMe">Contact Me</a></li>
                </ul>
            </nav>
            


        </div>
    );
}

export default Navbar;