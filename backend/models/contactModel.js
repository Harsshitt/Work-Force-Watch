const {model , Schema} = require ('../connection');

const mySchema = new Schema( {
    name : {type :String , require :true},
    email : {type : String , require: true , unique: true}, 
    number : Number, 
    message : {type : String }, 
   
    
    createdAt : {type : Date , default: Date.now}
});

module.exports = model ('contact', mySchema);

