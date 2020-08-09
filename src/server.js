//importação de dependências
// const express = require('express'); /* um dia vou usar esse estilo */
const express = require('express');//finalmente usei
const server = express();
const nunjucks = require('nunjucks');
const { pageStudy, pageLanding, pageGiveClasses } = require('./pages');
const DataBase = require('./database/db')


//configuração do nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true,

})


//configuração de arquivos estáticos
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

