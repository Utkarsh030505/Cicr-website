import './App.css';
const scrollToAbout = () => {
  const aboutSection = document.querySelector('.about');
  const backgroundHeight = document.querySelector('.background').offsetHeight;
  const aboutTop = aboutSection.offsetTop;
  const scrollPosition = Math.min(aboutTop, backgroundHeight);

  window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
};

function App() {
  return (
    <div className="App">
     <div className="background">
    <header className="contain">
     <a className='jiitlogo' href="https://www.jiit.ac.in/"><img className="logo" src="./logo.jpg" alt="no-img"  /></a>
      <nav >
        <ul >
          <li>
            <a className="link" href="index.html" >HOME</a>
          </li>
          <li>
            <a  className="link" href="gallery.html" >GALLERY</a>
          </li>
          <li>
            <a className="link" href="project.html" >PROJECT</a>
          </li>
          <li>
            <a className="link" href="team.html" >OUR TEAM</a>
          </li>
          <li>
            <a className="link"  href="contact.html" >CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
    <div id="social_vertical-4" className="col-1 social" >
      <a href="https://www.instagram.com/robotics_iitd/"><i className="d-block d-lg-flex justify-content-lg-center p-3"> 
        
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-instagram icon" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg> 
      </i></a>
    
      <a href="https://www.linkedin.com/in/robotics-club-iit-delhi-0b27b128a/"  target="_blank"><i className="d-block d-lg-flex justify-content-lg-center p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin icon" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
        </svg>
      </i></a>
  </div>
    <div className="cicr">
      <div >
        <img src="./cicrlogo.jpg" alt=""/>
      </div>
      <h2 className='slogan'>LEARN, BUILD AND INNOVATE</h2>
    </div>
    <div className="scroll-down" onClick={scrollToAbout}></div>
    
    
  </div>
  <div className="about" >
    <div className="container col-lg-9 ">
    <h1>About Us</h1>

    <p >
      Welcome to CICR, the hub of technology, innovation, and creative problem-solving! We are a vibrant community of forward-thinkers, united by a shared passion for pushing the limits of what’s possible in robotics and technology. At CICR, we believe that every challenge is an opportunity to innovate, and we encourage our members to think outside the box and explore bold ideas. Whether you're an aspiring engineer eager to build the next groundbreaking robot, a coding enthusiast fascinated by the intricacies of AI and machine learning, or simply someone who’s curious about the future of robotics, we have a place for you.
     </p>
     <p>
     Our society is designed to foster collaboration, inspire creativity, and drive technological advancements. With a wide range of projects across fields like robot vision, multi-robot systems, and path planning, CICR offers endless opportunities for learning and growth. You'll work alongside like-minded individuals, gaining hands-on experience while tackling real-world problems. Join us at CICR, where passion meets innovation, and together, we can shape the future of robotics.
    </p>
  </div>
</div>
<footer>
  <div className="footercol">
      <h3>CICR</h3><br/>
      <p>The Creativity and Innovation Cell in Robotics at JIIT is a hub for cutting-edge research within the Robotics Department. Our lab specializes in a diverse array of robotics projects, spanning areas such as robot vision, multi-robot coordination, and advanced path planning. We are dedicated to pushing the boundaries of robotics through innovative solutions and collaborative efforts.</p>
  </div>
  <div className="footercol2">
    <h3>USEFUL LINKS</h3><br/>
      <li><a href="index.html">Home</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="project.html">Project</a></li>
      <li><a href="contact.html">Contact</a></li>
  </div>
  <div className="footercol3">
      <h3>CONTACT</h3><br/>
      <div>
          <i className="fa-sharp fa-solid fa-phone"></i>
          <p><span><a href="#">+91 022-2159 6847</a></span></p>
      </div>
      <div>
          <i className="fa-sharp fa-solid fa-envelope"></i>
          <p><span><a href="#">cicrjiit128noida@gmail.com</a></span></p>
      </div>
      <div>
          <i className="fa-sharp fa-solid fa-clock"></i>
          <p><span>9.30AM - 5.30PM</span></p>
      </div>
  </div>

</footer>
<div className="text-center p-3 copyright" >
  © 2024 Copyright CICR, JIIT. All Rights Reserved
</div>
    </div>
  );
}

export default App;
