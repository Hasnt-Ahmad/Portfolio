import './App.css';
import "../src/Files/navbar"
import Navbar from '../src/Files/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../src/Images/Pic22.jpg'
import $ from 'jquery';
import 'jquery.ripples';
import './Files/circularbar';
import { RiAppStoreLine } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { HiOutlineFilter } from "react-icons/hi";
import { BsInstagram,BsLinkedin,BsFacebook,BsGithub} from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';



function App() {
  $(document).ready(function(){
    $('.bg').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.01,
    });
  })

  return (
    <div className="App">
       <div className='bg' id="home">
        <Navbar></Navbar>
        <div className='div'>
          <p>I AM</p>
          <span className='title'> <TypeAnimation
            sequence={[
              'Hasnat Ahmad', // Types 'One'
              100, // Waits 1s
              'Freelancer', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'App Developer', 
              100, // Waits 2s
              'Web Developer',
              100, // Waits 2s
              'Web Scrapper',
              100,// Types 'Three' without deleting 'Two'
              ]}
      speed={{type: "keyStrokeDelayInMs", value: 80}}
      cursor={true}
      repeat={Infinity}
     
    />
  );</span>
        </div>
      </div>
      <br></br>
      
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-12 Intro'>
            <p className='AboutMe-p' >About Me</p>
          </div>
          <div className='col-12 Intro'>
            <p className='Intro-p'>Hi there! My name is Hasnat Ahmad, and I'm a passionate software engineer based in Peshawar. <br></br>I love to create digital products that make a difference in people's lives, whether it's through<br></br> developing websites, web applications, or other software solutions.</p>
          <br></br><br></br>
          </div>
        </div>
      </div>

    <br></br><br></br><br></br>
      <div className='container-fluid ' id="aboutme">
        <div className='row gap'>
            <div className='col-md-5 profile '>
              <div>
                  <img src={img}></img>
              </div>
            </div>
            <div className='col-7 profile-intro '>
              <br></br>
              <h4 >I'm Hasnat </h4>
              <br></br>
              <p>Hi there! My name is <span>Hasnat Ahmad</span>, and I'm a passionate software engineer based in Peshawar.<br></br>With 3+ years of experience in the field, I've become proficient in multiple programming languages<br></br> and have worked with a variety of technologies and frameworks.</p>
              
              <ul>
                              <li>
                                 <span><label>Birthday:</label> 31.08.2002</span>
                              </li>
                              <li>
                                 <span><label>Age:</label> 21</span>
                              </li>
                              <li>
                                 <span><label>City:</label> Peshawar</span>
                              </li>
                              <li>
                                 <span><label>Study:</label> FAST NUCES Peshawar</span>
                              </li>
                              <li>
                                 <span><label>Degree:</label>  Bachelor In Software Engineering</span>
                              </li>   
                              <li>
                                 <span><label>Email:</label> <a href="#">p200079@pwr.nu.edu.pk</a></span>
                              </li>
                              <li>
                                 <span><label>Phone:</label> <a href="#">+92 317 00 500 92</a></span>
                              </li>
                              <li>
                                 <span><label>GitHub:</label> <a href="https://github.com/Hasnt-Ahmad">https://github.com/Hasnt-Ahmad</a></span>
                              </li>
                           </ul>
            </div>
          </div>
      </div>
      <br></br><br></br>
        <div className='container-fluid'>
          <div className='row Skills'>
            <div className='col-12 '>
              <p className='About-Skills' >About My Work Skills ?</p>
            </div>
            <div className='col-12'>
              <p className="Skills-Intro">Hi This is <span>Hasnat Ahmad</span>. I develop exceptional websites  web apps <br></br> and mobile apps that provide intuitive, pixel-perfect user interfaces<br></br> with efficient and modern backends. I have acquired the skills<br></br> and knowledge necessary to make your project a success.</p>
              <br></br><br></br>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>HTML</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>CSS</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>JavaScript</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>Jquery</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>PHP</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>MySql</p>
                </div>
            </div>
            <div className='col-md-3 '>
                <div className='skillsbar'>
                    <div className="container">
                        <div className="circular-progress">
                            <span className="progress-value">0%</span>
                        </div>
                    </div>
                  <p>C#</p>
                </div>
                <br></br><b></b><br></br>
            </div>
            </div>
        </div>
        
        <div className='container-fluid WhatDo' id="whatIDO">
          <div className='row'>
            <div className='col-12 '>
              <p className='About-Skills' >What Do I Do <span style={{color:"red", fontWeight:"bold",fontSize:"40px"}}>.</span></p>
            </div>
          </div>
          <div className='row What'>
              <div className='col-2'></div>
              <div className='col-md-4'>
                <div className='DoCol'>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <RiAppStoreLine style={{color:"red",fontSize:"50px",marginTop:"10px"}}></RiAppStoreLine>
                  </div>
                  <h4>Flutter App Development</h4>
                  <p className='indent'>I am a skilled Flutter developer with expertise in developing mobile applications using the Flutter framework and Dart programming language. With a strong focus on delivering high-quality, efficient, and maintainable code</p>
                </div>
              </div>
                <div className='col-md-4'>
                  <div className='DoCol'>
                    <div style={{display:"flex",justifyContent:"center"}}>
                      <SiWebmoney style={{color:"red",fontSize:"50px",marginTop:"10px"}}></SiWebmoney>
                    </div>
                    <h4>Full Stack Web Development</h4>
                    <p className='indent'>I am a full-stack web developer with experience in both front-end and back-end development. With expertise in languages such as HTML, CSS, JavaScript,Php and frameworks such as React,NodeJs,ExpressJ</p>
                </div>
              </div>
              <div className='col-2'></div>
              <div className='col-2'></div>
              <div className='col-md-4'>
                <div className='DoCol'>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <SlScreenDesktop style={{color:"red",fontSize:"50px",marginTop:"10px"}}></SlScreenDesktop>
                  </div>
                  <h4>Desktop App Development</h4>
                  <p className='indent'>I am skilled in developing robust and efficient desktop applications with user-friendly interfaces.With expertise in programming languages such as Java, C# .Net Entity Framework, </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='DoCol'>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <HiOutlineFilter style={{color:"red",fontSize:"50px",marginTop:"10px"}}></HiOutlineFilter>
                  </div>
                  <h4>Web Scraping</h4>
                  <p className='indent'>I am an experienced web scraping developer with a passion for extracting data from websites efficiently and accurately. With expertise in using tools such as Python's BeautifulSoup, Scrapy, and Selenium, I am skilled in developing custom scripts to extract and parse data from various websites. </p>
                </div>
              </div>
              <div className='col-2'></div>
          </div>
        </div>

        <div className='container' id='contactMe'>
          <div className='row' >
            <div className='col-12'>
              <p className='About-Skills'>Contact Me</p>
            </div>
            <div className='col-12 Contact-Me'>
              <form>
                <div>
                  <input type="text" placeholder='Name'></input><br></br><br></br>
                  <input type="email" placeholder='Your Email'></input><br></br><br></br>
                  <input type="tel" placeholder='Your Phone'></input><br></br><br></br>
                </div>
                <br></br>
                <textarea placeholder='Yor Message...'></textarea>
                <button>Send Message</button>
              </form>
            </div> 
          </div>
          <br></br>
          <div className='row contact'>
            <div className='col-md-4'>
              <h4>Email Me</h4>
              <p>P200079@pwr.nu.edu.pk</p>
            </div>
            <div className='col-md-4'>
              <h4>Call Me</h4>
              <p>+923170050092</p>
            </div>
            <div className='col-md-4'>
              <h4>Address</h4>
              <p>Collins Street West, Louisiana, Bayerfurt, USA</p>
            </div>
          </div>
        </div>
        <div>
        <div className='container-fluid'>
          <div className='row'>
            <hr></hr>
            <br></br><br></br>
            <div className='col-12 footer'>
              <div>
                <p>Fellow Me On</p>
              </div><br></br><br></br>
              <div className='icons'>
                <a className='fb' href="https://www.facebook.com/profile.php?id=100007277538986"><BsFacebook className='socialIcons'></BsFacebook></a>
                <a className="insta" href="https://www.instagram.com/hasna_ahmad_khan/"><BsInstagram className='socialIcons'></BsInstagram></a>
                <a className="linkedin" href="https://www.linkedin.com/in/hasnat-ahmad-547950225/"><BsLinkedin className='socialIcons'></BsLinkedin></a>
                <a className='github' href="https://github.com/Hasnt-Ahmad"><BsGithub className='socialIcons'></BsGithub></a>
              </div><br></br><br></br>
              <p>Copyright ©2022 All rights reserved |</p>
              <br></br><br></br>
              <hr></hr>
            </div>
          </div>
        </div>
        </div>
    </div>

  );
}

export default App;
