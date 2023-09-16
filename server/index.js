const http = require("http");
const getCharById = require("./controllers/getCharById.js");
const cors = require("cors");
const PORT = 3001;



http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req
    console.log(`Llega la peticion de url: ${url}`)

    if(url.includes("/rickandmorty/character")) {
        const id = Number(url.split("/").pop())
        getCharById(res, id)
           
    } else {
        res.writeHead(400, {"Content-type": "application/json"})
        res.end(JSON.stringify({error: "Route not found"}))
    }
    
})
.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
