const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const tables = require('./infrastructure/tables')

connection.connect(erro => {
	if(erro){
		console.log(erro)
	}else{
		console.log('conectado com sucesso!')
		
		tables.init(connection)
		const app = customExpress()
		app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
	}
})