const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5050

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())
//mongodb+srv://BILLAH:wVH3xsEo6xmnaRPE@cluster0.clovof3.mongodb.net/?retryWrites=true&w=majority
mongoose
    .connect("mongodb://localhost:27017/mern-tgu-school-management-system"
     , {
        useNewUrlParser: true,
       useUnifiedTopology: true
       }
    )
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
     
    app.get("/",(req,res)=>{
        res.json({message:"server is running"})
 })
    
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})