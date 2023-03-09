
const Users = require("../Models/UserModel");
const bcrypt = require("bcryptjs");




//user registration with password encryption - user
const userRegistration = (req, res) => {
    let userData = {
      userName: req.body.userName,
      userEmail:req.body.userEmail,
      userContact:req.body.userContact,
      password: req.body.password,
      
    };
  
    Users.findOne({
     userName: req.body.userName,
    })
      .then((user) => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            Users.create(userData)
              .then((respond) => {
                res
                  .status(200)
                  .json({
                   status: true,
                    success: "Registered successfully",
                  })
                  .end();
              })
              .catch((err) => {
                res.status(200).json({
                  errorMessage: "Something went wrong!",
                  status: false,
                });
                console.log("error: " + err);
              });
          });
        } else {
          return res.status(200).json({
            errorMessage:
              "Your user name is already registered. Use another user name",
            status: false,
          });
        }
      })
      .catch((err) => {
        res.status(200).json({
          errorMessage: "Something went wrong!",
          status: false,
        });
        console.log("error: " + err);
      });
  };

  const userLogin = function (req, res) {
    Users.findOne({
      userName: req.body.userName,
      // password: req.body.password,
    })
      .then((user) => {
        if (user) {
          if (user.userName === req.body.userName) {
            // const payload = {
            //   _id: user._id,
            //   userID: user.userID,
            //   nicNo: user.nicNo,
            //   userName: user.userName,
            //   authorizedUser: user.authorizedUser
            // };
            // const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
            //   expiresIn: 1440,
            // });
            if(req.body.userName === "Perera"){
                return res.status(200).json({
                    status: true,
                    success: "Admin Login successfully",
                });
            }else{
                return res.status(200).json({
                    status: true,
                    success: "Login successfully",
                });
            }
  
           
          } else {
            return res.status(200).json({
              errorMessage: "User unauthorized!",
              status: false,
            });
          }
        } else {
          return res.status(200).json({
            errorMessage: "Your user name cannot be recognized",
            status: false,
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          errorMessage: "Something went wrong!",
          status: false,
        });
        console.log("error: " + err);
      });
  };
  module.exports = {
    userRegistration,
    userLogin,
  
  };
  