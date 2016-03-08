$(function(){

  // initialize tinymce object for posts editor
  tinymce.init({
    selector: '#comment_editor',
    width: 600,
    menubar: false,
    plugins: [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'save table contextmenu directionality emoticons template paste textcolor'
    ],
    toolbar: 'bold italic link insertfile alignleft aligncenter alignright alignjustify | bullist numlist undo redo emoticons',
  });

});