import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UsersModel from './models/users.js';  
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
// const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');




// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
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

  const allowedKeywords = [
    'pregnancy', 'delivery', 'baby', 'women', 'woman', 'mother', 'labour', 'labor', 'childbirth', 'period', 'fertility', 'menstruation', 'postpartum', 'breastfeeding' ,'ovulation','hi','hello'
  ];

  const lowerMessage = message.toLowerCase();

  const isRelated = allowedKeywords.some(keyword => lowerMessage.includes(keyword));

  if (!isRelated) {
    return res.json({ reply: "Topic not related to women's health, pregnancy, or delivery." });
  }

  try {
    const messages = [
      { role: "user", content: message }
    ];
    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: "llama-3.3-70b-versatile",
      messages: messages,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("AI Response:", response.data);
    res.json({
      reply: response.data.choices[0].message.content || "No response from AI."
    });
  } catch (error) {
    res.status(500).json({ error: 'Error processing request with AI' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

