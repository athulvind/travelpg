import myStyle from './css/nav.module.css'
import myStyle2 from './css/home.module.css'
import myStyle3 from './css/service.module.css'
import myStyle5 from "./css/package.module.css"
import myStyle6 from "./css/review.module.css"
import myStyle7 from "./css/contact.module.css"
import { TextField, Button } from '@mui/material';
import myStyle8 from "./css/copyright.module.css"

import './css/App.css'



function App() {

  return (
    <>
   <div className='container-fluid bg-dark'>
        <div >
          <nav style={{zIndex:1}} className="navbar navbar-expand-lg bg-warning ">
            <div className="container">
  
              <div className='d-flex align-items-center '>
                <div>
                  <a href=""><img className={myStyle.navimg1} src="./images/logo.jpg" alt="" /></a>
                </div>
                <div>
                  <p className={myStyle.p}><a className={myStyle.navkar} href="">TRAVEL <br /><span className={myStyle.navrepair}>Adventure is worthwhile</span></a></p>
                </div>
              </div>
  
              <button className="navbar-toggler border-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link fw-bold active text-dark" aria-current="page" href="#homee">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-dark fw-bold nav-link active" aria-current="page" href="#servicess">Destinations</a>
                  </li>
               
                  <li className="nav-item">
                    <a className="text-dark fw-bold nav-link active" aria-current="page" href="#packagess">Packages</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-dark fw-bold nav-link active" aria-current="page" href="#reviewss">Review</a>
                  </li>
                  <li className="nav-item">
                    <a className="text-dark fw-bold  nav-link active" aria-current="page" href="#contactt">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div id='homee' className={myStyle2.homediv1} 
          >
           
            <h1 className={myStyle2.homefh2}>
            Live with no excuses <br />
             Travel with no regrets
            </h1>
           <h1 className={myStyle2.homefh3}>
               travelconcern@gmail.com
            </h1>
            <button className={myStyle2.homebtn}>
              Contact Us
            </button>
          </div>
        </div>
        <div id='servicess'>
          <div>
            <h1 className='text-center fs-1 text-light fw-bold mt-5'>
              Dream Destination
            </h1>
            
          </div>
  
  
          <div className={myStyle3.servdivflex}>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm1.webp" alt="" /></a>
              
            </div>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm2.webp" alt="" /></a>
            
            </div>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm3.jpg" alt="" /></a>
              
            </div>
          </div>
          <div className={myStyle3.servdivflex}>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm4.jpg" alt="" /></a>
             
            </div>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm5.webp" alt="" /></a>
             
            </div>
            <div>
              <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./images/drm6.webp" alt="" />
              </a>
              
            </div>
          </div>
        </div>
        <div id='packagess' className={myStyle5.packtopdiv}>
          <h1 className='text-center text-dark fw-bold fs-1'>Our Packages</h1>
          <p className='fs-4 text-center text-danger'>We help us to choose Better</p>
          <div className={myStyle5.packmdiv}>
            <div className={myStyle5.packfdiv}>
              <div>
                <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/p1.jpeg" alt="" /></a>
                <h1 className='text-danger mt-5 fs-3'>
                  Mali Special Package
                </h1>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis autem, sapiente et enim recusandae velit eius maxime qui, atque labore deserunt temporibus corrupti doloremque tempora, quod non officia quibusdam expedita?</p>
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹ 45000</button>
              </div>
            </div>
            <div className={myStyle5.packfdiv}>
              <div>
              <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/p2.jpeg" alt="" /></a>
  
                <h1 className='text-danger mt-5 fs-3'>
                  HoneyMoon Packages
                </h1>
               <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quidem harum! Fugit quasi quia aperiam eius saepe recusandae, totam necessitatibus? Commodi iusto consectetur unde deserunt sunt est incidunt officia quisquam!</p>
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹ 25000</button>
              </div>
            </div>
            <div className={myStyle5.packfdiv}>
              <div>
              <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/sp.jpeg" alt="" /></a>
                <h1 className='text-danger mt-5 fs-3'>
                  Summer Packages
                </h1>
                <p className='text-seconadry'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam optio sequi dolorum voluptate recusandae tenetur voluptatum tempora quos nostrum, unde rerum cumque magnam quisquam odit nemo debitis facilis at?</p>
  
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹15000</button>
              </div>
            </div>
            <div className={myStyle5.packfdiv}>
              <div>
              <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/inp.jpg" alt="" /></a>
  
                <h1 className='text-danger mt-5 fs-3'>
                 Indian Culture
                </h1>
              <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, temporibus adipisci eveniet necessitatibus facere minima fuga veritatis! Recusandae, sequi enim tempore reprehenderit nihil architecto et neque iusto eligendi quam ab.</p>
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹5000</button>
              </div>
            </div>
            <div className={myStyle5.packfdiv}>
              <div>
              <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/kp.jpg" alt="" /></a>
  
                <h1 className='text-danger mt-5 fs-3'>
                  Kerala Packages
                </h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore minima harum culpa ea, architecto officiis, deserunt veniam, dicta alias unde! Nesciunt ad, autem facere quos deleniti ipsam delectus rerum?
                </p>
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹1000</button>
              </div>
            </div>
            <div className={myStyle5.packfdiv}>
              <div>
              <a className={myStyle5.packmdiv} href=""><img className={myStyle5.packimgg} src="./images/gp.jpeg" alt="" /></a>
  
                <h1 className='text-danger mt-5 fs-3'>
                  GOA Packages
                </h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum velit fuga, minima eum sunt explicabo beatae amet blanditiis provident animi mollitia ad quos consectetur, voluptates fugit dolores ea deleniti voluptatibus.</p>
              </div>
              <div>
                <button className={myStyle5.packpacbtn}>₹3000</button>
              </div>
            </div>
          </div>
        </div>
        <div id='reviewss' className={myStyle6.revmaindiv}>
          <h1 className='text-center fs-1 fw-bold text-light'>Feedback</h1>
          <h5 className='text-center text-danger fs-3 pt-2 pb-5'>People Love Us</h5>
  
          {/* profile */}
          <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
            <div className='text-center w-25 me-5'>
            <h1 className='fs-1 fw-bold pt-2 text-light'>Imaan Butt</h1>
              <h5 className='text-warning pt-1'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </h5>
              <h1 className='text-danger text-start pt-4'>
                <i className="fa-solid fa-quote-left"></i>
              </h1>
              <p className='text-center text-secondary fs-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
              </p>
              <h1 className='text-danger text-end pt-4'>
                <i className="fa-solid fa-quote-right"></i>
              </h1>
            </div>
  
  
            <div className='text-center w-25 me-5'>
              <h1 className='fs-1 fw-bold pt-2 text-light'>William Hoyy</h1>
              <h5 className='text-warning pt-1'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </h5>
              <h1 className='text-danger text-start pt-4'>
                <i className="fa-solid fa-quote-left"></i>
              </h1>
              <p className='text-center text-secondary fs-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
              </p>
              <h1 className='text-danger text-end pt-4'>
                <i className="fa-solid fa-quote-right"></i>
              </h1>
            </div>
  
  
            <div className='text-center w-25 me-5'>
              <h1 className='fs-1 fw-bold pt-2 text-light'>Sanam Doe</h1>
              <h5 className='text-warning pt-1'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </h5>
              <h1 className='text-danger text-start pt-4'>
                <i className="fa-solid fa-quote-left"></i>
              </h1>
              <p className='text-center text-secondary fs-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
              </p>
              <h1 className='text-danger text-end pt-4'>
                <i className="fa-solid fa-quote-right"></i>
              </h1>
            </div>
          </div>
        </div>
        <div id='contactt' className={myStyle7.contactmaindiv}>
          <h1 className='text-center fs-1 fw-bold text-dark'>CONTACT US</h1>
          <h5 className='text-center text-danger fs-3 pt-2 pb-5'>Get In Touch With Us 24/7</h5>
  
          <div className='container text-center pt-4'>
            <TextField style={{ width: "40%" }} className='m-5' id="outlined-basic" label="Name" variant="outlined" />
            <TextField style={{ width: "40%" }} className='m-5' id="outlined-basic" label="Email" variant="outlined" />
            <TextField style={{ width: "85%" }} className='ms-5 me-5' id="outlined-basic" label="Subject" variant="outlined" />
            <TextField style={{ width: "85%" }} className='m-5' multiline rows={4} id="outlined-multiline" label="Write Your Message" variant="outlined" />
            <Button style={{ width: "25%", height: "70px" }} className='bg-secondary text-light fw-bold' variant="contained">SEND MESSAGE</Button>
          </div>
        </div>
        <div className='pt-2 bg-warning d-flex justify-content-evenly align-items-center'>
          <div className='text-dark'>
            <p>Travel © 2024 -created by Athul</p>
          </div>
          <div>
            <ul>
  
              <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Terms & Conditions</a></li>
              <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Privacy Policy</a></li>
              <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Contact</a></li>
  
            </ul>
          </div>
        </div>
   </div>
    </>
  )
}

export default App