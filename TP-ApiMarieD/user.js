const express = require('express');
const router = express.Router();

class user {
    constructor (id,name,password){
        this.id = id;
        this.name = name;
        this.password = password;
    
    }
}
const users = [new user(1,'Mathis','test')];

router.get('/',(req,res) => { 
    res.send(users);
});

router.get ('/:id',(req,res) => {
    u = users.find(user => user.id == parseInt(req.params.userId))
    if(u === undefined){
        res.send(` User not find.`);
    }else{
        res.send(`One user with name : ${u.name}`);
    }
});

router.post('/:id/:name/:password',(req,res)=>{
    i = parseInt(req.param.id)
    while(users.find(user.id == i)!= undefined){
        i++
    }
    u = new user (i,req.params.id,req.params.password);
    users.push(u)
    res.send(`Nouvel utilisateur : ${test.name}`)

});
$
router.put('/:id/name/:name',(req,res)=>{
    u = users.find(user => user.id == parseInt(req.params.id));
    i = users.indexOf(u);
    users.splice(i,1, new user(u.id,u.name,req.params.password));
    res.send(`Nouveau Nom : ${req.params.name}`)
});



router.put('/:id/password/:password',(req,res)=>{
    u = users.find(user => user.id == parseInt(req.params.id));
    i = users.indexOf(u);
    users.splice(i,1, new user(u.id,u.name,req.params.password));
    res.send(`Nouveau password : ${req.params.password}`)
});

router.delete('/:id/',(req,res)=>{
    u = users.find(user => user.id == parseInt(req.params.id));
    i = users.indexOf(u);
    if(i==undefined){
        res.send('User not found')
    }else{
        users.splice(i, 1);
        res.send(users)
    }
});

module.exports =router;
