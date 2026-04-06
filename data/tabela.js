class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos(){
        const sql = 
        `create table if not exists atendimentos(
	        id int not null auto_increment primary key,
            data date,
            servico varchar(100),
            cliente varchar(100),
            status enum("ativo","cancelado","realizado") default "ativo"
        );`;
        this.conexao.query(sql, (error) =>{
            if (error){
                console.log("deu erro na hora de criar a table atendimentos");
                console.log(error.message);
                return;
            }else{
                console.log("Criou a table com sucesso");
            }
        })
    }
}

module.exports = new Tabelas();