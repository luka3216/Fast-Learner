import * as Navigo from 'navigo';
import packs from '../packs.json';
import Handlebars from './handlebars.min.js';
import * as trainer  from './train.js';

var root = null;
var useHash = false; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo.default(root, useHash, hash);


router.on('wordpacks', async() => {
  document.getElementById('content').innerHTML = Handlebars.templates.Wordpack_list(packs);
  router.updatePageLinks();
}).resolve();

router.on('wordpacks/:id/', async(params) => {
  for (var i in packs['wordpacks']) {
    if (packs['wordpacks'][i]['_id'] == params.id) {
      document.getElementById('content').innerHTML = Handlebars.templates.indi_wordpack_intro(packs['wordpacks'][i]);
      document.getElementById('start-training').addEventListener('click', async() => {
        trainer.proceedWithPack(packs['wordpacks'][i]);
      });
      break;
    }
  }
}).resolve();

router.navigate(window.location.pathname);