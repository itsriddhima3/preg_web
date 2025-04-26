import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UsersModel from './models/users.js';  
import axios from 'axios';


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

app.post('/login',(req,res)=>{
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
  }).catch(err => res.json({ err }));
});

app.post('/api/grok', async (req, res) => {
  const { message } = req.body;
  try {
    const messages = [
      { role: "user", content: message }
    ];
    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: "llama-3.3-70b-versatile",
      messages: messages,
    }, {
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
      }
    });
    console.log("AI Response:", response.data); 
    // Send the response back to the frontend with 'reply' field
    res.json({
      reply: response.data.choices[0].message.content || "No response from AI."
    });
  } catch (error) {
    res.status(500).json({ error: 'Error processing request with AI' });
  }
});
// Start Server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

  // res.json({ reply: "Your processed message here" });

  
