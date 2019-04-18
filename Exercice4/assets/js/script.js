$('#button').click(function() {
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var dateOfBirth = $('#dateOfBirth').val();
  var placeOfBirth = $('#placeOfBirth').val();
  var employment = $('#employment').val();
  var society = $('#society').val();

  var regexName = /^[a-zA-Záàâäãåçéèêëíìîï]+[\-]?[a-zA-Záàâäãåçéèêëíìîï]$/;

  if (regexName.test(lastName) === false) {
    Swal.fire('Pas compris désolé');
  } else if (regexName.test(firstName) === false) {
    Swal.fire('Pas compris désolé');
  } else {
    Swal.fire(firstName + ' ' + lastName + ', né le ' + dateOfBirth + ' à ' + placeOfBirth + ', actuellement ' + employment + ' à ' + society + '.');
  }
});
