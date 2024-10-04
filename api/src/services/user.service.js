const { writeFileSync, appendFileSync, existsSync, readFileSync } = require('node:fs');
const bcrypt = require('bcrypt'); // Added bcrypt for password hashing
const dbPath = './db/user.db';

// Signup function
const signUp = async (body) => {
    try {
        // Validate input
        if (!body.email || !body.password) {
            throw new Error('Email and password are required.');
        }

        // Hashing the password
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);

        // Generating the user ID
        body.id = (Math.random() * 10).toString(32).replace('.', '');
        console.log('body ', body);

        const exists = existsSync(dbPath);
        console.log('exists: ', exists);

        if (exists) {
            appendFileSync(dbPath, '\n' + JSON.stringify(body));
        } else {
            writeFileSync(dbPath, JSON.stringify(body));
        }

        return body;
    } catch (error) {
        console.log('Signup error: ', error.message);
    }
};

// SignIn function
const signIn = async (body) => {
    try {
        const { email, password } = body;

        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required.');
        }

        // Reading the database file content
        const db = readFileSync(dbPath, 'UTF-8');
        const users = db.split('\n');

        console.log('Db Content: ', email);
        let foundUser = null;

        // Iterate through all users to find matching email
        for (const user of users) {
            if (user.trim() === '') continue;

            const parsedUser = JSON.parse(user);
            console.log('found user email: ', parsedUser.email);

            if (parsedUser.email === email) {
                // Compare hashed password
                const isPasswordValid = await bcrypt.compare(password, parsedUser.password);
                if (isPasswordValid) {
                    console.log('user is found: ', parsedUser);
                    foundUser = parsedUser;
                } else {
                    console.log('Invalid password');
                }
                break;
            }
        }

        return foundUser;
    } catch (error) {
        console.log('Error signing in: ', error.message);
    }
};

module.exports = {
    signUp,
    signIn
};
