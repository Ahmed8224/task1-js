//const t = require('express')

import express from 'express';

const app = express();
const students =[

{
    id: 1,
    name:"Ahmed",
    age:21,
},
{
    id: 2,
    name:"Yousra",
    age:22,
},
{
    id: 3,
    name:"mohamed",
    age:20,
},
]

const stfun = (req,res) =>{
let out ="<ul>";

for (let i=0; i<students.length; i++){

const student =students[i];

out += "<ui>"+student.name+"/ui>"
}

out += "</ul>"
res.send(out)

};

app.get ('/students',stfun)


app.listen(5000);