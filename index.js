require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/postSchema')
const app = express()
const port = 9001;
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/posts', async(req, res) => {
    try { 
        const Posts = await Post.find({});
        res.status(200).json(Posts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 

app.get('/', async(req, res) => {
  try { 
      res.status(200).json("Hello NodeJS");
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})




app.post('/posts', async(req, res) => {
    try {
        const product = await Post.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://nravikiran5:kkjdkawk@cluster0.dw93cvc.mongodb.net/?retryWrites=true&w=majority')
  .then(res => {
    console.log(`mogcoected`);
    app.listen(port, () => {
      console.log(`Server is runining now`)
    })
  })
  .catch(err => {
    console.log(err) 
  })















// let posts = [
//   {
//     userId: 1,
//     it: 1,
//     title: "are or do repels provide blacked out except option criticizes",
//     body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
//   },
//   {
//     userId: 1,
//     it: 2,
//     title: "who is being",
//     body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure, or any trouble to reject them; we shall not open to them; we shall not be able to do anything but nothing."
//   }
// ]