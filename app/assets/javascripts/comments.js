/* All related comment actions will be managed here */
/* appending comment see views/comments/create.js.erb */

$(function(){

  toggleLink('#comment_form');  // initially hide comment form

  // show/hide form when user clicks on comment
  $('h3').on('click', '#view_comment_form', function(e){
    e.preventDefault();
    toggleLink('#comment_form');
  });

  // edit form text when user clicks on comment
  $('h3').on('click', '#view_comment_form', function(e){
    e.preventDefault();
    linkText = $(this);
    linkText.text(toggleLinkText(linkText));  // set text depending on current text
  });

});

/* Helper Methods Below */

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
