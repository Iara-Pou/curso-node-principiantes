const express = require("express");
const server = express();

server.listen(3000, function(){
    console.log("El server está funcionando correctamente en el puerto 3000.")
})
server.get("/", function(req, res){
    res.send("<h1>Hola mundo desde express con Nodejs</h1>")
})
