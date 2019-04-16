$('#validation').click(function() {
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var mail = $('#mail').val();
  var phoneNumber = $('#phoneNumber').val();
  var regexName = /^[a-zA-Záàâäãåçéèêëíìîï]+[\-]?[a-zA-Záàâäãåçéèêëíìîï]$/;
  var regexMail = /^[\w.-_\-]+[@]{1}[a-z]+[\.]{1}[a-z]{2,6}$/;
  var regexPhoneNumber = /^[0]{1}[0-9]{9}$/;

  if (regexName.test(lastName) === false) {
    alert('Veuillez rentrer un nom correcte.');
  }
  if (regexName.test(firstName) === false) {
    alert('Veuillez rentrer un prénom correcte.');
  }
  if (regexMail.test(mail) === false) {
    alert('Veuillez rentrer une adresse mail correcte.');
  }
  if (regexPhoneNumber.test(phoneNumber) === false) {
    alert('Veuillez rentrer un numéro de téléphone correcte.');
  } else {
    alert('Bienvenue parmis nous!');
  }
});
