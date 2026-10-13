const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://paulegbeme3_db_user:paulegbeme3_db_user2010@cluster0.e7alg39.mongodb.net/"
).then(()=>{
  console.log('database connect sucessfully')
}).catch((error)=>{
    console.log(error)
})

const userSchema=new mongoose.schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
})

//const user model 

const user=mongoose.model('user',userSchema)

async function runExam(){
    try{

    }catch(error){
        console.log(error)
    }finally{
       await    mongoose.connection.close()
    }
}