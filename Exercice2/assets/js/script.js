$('#button').click(function () {
var firstNote = $('#firstNote').val();
var secondNote = $('#secondNote').val();
var thirdNote = $('#thirdNote').val();
var fourthNote = $('#fourthNote').val();
var fifthNote = $('#fifthNote').val();

var average = (Number(firstNote) + Number(secondNote) + Number(thirdNote) + Number(fourthNote) + Number(fifthNote)) / 5;

if (average >= 0 && average < 10) {
  alert('Moyenne: ' + average + '\nAppréciation: En dessous de la moyenne.');
} else if (average >= 10 && average < 13) {
  alert('Moyenne: ' + average + '\nAppréciation: Moyen.');
} else if (average >= 13 && average < 16) {
  alert('Moyenne: ' + average + '\nAppréciation: Bien');
} else if (average >= 16 && average < 20) {
  alert('Moyenne: ' + average + '\nApprécation: Très bien.');
} else {
  alert('Moyenne: ' + average + '\nAppréciation: Excellent!');
}
});
