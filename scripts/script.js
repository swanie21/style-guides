'use strict';

function hideCodeSnippetOne() {
  $('#code-snippet-one').hide();
}

function hideCodeSnippetTwo() {
  $('#code-snippet-two').hide();
}

function hideCodeSnippetThree() {
  $('#code-snippet-three').hide();
}

function hideCodeSnippetFour() {
  $('#code-snippet-four').hide();
}

$('#show-code-button-one').click(function() {
  $(this).text(function(i, text) { return text === 'Show code' ? 'Hide code' : 'Show code'; });
  $('#code-snippet-one').toggle();
});

$('#show-code-button-two').on('click', function() {
  $(this).text(function(i, text) { return text === 'Show code' ? 'Hide code' : 'Show code'; });
  $('#code-snippet-two').toggle();
});


$('#show-code-button-three').on('click', function() {
  $(this).text(function(i, text) { return text === 'Show code' ? 'Hide code' : 'Show code'; });
  $('#code-snippet-three').toggle();
});


$('#show-code-button-four').on('click', function() {
  $(this).text(function(i, text) { return text === 'Show code' ? 'Hide code' : 'Show code'; });
  $('#code-snippet-four').toggle();
});

hideCodeSnippetOne();
hideCodeSnippetTwo();
hideCodeSnippetThree();
hideCodeSnippetFour();
