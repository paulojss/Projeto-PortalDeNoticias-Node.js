var app = require('./config/server');

var routeFormularioNoticias = require("./app/routes/formulario_inclusao_noticia")(app);
var routeNoticias = require("./app/routes/noticias")(app);
var routeHome = require("./app/routes/home")(app);

app.listen(3000, function() {
	
	console.log("servidor pronto.");

});