/* All related comment actions will be managed here */
$(function(){

  $("#comment-form").toggle();

  // show form when user clicks on comment
  $("h2").on('click', '#view-comment-form', function(e){
    e.preventDefault();
    toggleLink("#comment-form");
  });

});

/* Helper Methods Below */

// toggle between show and hidden
function toggleLink(selector) {
  $(selector).toggle();
}