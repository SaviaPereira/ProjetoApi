// config inicial do express
const express = require('express')
const mongoose = require ('mongoose')
const app = express()

const Person = require('./models/Person')

// forma de ler JSON / middlewares são recursos que são executados entre as nossas requisições e respostas 
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes');



app.use('/person', personRoutes)


// rota inicial / endpoint para acessar no postman
app.get('/', (req, res) =>{

// mostrar requisição

res.json({message: 'Deu certo rsrs!' })
})

// entregar uma porta para o express conseguir saber onde na verdade ele vai disponibilizar esta aplicação para podermos acessar ela, sendo do navagador ou do próprio postaman para termos acesso a este código. Executar e termos uma resposta. 
const DB_USER = 'saviapereiracoelho';
const DB_PASSWORD = '69wosKtyFjDroTpv';
const DB_NAME = 'APIREST';

const encodedPassword = encodeURIComponent(DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${encodedPassword}@cluster0.usnksug.mongodb.net/${DB_NAME}`)
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(3001);
  })
  .catch((err) => console.log(err));
