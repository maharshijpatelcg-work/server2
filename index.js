// console.log("deploy-render-server-2");

// const express = require("express");

// const app = express();

// const users = [
//   { id:1, name: "Mahi", role: "President" },
//   { id:2, name: "Maharshi", role: "Student" },
//   { id:3, name: "Dhruv", role: "student" },
//   { id:4, name: "Jhonty", role: "Vanguard" }
// ];

// app.get("/", (req, res) => {
//   res.send("Maharshi patel");
// });

// app.get("/route2", (req, res) => {
//   res.send("Express server is running in route 2");
// });

// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// app.get("/user/test/:users_id",(req, res)=>{
//     // console.log("list of users",one);
//     console.log(req.params);
//     res.status(200).json(users);
// })

// app.get("/user/test/:users_id/:user_name",(req, res)=>{
//     // console.log("list of users",one);
//     console.log(req.params);
//     res.status(200).json(users);
// })

// app.get("/user/:test",(req,res)=>{
//     console.log(req.params);
//     console.log("first code");
//     res.status(200).json(users);
// })

// app.get("/users/three",(req,res)=>{
//     console.log(req.params);
//     console.log("second code");
//     res.status(200).json(users);
// })

// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });



// app.listen(2007, () => {
//   console.log("Server started on port 2007");
// });

console.log("deploy-render-server-2");

const express = require("express");
const app = express();

// Sample users data
const users = [
  { id: 1, name: "Mahi", role: "President" },
  { id: 2, name: "Maharshi", role: "Student" },
  { id: 3, name: "Dhruv", role: "student" },
  { id: 4, name: "Jhonty", role: "Vanguard" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Maharshi patel");
});

// Test route
app.get("/route2", (req, res) => {
  res.send("Express server is running in route 2");
});

// 🔥 Get all users OR single user using query param
// Example: /users
// Example: /users?id=1
app.get("/users", (req, res) => {
  const { id } = req.query;

  if (id) {
    const user = users.find(u => u.id === Number(id));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  }

  res.status(200).json(users);
});

// Test route with params
app.get("/user/test/:users_id", (req, res) => {
  console.log(req.params);
  res.status(200).json(users);
});

// Test route with multiple params
app.get("/user/test/:user_name", (req, res) => {
  console.log(req.params);
  res.status(200).json(users);
});

// Generic param test route
app.get("/user/:test", (req, res) => {
  console.log(req.params);
  console.log("first code");
  res.status(200).json(users);
});

// Static route (must be above /users/:id)
app.get("/users/three", (req, res) => {
  console.log("second code");
  res.status(200).json(users);
});

app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

// 🔥 Get user by ID using route param
// Example: /users/1
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// Start server
app.listen(2007, () => {
  console.log("Server started on port 2007");
});
