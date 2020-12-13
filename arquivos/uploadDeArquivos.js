const fs = require("fs")

fs.readFile("../assets/salsicha.png", (erro, buffer)=>{
	console.log("imagem foi bufferizada!")
	console.log(buffer)
})