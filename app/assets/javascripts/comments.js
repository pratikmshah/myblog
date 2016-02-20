/* All related comment actions will be managed here */
/* appending comment see views/comments/create.js.erb */

$(function(){

  // declare variables for link, button, form ids
  var viewCommentForm = '#view_comment_form';
  var commentForm = '#comment_form';
  var newComment = '#new_comment';
  var selector = 'h4';

  toggleLink(commentForm);  // initially hide comment form

  // show/hide form when user clicks on comment
  $(selector).on('click', viewCommentForm, function(e) {
    e.preventDefault();
    toggleLink(commentForm);
  });

  // edit form text when user clicks on comment
  $(selector).on('click', viewCommentForm, function(e) {
    e.preventDefault();
    changeFormText(viewCommentForm); // set text depending on current text
  });

  // remove comments form when user submits
  $(commentForm).on('submit', newComment, function(e) {
    e.preventDefault();
    clearFormText();                                      // clear form contents
    toggleLink(commentForm);                              // remove form from view
    changeFormText(viewCommentForm);                      // toggle link/button text
  });

  // disable button if no name or contents are input
  if ($('textarea').val() != null) {
    $('#submit_comment').attr('disabled', true);
  }
  else {
    $('#submit_comment').attr('disabled', false);
  }
});

/*** Helper Methods Below ***/

// toggle between show and hidden
function toggleLink(selector) {
  $(selector).toggle("medium");
}

// toggle text on link/button depending on what is currently set
function toggleLinkText(linkText) {
  text = linkText.text();
  var text = text === "+Comment" ? "-Cancel" : "+Comment";
  return text;
}

// change text on comment form link/button
function changeFormText(form) {
  $(form).text(toggleLinkText($(form)));
}

// clear tiny mce form text after user submits
function clearFormText() {
  tinyMCE.activeEditor.setContent('');
}