const mongoose = require ('mongoose');

const url = "mongodb+srv://harhit956584:harshit7905@harshit956584.33bnmff.mongodb.net/WorkForceWatch?retryWrites=true&w=majority&appName=Harshit956584"

mongoose.connect(url)

.then((result) => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;