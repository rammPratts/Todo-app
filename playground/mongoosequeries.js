const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var id = "6b14c0cfe4540708d8e68c00d";


if(!ObjectID.isValid(id)){
    console.log("El ID no es válido");
}else{
    User.findById(id).then((user) => {
        if(!user){
            return console.log("No se ha encontrado un usuario con ese Id");
        }
        console.log("User by Id",user);
    });
}


// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log("Todos",todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo",todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log("Todo by id",todo);
// });

