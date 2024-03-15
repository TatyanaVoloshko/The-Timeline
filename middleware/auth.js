let userLoggedIn = false

const checkUserLogin = (req, res, next) => {
    if (userLoggedIn) {
         next();
    } else {
        res.redirect("/auth/auth");
    }
   
}

module.exports = {
    checkUserLogin
}