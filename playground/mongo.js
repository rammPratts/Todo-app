const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/AppTodo", { useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log("No se ha podido conectar a la base de datos");
    }
    console.log("Se ha podido conectar a la base de datos!");
    const db = client.db("AppTodo");

    // db.collection("Todos").insertOne({
    //     text: "Algo para hacer",
    //     completed: false
    // }, (err,result)=>{
    //     if(err){
    //         return console.log("No se ha podido insertar todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection("Users").insertOne({
        name: "Ramiro Meneses",
        age: 18,
        location: "Melo"
    }, (err, result) =>{
        if(err){
            return console.log("No se ha podido insertar el usuario",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});