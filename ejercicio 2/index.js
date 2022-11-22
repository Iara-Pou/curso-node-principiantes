const fs = require("fs");

//para crear un archivo nuevo
fs.writeFile("./prueba.txt", "Hola mundo!", function (error) {
    if (error) { console.log(error) 
    } else { console.log("Se creó el archivo correctamente.") 
}
});

fs.readFile("./prueba.txt", function(error, contenido){
    if(error){
        console.log(error);
    } else {
        console.log(`El archivo dice ${contenido}`);
    }
})
