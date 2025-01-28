const {app} =require("./app") 
require("dotenv").config()



let port=process.env.PORT;

app.get("/test",async(req,res)=>{

    res.send("helloojjj.............")
})



app.listen(port,async()=>{

    try{
        console.log(`app is running on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
    
})