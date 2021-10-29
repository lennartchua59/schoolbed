const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer(
    // listener function
    (req, res) => {
        //-- assume ignore request
        //-- just respond with something
        res.statusCode = 200
        res.setHeaderCode("Content-Type", "text/html")
        res.end("<html><body>welcome t dit 1b06 nodejs demo</body></html>")
    }
)

//-- make this server listen
server.listen(port, hostname, ()=>{
    console.log("Server started at http://${hostname}:${port}/")
})