/* All related comment actions will be managed here */
$(function(){

  toggleLink('#comment-form');  // initially hide comment form

  // show/hide form when user clicks on comment
  $('h3').on('click', '#view-comment-form', function(e){
    e.preventDefault();
    toggleLink('#comment-form');
  });

  // edit form text when user clicks on comment
  $('h3').on('click', '#view-comment-form', function(e){
    e.preventDefault();
    linkText = $(this);
    linkText.text(toggleLinkText(linkText));  // set text depending on current text
  });


});

/* Helper Methods Below */

// toggle between show and hidden
function toggleLink(selector) {
  $(selector).toggle();
}

// toggle text on link/button
function toggleLinkText(linkText) {
  text = linkText.text();
  var text = text === "Add a comment" ? "Cancel comment" : "Add a comment";
  return text;
}