const express = require('express');
const router = express.Router();

import items from './items.js';
import user from './user.js';

class list {
    constructor (id,name,user,items){
        this.id = id;
        this.name = name;
        this.user = user;
        this.items = items;
    }
}
const lists = [new list(1,'Jordan',new user(1,'Liste','test'),new items(1,'Mathis','ww','google'))];

router.get('/',(req,res) => { 
    res.send(lists);
});

router.get ('/:id',(req,res) => {
    u = lists.find(list => list.id == parseInt(req.params.id))
    if(u === undefined){
        res.send(` List not find.`);
    }else{
        res.send(`List: ${u.name}`);
    }
});

router.post('/:id/',(req,res)=>{

    console.log();

    i = parseInt(req.params.id)
    while(itemsList.find(items => items.id ==i ) != undefined)
        i++
    u = new list(i,req.body.name,new user(req.body.user.id,req.body.user.name,req.body.user.password),
    new items(req.body.user.id,req.body.items.label,req.body.user.password))
    itemsList.push(u);
    res.send(`Nouvel item : ${u.label}`)

});

router.put('/:id/label/:label',(req,res)=>{
    u = itemsList.find(items.id == parseInt(req.params.id));
    i = itemsList.indexOf(u);

    itemsList.splice(i,1, new user(u.id,u.name,req.params.password));
    res.send(`Nouveau Nom : ${req.params.name}`)
});



router.put('/:id/label/:label',(req,res)=>{
    u = itemsList.find(items => items.id == parseInt(req.params.id));
    i = itemsList.indexOf(u);
    itemsList.splice(i,1, new items(u.id,req.params.label,u.image,u.description));
    res.send(`Nouveau label : ${req.params.label}`)
});

router.delete('/:id/',(req,res)=>{
    u = list.find(list => list.id == parseInt(req.params.id));
    i = lists.indexOf(u);
    if(i== -1){
        res.send('Item not found')
    }else{
        lists.splice(i, 1);
        res.send(users)
    }
});

module.exports =router;
