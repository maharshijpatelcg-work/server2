console.log("deploy-render-server-2");

const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Rohan", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "anand", role: "student" },
  { id: 4, name: "maharshi", role: "core_leader" }
];

app.get("/", (req, res) => {
  res.send("Maharshi patel");
});

app.get("/route2", (req, res) => {
  res.send("Express server is running in route 2");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// app.get("/user/test/:user_id",(req, res)=>{
//     // console.log("list of users",one);
//     console.log(req.params);
//     res.status(200).json(users);
// })

// app.get("/user/test/:user_id/:user_name",(req, res)=>{
//     // console.log("list of users",one);
//     console.log(req.params);
//     res.status(200).json(users);
// })

app.get("/user/:test",(req,res)=>{
    console.log(req.params);
    console.log("first code");
    res.status(200).json(users);
})

app.get("/users/three",(req,res)=>{
    console.log(req.params);
    console.log("second code");
    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});



app.listen(2007, () => {
  console.log("Server started on port 2007");
});