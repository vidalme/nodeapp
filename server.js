// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT1 = 3000;
// const PORT2 = 3002;

// const rotas1 = {
//     "/": "Curso de node.js!",
//     "/livros": "livros de node.js",
//     "/autores":"autores de livros de node.js"
// }

// const rotas2 = {
//     "/": "Curso de python!",
//     "/livros": "livros de python",
//     "/autores":"autores de livros de python"
// }

// const server1 = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas1[req.url]);
// });
// const server2 = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas2[req.url]);
// });

app.listen(PORT1,()=>{
    console.log("servidor escutando na porta 3000!")
})
// server2.listen(PORT2,()=>{
//     console.log("servidor escutando na porta 3002!")
// })