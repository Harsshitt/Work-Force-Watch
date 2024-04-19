 // import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

const userRouter = require('./router/userRouter');
const employeeRouter = require('./router/employeeRouter');
const taskRouter = require('./router/taskRouter');
const contactRouter = require('./router/contactRouter');

// middleware

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/employee', employeeRouter);
app.use('/task', taskRouter);
app.use('/contact', contactRouter);

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
})

app.listen(port, () => { console.log('express server open') });