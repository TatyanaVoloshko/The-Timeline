const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const renderLoginPage = (req, res) => {
    res.render("auth", {
        err: "",
        loginErr: ""
    });
}

const signup = async (req, res) => {
    
    if (req.body.username === "" || req.body.email === "" || req.body.password === "" || req.body.confimPassword === "") {
        res.render("auth", {
            loginErr: "",
            err: "all fildes are required"
        })
    } else {
        if (req.body.password !== req.body.confimPassword) {
            res.render('auth', {
                err: "Passwords are not matching"
            })
        } else {
            let existUser = await userModel.findOne({ email: req.body.email })
            
            if (existUser) {
                res.render('auth', {
                    err: "User is already exist..."
                })
            } else {

                  let hashPassword = bcrypt.hashSync(req.body.password, 10);
                  console.log(hashPassword);

                  let userData = {
                    username: req.body.username,
                    email: req.body.email,
                    password: hashPassword,
                  };
                  let newUser = new userModel(userData);

                  newUser
                    .save()
                    .then(() => {
                      res.render("auth", {
                        err: "Thanks for register in our website, You can login now!",
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
            }

          
        }
    }
}

const login = async (req, res) => {
    if (req.body.email === "" || req.body.password === "") {
        res.render("auth", {
            err: "",
            loginErr: 'all fildes are required'
        })
    } else {
        let existUser = await userModel.findOne({ email: req.body.email });
        if (!existUser) {
            res.render("auth", {
                loginErr: "User is not exist you have to signup first!",
                err: "",
          });
        } else {
            let isPassMatch = bcrypt.compareSync(req.body.password, existUser.password)

            if (!isPassMatch) {
                res.render("auth", {
                    loginErr: "Wrong password!",
                    err: ""
                });
            } else {
            //    next step with JWT
                res.redirect('/')
            }
        }
    }
}

module.exports = {
    renderLoginPage,
    signup, 
    login
}