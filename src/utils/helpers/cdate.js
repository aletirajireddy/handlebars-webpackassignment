const Handlebars = require("handlebars/runtime");

module.exports = function (time) {
  return new Handlebars.SafeString(
    new Date(time).toLocaleDateString() +
      "&nbsp;<i class='time-str'>" +
      new Date(time).toLocaleTimeString() +
      "</i>"
  );
};
