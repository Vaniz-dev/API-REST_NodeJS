const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./data/conexao");
const tabelas = require("./data/tabela");

router(app,express);
tabelas.init(conexao);


// VERIFICAÇÃO DE RODOU
app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
        return
    }else{
        console.log("Deu Certo!");
    }
});

