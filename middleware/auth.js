const jwt = require('jsonwebtoken')

const checkUserLogin = (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, 'a1a2a3', function (err, decoded) {
            if (err) {
                console.log("There is an issue with jwt");
                return res.redirect("/auth/auth");
            } else {
                res.locals.username = decoded.userInfo.username
                res.locals.email = decoded.userInfo.email
                console.log(decoded.userInfo.username)
                  next();
            }
        })
      
    } else {
        return res.redirect("/auth/auth");
    }
    
}

const authLogin = (req, res, next) => {
    if (!req.cookies.token) {
        next()
    } else {
        res.redirect("/")
    }
}

module.exports = {
    checkUserLogin,
    authLogin
}