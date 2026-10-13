const express=require('express')
const router=require('./routes/user')


const app=express()

app.use(express.json())
app.use(router)


app.listen(1000,()=>{
    console.log('server is running')
})
