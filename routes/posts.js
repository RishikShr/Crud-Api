const express = require('express');
const Post = require('../models/Post');

const router = express.Router();


// Gets Back All the posts
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
    
});

//Submit the post
router.post('/',async (req,res)=>{
  const post = new Post({
        title: req.body.title,
        description: req.body.description
  });

 try{
  const savedPost= await post.save()   //Save in database
    //return promise
    res.json(savedPost);
 }catch(err){
     res.json({message:err});
 }
});


//SPecific post

router.get("/:postId",async (req,res)=>{
    try{
  const post  = await Post.findById(req.params.postId);
  res.send(json);
}
  catch(err){
      res.json({message:err});
  }
});

//Delete post

router.delete("/postId",async (req,res)=>{
    try{
  const removedPost = await Post.remove({_id:req.params.postId});
     res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

//Update a post 
router.patch("/postId" , async (req,res)=>{
    try{
        const updatePost = await Post.updateOne({_id:req.params.postId},
            { $set: { title: req.body.title } }
            );
            res.json(updatePost);
    }catch(err){ 
        res.json({message:err});
    }
});


module.exports = router;