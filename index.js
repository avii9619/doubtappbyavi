const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(express.json());
app.use(cors());

app.post("/save",(req,res)=>{

        const url="mongodb+srv://shindeavinash9619:dp2DSfu1qIHDGxU5@cluster0.imktbxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        const client=new MongoClient(url);
        const db=client.db("doubt25june24");
        const coll=db.collection("student");
        const record={"name":req.body.name,"doubt":req.body.doubt};
        coll.insertOne(record)
        .then(result=>res.send(result))
        .catch(error=>res.send(error));
});

app.listen(9000,()=>{console.log("ready to serve @9000");});