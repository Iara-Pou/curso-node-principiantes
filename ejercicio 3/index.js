const fs = require("fs");

//para crear un archivo nuevo
fs.writeFile("./prueba.txt", "hola soy una prueba", function (error) {
    if (error) { console.log(error) 
    } else { console.log("está todo bien") 
}
});

fs.readFile("./prueba.txt", function(error, contenido){
    if(error){
        console.log("hubo un problema", error);
    } else {
        console.log(`el archivo dice ${contenido}`);
    }
})
