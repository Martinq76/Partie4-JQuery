var games = 0;
var gamesWin = 0;
var gamesLoose = 0;

$('#shifumi').click(function() {
      var choiceBot = Math.floor(Math.random()*3)+1;
      var myChoice = $('select').val();
      if (choiceBot == myChoice) {
        alert('Égalité');
      } else if ((choiceBot == 3 && myChoice == 2)||
      (choiceBot == 2 && myChoice == 1)||(choiceBot == 1 && myChoice == 3)){
        games++;
        gamesLoose++;
        alert('Perdu');
      } else {
        games++;
        gamesWin++;
        alert('Gagné');
      }

      percentWin = gamesWin*100/games;
      alert('Victoires: ' + gamesWin + '\nDéfaites: ' + gamesLoose + '\nPourcentages de Victoires: ' + percentWin + '%');
    });
