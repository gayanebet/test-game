var testq = [ //q - вопрос, a - ответ и сколько за него баллов
  {q: "Как дела?", a:{"Что?":1,"Где?":2,"Кто здесь?":3}},
  {q: "Матумба?", a:{"Трулял":1,"Я хорош":2,"ВАся?":3}}
]

window.nq = 0;
window.points = 0;

window.draw = function(n){
 $('#q').html('<p>'+testq[n]['q']+'</p>');
 var next ='';
 if(n==testq.length-1) next = 'result()'; else next = 'draw('+(n+1)+');'
 for(var i in testq[n]['a']) $('#q').append(
   '<button onClick="points+='+testq[n]['a'][i]+';'+next+'">'+i+'</button>'
 );
}

window.result = function(){
  if(points==6) $('#q').html('<p>Вы гений</p>');
  else if(points>=5) $('#q').html('<p>Вы умный</p>');
  else if(points>=3) $('#q').html('<p>Вы нормальный</p>');
  else $('#q').html('<p>Вы идиот</p>');
  $('#q').append('<button onClick="points=0;draw(0);">Заново</button>');
}

draw(0);
