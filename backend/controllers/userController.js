

const login = async (req,res) => {
    res.json({mssg: "login"});
}


const signup = async (req,res) => {
    res.json({mssg: "signup"});
}


module.exports = { signup, login };