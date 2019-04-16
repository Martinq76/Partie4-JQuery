$('#button').click(function() {
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var dateOfBirth = $('#dateOfBirth').val();
  var placeOfBirth = $('#placeOfBirth').val();
  var employment = $('#employment').val();
  var society = $('#society').val();

  alert(firstName + ' ' + lastName + ', né le ' + dateOfBirth + ' à ' + placeOfBirth + ', actuellement ' + employment + ' à ' + society + '.');
});
