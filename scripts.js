$(function(){
  $('#menuCidades').text( $('#cidades a:first-of-type')[0].text);

  $('#cidades .dropdown-item').click(function(){
    $('#menuCidades').text(this.text);
    changeCity(this);
  });

  var changeCity = function(node){
    console.log($(node).attr('id'));
  }

  var data =
    {
      'sal':
      {
        'qua': {'max': 25, 'min': 10},
        'qua': {'max': 25, 'min': 10},
        'qui': {'max': 30, 'min': 25},
        'qui': {'max': 30, 'min': 25},
      },
      'sp':
      {
        'qua': {'max': 25, 'min': 10},
        'qua': {'max': 25, 'min': 10},
        'qui': {'max': 30, 'min': 25},
        'qui': {'max': 30, 'min': 25},
      },
      'rio':
      {
        'qua': {'max': 25, 'min': 10},
        'qua': {'max': 25, 'min': 10},
        'qui': {'max': 30, 'min': 25},
        'qui': {'max': 30, 'min': 25},
      },
    };

});
