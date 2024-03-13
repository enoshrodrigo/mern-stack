const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());



app.get("/users", (req, res) => {
  controller.getUser((req,res,next) => {
    res.send();
  });
});



app.post("/createuser", (req, res) => {
  const id = req.query.id;
  controller.addUser( req.body,(callback) => {
 
  });
});


app.put("/updateuser", (req, res) => {  
    controller.updateId( req.body,(callback) => {
   res.send(callback);
    });
  });


  app.delete("/deleteuser", (req, res) => {
    const id = req.query.id;
    controller.deleteUser( req.body,(callback) => {
   res.send(callback);
    });
  });




module.exports = app;
