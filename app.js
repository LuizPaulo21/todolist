//jshint esversion:6

//Incluindo dependencias
const express = require("express");
const bodyParser = require("body-parser");

//Iniciando Servidor
const app = express();

//Definindo variável para não causar erro de escopo
let items = [];
let workItems = [];

//Iniciando Templates ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

//Resposta padrão root
app.get("/", function(req, res) {

  //Armazena o dia da semana (numero de 0 a 6- Sabado)
  let today = new Date(); //.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    listTitle: day,
    items: items
  });

});


//Lista de Trabalho
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work", items: workItems});
});

//Página de contato.
app.get("/about", function(req, res){
  res.render("about")
});

app.post("/", function(req, res) {
  let item = req.body.item;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }
});

//Determina que o servidor rode na porta 3000 e loga o resultado.
app.listen(3000, function() {
  console.log("Servidor rodando na porta 3000!");
});
