var express= require("express")
let port=3001
let app=express()
var messagesController= require("./controllers/messages_controller")

app.use(express.json())

app.use(express.static(__dirname +'/../public/build'))






app.delete("/api/messages/:id", messagesController.delete)

app.put("/api/messages/:id", messagesController.update)

app.post("/api/messages",  messagesController.create)

app.get("/api/messages",  messagesController.read)
  

app.listen(port, ()=>{
    console.log("hello There")
  })