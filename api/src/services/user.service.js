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

        // Hash the password
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);

        // Generate a unique user ID
        body.id = (Math.random() * 10).toString(32).replace('.', '');
        console.log('body ', body);

        const exists = existsSync(dbPath);
        console.log('exists: ', exists);

        if (exists) {
            // Append to dbPath
            appendFileSync(dbPath, '\n' + JSON.stringify(body));
        } else {
            // Create and write to dbPath
            writeFileSync(dbPath, JSON.stringify(body));
        }

        return body; // Return the user object
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

        // Read the database file content
        const db = readFileSync(dbPath, 'UTF-8');
        const users = db.split('\n');

        console.log('Db Content: ', email);
        let foundUser = null;

        // Iterate through all users to find the one that matches the given email
        for (const user of users) {
            if (user.trim() === '') continue; // Skip empty lines

            const parsedUser = JSON.parse(user);
            console.log('found user email: ', parsedUser.email);

            // Check if the email matches
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

        return foundUser; // Return the matched user, or `null` if not found
    } catch (error) {
        console.log('Error signing in: ', error.message);
    }
};

// Export the functions
module.exports = {
    signUp,
    signIn
};
