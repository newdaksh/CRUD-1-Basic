const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users");



const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://octaldaksh:octal123@cluster0.5xt6n.mongodb.net/crud-1")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get('/getUser/:id', (req, res) => {
  const id = req.params.id

  UserModel.findById({_id : id})

  .then(user => res.json(user))

  .catch(err => res.json(err))
})


// API Endpoint to create user
app.post("/createUser", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const resp = await UserModel.create(req.body)

    res.status(200).json(resp)
  } catch (err) {
    console.error("Create User Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// getting all users
app.get("/", (req, res) => {
  UserModel.find({})

  .then(users => res.json(users))

  .catch(err => res.json(err))
})


//API endpoints for => updating user 
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id

  UserModel.findByIdAndUpdate({_id : id}, {
    name : req.body.name, 
    age : req.body.age, 
    email : req.body.email})

  .then(user => res.json(user))

  .catch(err => res.json(err))
})


// API Endpoint to delete user
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id

  UserModel.findByIdAndDelete({_id : id})

  .then(user => res.json(user))

  .catch(err => res.json(err))
})

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
