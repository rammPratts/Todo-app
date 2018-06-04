const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/AppTodo", { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log("No se ha podido conectar a la base de datos");
    }
    console.log("Se ha podido conectar a la base de datos!");
    const db = client.db("AppTodo");

    // db.collection("Users").deleteMany({name:"Ramiro"}).then((result)=>{
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({ _id: new ObjectID("5b10db20e57553358016bc3a")}).then((result)=>{
        console.log(result);
    });

    //client.close();
});