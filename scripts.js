$(function(){
  $('#menuCidades').text( $('#cidades a:first-of-type')[0].text);

  $('#cidades .dropdown-item').click(function(){
    $('#menuCidades').text(this.text);
  });
});
