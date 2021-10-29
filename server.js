// import modules
const http = require("http")
const fs = require("fs")
const port = 3000
const server = http.createServer(
    // listener function
    (req, res) => {
        //-- assume ignore request
        //-- just respond with something
        res.statusCode = 200
        res.setHeaderCode("Content-Type", "text/html")
        res.end("<html><body>welcome t dit 1b06 nodejs demo</body></html>")

        // -- check request and respond accordingly
        if(req.method =="GET"){
            var fileURL = req.url

            if(req.url =="/") // default file is index.html
                fileURL = "/index.html"
            
            var filePath = path.resolve("./public" +fileURL)

            // if file exist?
            fs.exist(filePath, (exist)=>{
                if(!exist){
                    // show error page
                    fileURL = "/error.html"
                    filePath = path.resolve("./public" + fileURL)

                }else {
                    // file exist, respond with file
                    res.setHeaderCode = 200
                    res.setHeaderCode("Content-Type", "text/html")
                }
                fs.createReadStream(filePath).pipe(res)
            })
        }
    }

)

//-- make this server listen
server.listen(port, hostname, ()=>{
    console.log("Server started at http://${hostname}:${port}/")
})