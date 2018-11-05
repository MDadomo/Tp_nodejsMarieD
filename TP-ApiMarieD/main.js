const app= require('express')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const user =require('./user');
app.use('/user',user);

//const item =require('./item');
//app.use('/item',item);

//const list =require('./list');
//app.use('/list',list);



const router = express.Router();

app.listen(9999, ()=>{
    console.log('App listening on port 9999')
})

