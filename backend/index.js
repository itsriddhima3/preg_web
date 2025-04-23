
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UsersModel from './models/users.js';  

const app = express();
app.use(express.json());
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));



// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));
  
// Register Route
app.post('/register', (req, res) => {
    UsersModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json({ err }));
});

app.post('Login',(req,res)=>{
  const{email,password} =req.body;
  UsersModel.findOne({ email :email })
  .then(user=>{
    if (user ){
      if(user.password===password){
        res.json("success")}
      else{
        res.json("the password is incorrect")
      }
    }
    else{
      res.json("user not found")
    }
  })
})
// Start Server
app.listen(3001, () => {
    console.log('Server is running on port 5000');
  });
  
