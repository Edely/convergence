$(function(){
  // Numa aplicação real os dados seriam buscados dinamicamente.
  data =
    {
      'sal':
      {
        'ter': {'max': 25, 'min': 17},
        'qua': {'max': 26, 'min': 10},
        'qui': {'max': 27, 'min': 15},
        'sex': {'max': 28, 'min': 16},
      },
      'sp':
      {
        'ter': {'max': 27, 'min': 10},
        'qua': {'max': 28, 'min': 25},
        'qui': {'max': 29, 'min': 10},
        'sex': {'max': 30, 'min': 25},
      },
      'rio':
      {
        'ter': {'max': 22, 'min': 9},
        'qua': {'max': 29, 'min': 18},
        'qui': {'max': 33, 'min': 17},
        'sex': {'max': 34, 'min': 20},
      },
    };

    var changeCity = function(node){
      $('#menuCidades span.cidade').text(node.text);
      var dias = $('.dia');
      var days_n = {0:'ter', 1: 'qua', 2:'qui', 3:'sex'};
      var weather_options = ['sunny', 'rainny', 'cloudly-sun', 'cloudly'];

      for(var i = 0; i < dias.length ; i++){
          // The weather icons are being choosed randomly
          var weather = 'icon ' + weather_options[Math.floor(Math.random() * 4)];
          var max = $(dias[i]).find('span.max')[0];
          var min = $(dias[i]).find('span.min')[0];
          $(max).text(data[$(node).attr('id')][days_n[i]]['max']);
          $(min).text(data[$(node).attr('id')][days_n[i]]['min']);
          var clima = $(dias[i]).find('.icon')[0];
          $(clima).attr('class', weather);
      }
  }

  changeCity($('#cidades a:first-of-type')[0]);
  $('#cidades .dropdown-item').click(function(){
    changeCity(this);
  });

});
