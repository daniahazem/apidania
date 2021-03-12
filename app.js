const express=require('express');
const app=express();
//import Routes
const postRoute=require('./routs/posts');
const userRoute=require('./routs/users');
app.use('posts',postRoute);
app.use('users',userRoute);
//middlewares
app.use('/posts',()=>{
    console.log('this is a middleware running');
});
//Routs
app.get('/',(req,res)=>{
    res.send('we are in app');
});
app.get('/posts',(req,res)=>{
    res.send('we are in post');
});
app.get('/users',(req,res)=>{
    res.send('we are in users');
});
app.listen(3000);