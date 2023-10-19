const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require("body-parser");
const cors= require("cors");

const app =express();
 app.use(cors());
 app.use((bodyParser.json()));

const PORT = 8000;
const DB_URL= "mongodb://127.0.0.1:27017/StudntMS";
//const DB_URL="mongodb+srv://rdcvithana:rdc123@cluster0.tq5xpah.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

const studentsRouter = require("./routers/stRouter.js");
app.use("/stModel",studentsRouter);
