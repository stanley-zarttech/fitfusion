const { signUp } = require('../services/user.service');

const signUpHandler = async (req, res) => {
    const { body } = req;

    const result = signUp(body)
    res.json({ message: 'Signup is successful' })
}

const signInHandler = async (req, res) => {

}

module.exports = {
    signUpHandler, signInHandler

}