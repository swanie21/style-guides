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

$('#show-code-button-one').on('click', function() {
  $('#code-snippet-one').show();
});

$('#code-snippet-one').on('mouseleave', function() {
  hideCodeSnippetOne();
});

$('#show-code-button-two').on('click', function() {
  $('#code-snippet-two').show();
});

$('#code-snippet-two').on('mouseleave', function() {
  hideCodeSnippetTwo();
});

$('#show-code-button-three').on('click', function() {
  $('#code-snippet-three').show();
});

$('#code-snippet-three').on('mouseleave', function() {
  hideCodeSnippetThree();
});

$('#show-code-button-four').on('click', function() {
  $('#code-snippet-four').show();
});

$('#code-snippet-four').on('mouseleave', function() {
  hideCodeSnippetFour();
});

hideCodeSnippetOne();
hideCodeSnippetTwo();
hideCodeSnippetThree();
hideCodeSnippetFour();
