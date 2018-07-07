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