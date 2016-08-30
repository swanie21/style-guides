'use strict';

function hideCodeSnippet() {
  $('.code-snippet').hide();
}

  $('.show-code-button').on('click', function() {
    $('.code-snippet').show();
  });

  $('.code-snippet').on('mouseleave', function() {
    hideCodeSnippet();
  });

  hideCodeSnippet();
