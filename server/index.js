const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
 
app.use(cors());
app.use(express.json());

// Creating user account
app.post('/auth/create-user',async (req,res)=>{
    try{
       const {firstname,lastname,email,password,gender,jobrole,deparment,address}=req.body;
       const createUser = await pool.query("INSERT INTO employees (firstname,lastname,email,password,gender,jobrole,deparment,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[firstname,lastname,email,password,gender,jobrole,deparment,address]);
       res.json(createUser.rows[0]);
    }catch(err){
       console.log(err.message)
    }
})

// Signing in
app.post('/auth/signin',async (req,res)=>{
    try{
       const {email,password}=req.body;
       const createUser = await pool.query("INSERT INTO employees (email,password) VALUES ($1,$2) RETURNING *",[email,password]);
       res.json(createUser.rows[0]);
    }catch(err){
       console.log(err.message)
    }
})






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
