const http = require("http");
const mongo = require("mongoose");
mongo.connect(process.env.mongouri)
.then(() => console.log("Database connected ✔️ "))
.catch((err) => console.log(err));
const server = http.createServer( (req, res) => {
    console.log("New request received", req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.url === "/" || req.url === "/index.html"){
        const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
        const now = new Date();
        res.end();
    }else if (req.url === "/login"){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();});
        req.on("end", () => {
            try{
                const data = JSON.parse(body);
                const {username, password} = data;
                if (!username || !password){
                    res.writeHead(400, {"Content-Type": "application/json"});
                    return res.end(JSON.stringify({
                        success: false,
                        message: "Missing fields 😳"
                    }));
                }
            } catch{                                                                                                                                                                               
            }
        });
    }
});
server.listen(process.env.PORT || 8000, "0.0.0.0" , () => console.log("Server started successfully 🚀"));
