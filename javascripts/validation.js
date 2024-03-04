window.onload = function() {
    const forms = document.forms;
    forms[0].name.value = "por favor, escriba su nombre";
  };

  function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function(){
      const name = forms[0].name.value;
      if (!(confirm(`${name}Sr. ¿Está seguro de que quiere enviarlo?`))) {
        alert("Cancelado.");
        return false;
      }
    };
  };
  
  window.onload = confirmSubmit;
  

  function validateEmail() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm_email").value;
    const errorElement = document.getElementById("email_error");
    const formElement = document.getElementById("email_form");
  
    if (email !== confirmEmail) {
      errorElement.textContent = "Email does not match";
      errorElement.style.color = "#d14539";
      formElement.style.backgroundColor = "rgba(230, 169, 171, 0.5)";
    } else {
      errorElement.textContent = "";
      formElement.style.backgroundColor = "";
    }
  }
  
  
  window.onload = emailValidation;
  
  