const express=require('express')
const router=express.Router()
const{createUser,alluser,getUser,deleteUser,updateUser}=require('../controller/usercontroller')
const{logger}=require('../middleware/middleware')
 
router.use(logger)

router.post('/createuser',createUser)
router.get('/alluser',alluser)
router.get('/getuser/:id',getUser)
router.delete('/deleteuser/:id',deleteUser)
router.patch('/updateuser/:id',updateUser)

module.exports=router