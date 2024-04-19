const {model , Schema} = require ('../connection');

const mySchema = new Schema( {
    name : {type :String , require :true},
    email : {type : String , require: true , unique: true}, 
    password : {type : String , require : true },
    avatar : {type : String , default: "placeholder.png"},
    role : {type : String, default: 'user'},
    createdAt : {type : Date , default: Date.now}
});

module.exports = model ('user', mySchema);

