function showalert () {
  alert ("¡Hola! Esta es una alerta de Javascript")
}

const form = document.getElementById('myForm');

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
})

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})

container.nav {
  display: flex;
  padding: 10px;
  height: 50px;
  background - color: #a2d2ff;
}
  
  navbar {
  display: flex;
  justify - content: space - between;
  width = 100 %;
}
  
  
  brand {
  display = flex;
  align - items= center;
}


li > a {
  padding = 8px 24px;
}
  
  
  li {
  list - style - type= none;
}
  
  
  a {
  color: #000814;
  text - decoration: none;
}
  
  
  .nav - links {
  display: flex;
  align - items: center;
}
  
  
  .button - menu - toggle {
  display: none;
}
