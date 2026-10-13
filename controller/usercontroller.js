const database=require('../model/database.json')
const fs=require('fs')
const user=require('../model/users')
console.log(database)

const saveData= (data)=>{

  return new Promise((resolve, reject) => {
    fs.writeFile('./model/database.json', data,(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

const logData=(data)=>{
  return new Promise((resolve, reject) => {
    fs.appendFile('./model/logger.txt', `\n${data}`,(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })

}


const createUser= async (req,res)=>{
  const input=req.body
  const data={
    id:database.length-1 +2,
    name:input.name,
    gender:input.gender,
    email:input.email,
    Age:input.Age

  }
  user.create({
    name:data.name,
    email:data.email,
    gender:data.gender,
    Age:data.Age
  })

  database.push(data)
  await saveData(JSON.stringify(database,null,2))

  res.status(200).send('user created sucessfully')
}

const alluser=(req,res)=>{  
 const data=database 
 res.status(200).json(data)
}

const getUser=(req,res)=>{
  const input=req.params.id
  const user=database.find((el)=>{
   return  el.id==input
  })
  if(user===undefined){
   return  res.status(404).send('user not found')
  } else{
  res.status(200).json(user)
  }
}
const deleteUser=async (req,res)=>{
  const id=req.params.id
  const user=database.findIndex((el)=>{
  return  el.id==id
  })
  if(user===-1){
   return  res.status(404).send('user not found in the database')
  } else{
    database.splice(user,1)
  res.status(200).send('user have been deleted sucessfully')
  }
  await saveData(JSON.stringify(database,null,2))
}

const updateUser=async(req,res)=>{
  const id=req.params.id
  const request=req.body
  const user=database.find((el)=>{
    return el.id==id
  })
  if(user===undefined){
    return res.status(404).send('user not found')
  }
  const data={
    name:request.name,
    gender:request.gender
  }
  user.name=data.name||user.name
  user.gender=data.gender||user.gender
  
  await saveData(JSON.stringify(database,null,2))
  res.status(200).send('name has been updated')
}

module.exports={createUser,alluser,getUser,deleteUser,updateUser,logData}
