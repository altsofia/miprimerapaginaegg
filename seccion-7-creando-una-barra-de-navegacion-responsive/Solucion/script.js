.container - nav {
    display: flex;
    padding: 10px;
    height: 50px;
    background-color: #a2d2ff;
}
  
   .navbar {
    display: flex;
    justify - content: space - between;
    width= 100%;
}
  
  
  .brand {
    display= flex;
    align-items= center;
}


li > a {
    padding= 8px 24px;
}
  
  
  li {
    list-style-type= none;
}
  
  
  a {
    color: #000814;
    text-decoration: none;
}
  
  
  .nav - links {
    display: flex;
    align-items: center;
}
  
  
  .button-menu-toggle {
    display: none;
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})