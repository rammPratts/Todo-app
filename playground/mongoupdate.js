const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/AppTodo", { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log("No se ha podido conectar a la base de datos");
    }
    console.log("Se ha podido conectar a la base de datos!");
    const db = client.db("AppTodo");

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b10e5d6e57553358016be2a")
    },{
        $set: {
            name: "Ramiro"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
        });

    //client.close();
});