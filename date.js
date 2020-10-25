//jshint esversion:6

//Retorna a data completa
exports.getDate = function() {

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let today = new Date();

return today.toLocaleDateString("en-US", options);
}

//Retorna o dia
exports.getDay = function() {

let today = new Date();
let options = {weekday: "long"};

return today.toLocaleDateString("en-US", options);

}
