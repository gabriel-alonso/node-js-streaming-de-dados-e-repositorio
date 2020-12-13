const fs = require("fs")

fs.createReadStream("../assets/salsicha.png")
	.pipe(fs.createWriteStream('../assets/salsicha-stream.png'))
	.on('finish', () => console.log("Imagem foi escrita com sucesso!"))