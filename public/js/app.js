const sidePopular = $('#side-popular');
const content = $('#content');


window.addEventListener('load', () => {
  fetch('./api/popularWordpacksFixed').then(
    function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    response.json().then(function (data) {
      const sidepanelTemplate = Handlebars.compile($('#sidepanel-template').html());
      const html = sidepanelTemplate(data);
      sidePopular.html(html);
    });
  }).catch(
    function(err) {

    }
  );
});
const router = new Router({
  mode: 'history'
 /* page404: (path) => {
    const html = errorTemplate({
      color: 'yellow',
      title: 'Error 404 - Page NOT Found!',
      message: `The path '/${path}' does not exist on this site`,
    });
    el.html(html);
  },*/
});

router.add('/create', () => {
  fetch('./api/getLanguages').then(
    function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    response.json().then(function (data) {
      const contentTemplate = Handlebars.compile($('#create-initial-template').html());
      const html = contentTemplate(data);
      content.html(html);
    });
  }).catch(
    function(err) {

    }
  );
});

router.add('/wordpacks', () => {
  fetch('./api/wordpacks').then(
    function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    response.json().then(function (data) {
      const wordpackListTemplate = Handlebars.compile($('#wordpack-list-template').html());
      const html = wordpackListTemplate(data);
      content.html(html);
    });
  }).catch(
    function(err) {

    }
  );
});
/*
router.add('/createWP', () => {
  console.log(name);
})*/

// Navigate app to current url
router.navigateTo(window.location.pathname);

 // Highlight Active Menu on Refresh/Page Reload
const link = $(`a[href$='${window.location.pathname}']`);
link.addClass('active');

$('a').on('click', (event) => {
  // Block browser page load
  event.preventDefault();

  // Highlight Active Menu on Click
  const target = $(event.target);
  $('.item').removeClass('active');
  target.addClass('active');

  // Navigate to clicked url
  const href = target.attr('href');
  const path = href.substr(href.lastIndexOf('/'));
  router.navigateTo(path);
});