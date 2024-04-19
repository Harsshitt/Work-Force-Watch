const {model , Schema} = require ('../connection');

const mySchema = new Schema( {
    fname : {type :String , require :true},
    lname : {type :String , require :true},
    email : {type : String , require: true , unique: true}, 
    number : Number,
    company: String, 
    message : {type : String }, 
   
    
    createdAt : {type : Date , default: Date.now}
});

module.exports = model ('contact', mySchema);

