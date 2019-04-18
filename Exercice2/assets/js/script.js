$('#button').click(function() {
  var firstNote = $('#firstNote').val();
  var secondNote = $('#secondNote').val();
  var thirdNote = $('#thirdNote').val();
  var fourthNote = $('#fourthNote').val();
  var fifthNote = $('#fifthNote').val();

  var average = (Number(firstNote) + Number(secondNote) + Number(thirdNote) + Number(fourthNote) + Number(fifthNote)) / 5;

  if (average >= 0 && average < 10) {
    Swal.fire('Moyenne: ' + average + '\nAppréciation: En dessous de la moyenne.');
  } else if (average >= 10 && average < 13) {
    Swal.fire('Moyenne: ' + average + '\nAppréciation: Moyen.');
  } else if (average >= 13 && average < 16) {
    Swal.fire('Moyenne: ' + average + '\nAppréciation: Bien');
  } else if (average >= 16 && average < 20) {
    Swal.fire('Moyenne: ' + average + '\nApprécation: Très bien.');
  } else {
    Swal.fire('Moyenne: ' + average + '\nAppréciation: Excellent!');
  }
  if (average < 0 || average > 20) {
    Swal.fire('Veuillez saisir des nombres valables!');
  }
});
