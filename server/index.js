const express = require('express');
const app = express();
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.x6brb0h.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected to DB'))
.catch((error)=>console.log('Error connecting to DB',error));

app.use(express.json()); //just like we did express.urlencoded earlier.It sends json that we send through routes to react.

const newsRoutes=require('./routes/news');
app.use(newsRoutes);

app.get('/',(req,res)=>{
	res.send('working');
});

app.listen(4000, () => {
	console.log('server started at port 4000');
});