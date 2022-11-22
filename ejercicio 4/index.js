const http = require("http");
const colors = require("colors")

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("<h1 style='color: pink;'>Hola</h1>")
    res.end();
    };

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log("servidor levantado en puerto 3000".rainbow)
});    

server.close();
