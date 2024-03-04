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
  

  function emailValidation() {
    const form = document.getElementById('form');
    const emailConfirm = document.getElementById('email_confirm');
    const emailErrorMessage = document.getElementById('email_error_message');
    const emailErrorRow = document.getElementById('email_error');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        emailErrorRow.style.display = 'table-row';
        emailErrorMessage.textContent = "Eメールが一致しません";
        emailConfirm.style.backgroundColor = 'rgba(230,169,171,.5)';
      } else {
        form.submit();
      }
    });
  };
  
  window.onload = emailValidation;
  
  