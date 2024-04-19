const {model , Schema} = require ('../connection');

const mySchema = new Schema( {
    name : {type :String , require :true},  //
    employer : {type : String , ref: 'user'}, 
    email: {type : String},
    password : {type : String , require : true }, //
    avatar : {type : String , default: "placeholder.png"},
    designation : {type : String}, //
    shift : {type : String}, //
    createdAt : {type : Date , default: Date.now}
});

module.exports = model ('employee', mySchema);



