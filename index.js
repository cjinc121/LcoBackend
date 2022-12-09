const express=require('express');
const app = express()
const PORT='4000';

app.get('/',(req,res)=>{
res.send('HElLo SIR!!')    
})
app.get('/bye',(req,res)=>{
    res.send('Bye SIR!!')    
    })
    app.post('/',(req,res)=>{
        res.send(`${req}`)
    })
app.listen(PORT,()=>{
    console.log(`Example app listening on ${PORT}`)
})
