import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import patch from 'path';
import mainRouter from './routes'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', patch.join(__dirname,'views'));
server.engine('mustache', mustache());

server.use(express.static(patch.join(__dirname, '../public')));

server.use(mainRouter);

server.use((req, res)=>{
    res.send("Página não encontrada");
})

//ROTAS

server.listen(process.env.PORT);