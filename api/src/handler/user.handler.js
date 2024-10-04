const { signUp, signIn } = require('../services/user.service');

const signUpHandler = async (req, res) => {
    try {
        const { body } = req;

        // Await the result to ensure signUp completes before sending a response
        const result = await signUp(body);
        
        // Send a response indicating that signup was successful
        res.json({ message: 'Signup is successful', user: result });
    } catch (error) {
        // Handle any errors that occur during signup
        res.status(500).json({ error: error.message });
    }
}

const signInHandler = async (req, res) => {
    try {
        const { body } = req;

        // Await the result to ensure signIn completes before sending a response
        const result = await signIn(body);

        if (result) {
            res.json({ message: 'Sign-in is successful', user: result });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        // Handle any error that occur during signing in
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    signUpHandler,
    signInHandler
}