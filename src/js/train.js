import Handlebars from './handlebars.min.js';


function nextQuestion(queue, name) {
  if (queue.length == 0) {
    document.getElementById('content').innerHTML = Handlebars.templates.indi_wordpack_outro(name);
    return;
  }
  document.getElementById('content').innerHTML = Handlebars.templates.indi_wordpack_word(queue[0]);
  setTimeout(function() {
    document.getElementById('definition').style.display = 'none';
    document.getElementById('substitute-definition').style.display = 'block';
  });
  document.getElementById('word-panel').addEventListener('click',function() {
    document.getElementById('definition').style.display = 'block';
    document.getElementById('substitute-definition').style.display = 'none';
  });
  document.getElementById('answer-yes').addEventListener('click', async() => {
    queue.shift();
    nextQuestion(queue, name);
  });
  document.getElementById('answer-no').addEventListener('click', async() => {
    queue.push(queue.shift());
    nextQuestion(queue, name);
  });
}
function proceedWithPack(pack) {
  var queue = [];
  for (var i in pack['words']) {
    queue.push(pack['words'][i]);
  }
  nextQuestion(queue, pack["name"]);
}

export {proceedWithPack}