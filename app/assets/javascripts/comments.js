/* All related comment actions will be managed here */
/* appending comment see views/comments/create.js.erb */

$(function(){

  // declare variables for link, button, form ids
  var viewCommentForm = '#view_comment_form';
  var commentForm = '#comment_form';
  var newComment = '#new_comment';

  toggleLink(commentForm);  // initially hide comment form

  // show/hide form when user clicks on comment
  $('h3').on('click', viewCommentForm, function(e) {
    e.preventDefault();
    toggleLink(commentForm);
  });

  // edit form text when user clicks on comment
  $('h3').on('click', viewCommentForm, function(e) {
    e.preventDefault();
    $(viewCommentForm).text(toggleLinkText($(viewCommentForm)));  // set text depending on current text
  });

  // remove comments form when user submits
  $(commentForm).on('submit', newComment, function(e) {
    e.preventDefault();
    toggleLink(commentForm);
    $(viewCommentForm).text(toggleLinkText($(viewCommentForm)));
  });

});

/*** Helper Methods Below ***/

// toggle between show and hidden
function toggleLink(selector) {
  $(selector).toggle("medium");
}

// toggle text on link/button depending on what is currently set
function toggleLinkText(linkText) {
  text = linkText.text();
  var text = text === "Add a comment" ? "Cancel comment" : "Add a comment";
  return text;
}
