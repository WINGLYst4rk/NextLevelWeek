const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "985234567", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br/><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20",
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    },
    {name: "Leticia Martins", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "985234567", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br/><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20",
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    }
]
// const express = require('express'); /* um dia vou usar esse estilo */

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

//importação de dependências
const express = require('express');//finalmente usei
const server = express();
const nunjucks = require('nunjucks');

//configuração de arquivos estáticos
server.use(express.static("public"))

//configuração do nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
    
})

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

