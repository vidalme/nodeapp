// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("servidor escutando na porta 3000!")
})

// server2.listen(PORT2,()=>{
//     console.log("servidor escutando na porta 3002!")
// })