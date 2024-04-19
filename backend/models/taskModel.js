const {model , Schema} = require ('../connection');

const mySchema = new Schema( {
    name : {type :String , require :true},  //
    category : {type : String }, 
    employee:  {type: String},
    endDate:  Date,
    description: String,
    createdAt : {type : Date , default: Date.now}
});

module.exports = model ('task', mySchema);