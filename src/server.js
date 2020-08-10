//importação de dependências
// const express = require('express'); /* um dia vou usar esse estilo */
const express = require('express');//finalmente usei
const server = express();
const nunjucks = require('nunjucks');
const { pageStudy, pageLanding, pageGiveClasses, saveClasses } = require('./pages');
const DataBase = require('./database/db')


//configuração do nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true,

})


//configuração de arquivos estáticos
server.use(express.static("public"))
//recebimento de dados pelo body
.use(express.urlencoded({ extended: true }))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

