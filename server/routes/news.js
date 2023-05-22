const express=require('express');
const { findById, findByIdAndUpdate } = require('../models/news');
const router=express.Router();
const News=require('../models/news');

router.get('/api/news',async(req,res)=>{
 try {
  const newsPosts=await News.find();
 //sending data to react page
 res.status(200).json(newsPosts); 
 } catch (error) {
  res.status(400).json({
   info:error.message
  });
 }
});

router.post('/api/news',async(req,res)=>{
try {
  const newObj=new News({
  title:req.body.title,
  body:req.body.body,
  author:req.body.author
  });
  await newObj.save();
  res.status(200).json()
} catch (error) {
  res.status(400).json({
    info:error.message
   });
}
});

router.get('/api/news/:id',async(req,res)=>{
try {
  const newsPost =await findById(req.params.id);
  res.status(200).json(newsPost);

} catch (error) {
  res.status(400).json({
    info:error.message
   });
}
});

router.patch('/api/news/:id',async(req,res)=>{
  try {
    await findByIdAndUpdate(req.params.id,{
      title:req.body.title,
      body:req.body.body,
      author:req.body.author
    });
    res.status(200).json('ok');
  
  } catch (error) {
    res.status(400).json({
      info:error.message
     });
  }
  });

  router.delete('/api/news/:id',async(req,res)=>{
   try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json('ok');

   } catch (error) {
      res.status(400).json({
      info:error.message
     })
   }
  });

module.exports=router;