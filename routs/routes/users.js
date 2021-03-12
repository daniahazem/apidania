const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('we are in users');
});

module.exports=router;