//arquivo raiz
const express = require('express'); //importa o express
const app = express(); //atribuiu o express para a função app
const User = require('./models/User');

app.use(express.json());

//criando rotas:

//rota raiz, depois cria função assync para aguardar o processamento
app.get("/", async (req, res) => { 
    res.send("Home Page - P4S");
});

//rota para a página cadastrar
//para conectar com o front: app.post
app.post("/cadastrar", async (req, res) => {
    console.log(req.body); 
    
    await User.create(req.body);//criar novo usuário
    then(()=>{
        return res.json({
            erro: false, 
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(()=>{
        return res.status(400).json({
            erro: true, 
            mensagem: "Erro: Usuário não foi cadastrado com sucesso."
        });
    });

   // res.send("Cadastrar - P4S");
});

//iniciando servidor
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})