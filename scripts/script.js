'use strict';

function showCodeSnippet() {
  $('#code-snippet').hide();
}

  $('#show-code-button').on('click', function() {
    $('#code-snippet').show();
  });

  showCodeSnippet();
