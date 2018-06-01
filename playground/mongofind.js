const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/AppTodo", { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log("No se ha podido conectar a la base de datos");
    }
    console.log("Se ha podido conectar a la base de datos!");
    const db = client.db("AppTodo");

    db.collection("Users").find({name: "Ramiro"}).toArray().then(
        (docs)=>{
            console.log("Users: ");
            console.log(JSON.stringify(docs,undefined,2));
        }, (err) =>{
            console.log("No se pudo conseguir los usuarios",err);
        }
    );

    client.close();
});