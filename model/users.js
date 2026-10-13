const mongoose=require('mongoose');
// mongoose.connect("mongodb+srv://paulegbeme3_db_user:paulegbeme3_db_user2010@cluster0.e7alg39.mongodb.net/myApp")
// .then(()=>{
// console.log('connected sucessfuly')
// }).catch((error)=>{
//     console.log('connection failed',error.message)
// })

mongoose.connect("mongodb://localhost:27017/users").then(()=>{
console.log('connected sucessfuly')
}).catch((error)=>{
    console.log('connection failed',error.message)
})
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    Age:Number
})

const user=mongoose.model('newusers',UserSchema)

module.exports=user

// const newUser=async ()=>{
//     try{
//     // const users=await user.create({
//     //     name:'jose mounhrino',
//     //     email:'paulegbeme@gmail.com',
//     //     gender:'male',
//     //     Age:35
//     // })
    
//     const find=await user.find({name:'otele'})
//     console.log(find)

//     console.log(users)
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log('connection done')
// }
// }

// newUser()