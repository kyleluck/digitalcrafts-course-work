function win() {
  if (youWin) {
    $('input[type=text]').val('You win!');
    $('input[type=radio]:first-of-type').prop('checked', true);
    $('textarea').val('Congratulations, you win');
    $('input[type=checkbox]').prop('checked', true);
  }
} //was missing function closing }

var youWin = false;
$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    youWin = true;
    win();
  });
});
