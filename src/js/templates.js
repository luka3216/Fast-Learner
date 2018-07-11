import Handlebars from './handlebars.min.js';
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Wordpack_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr>\n        <td>\n          <a data-navigo href=\"/wordpacks/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n        </td>\n        <td>"
    + alias4(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.hits || (depth0 != null ? depth0.hits : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hits","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"background-light-dark bordered rounded pack-list\">\n  <table class=\"background-light bordered\">\n    <thead>\n      <tr class=\"capitalize\">\n        <th>Name</th>\n        <th>language</th>\n        <th>word count</th>\n        <th>Hits</th> \n        <th>Date</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.wordpacks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>";
},"useData":true});
templates['indi_wordpack_intro'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"background-light-dark bordered rounded panel\">\n  <div class=\"intro-item\"><h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " in "
    + alias4(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data}) : helper)))
    + "</h2></div>\n  <div class=\"intro-item\"><h1>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h1></div>\n  <div class=\"intro-item\"><span>There are "
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + " words in this pack.</span></div>\n  <div class=\"intro-item\"><button class=\"rounded background-light-dark bordered\" id=\"start-training\" type=\"button\">Start</button></div>\n</div>";
},"useData":true});
templates['indi_wordpack_outro'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"background-light-dark bordered rounded panel\">\n  <div class=\"intro-item\"><h2>You are done learning "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</h2></div>\n  <div class=\"intro-item\"><a href=\"/wordpacks\" data-navigo class=\"rounded background-light-dark bordered\" id=\"start-training\">Go back to Wordpacks</a></div>\n</div>";
},"useData":true});
templates['indi_wordpack_word'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id='word-panel' class=\"background-light-dark bordered rounded panel\">\n  <div class=\"intro-item\">\n    <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  </div>\n  <div id='substitute-definition' class='intro-item'>\n    <span>Click to show definition</span>\n  </div>\n  <div id='definition' class=\"intro-item\">\n    <span>"
    + alias4(((helper = (helper = helpers.definition || (depth0 != null ? depth0.definition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"definition","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n  <div class=\"intro-item\">\n    <span>Remembered it quickly and correctly?</span>\n  </div>\n  <div id='buttons'>\n    <button class=\"rounded-left background-green bordered-left bordered-top bordered-bottom\" id=\"answer-yes\" type=\"button\">Yes</button>\n    <button class=\"rounded-right background-red bordered-right bordered-top bordered-bottom\" id=\"answer-no\" type=\"button\">Nope</button>\n  </div>\n</div>\n</div>";
},"useData":true});
})();