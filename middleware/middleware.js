const {logData}=require('../controller/usercontroller')
const date=new Date().toLocaleTimeString()
const logger=async (req,res,next)=>{
  const data=` ADMIN ${req.method} method  was used  in ${req.url} at  ${date}`
  await logData(data) 
 next()
}

module.exports={logger}
