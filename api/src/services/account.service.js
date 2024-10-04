let accounts = []; // Initialize an array to hold accounts

const getAllAccounts = () => {
    return accounts;
};

const createAccount = (accountData) => {
    const newAccount = {
        id: accounts.length + 1,
        ...accountData, // Spread operator to include account data
        createdAt: new Date(), // Timestamp for account creation
    };
    accounts.push(newAccount);
    return newAccount;
};

const updateAccount = (id, updatedData) => {
    const accountIndex = accounts.findIndex((account) => account.id === parseInt(id));
    if (accountIndex === -1) {
        throw new Error(`Account with id ${id} not found`);
    }

    // Update the account with new data
    accounts[accountIndex] = {
        ...accounts[accountIndex], // Keep existing data
        ...updatedData, // Update with new data
    };
    return accounts[accountIndex];
};

const deleteAccount = (id) => {
    const accountIndex = accounts.findIndex((account) => account.id === parseInt(id));
    if (accountIndex === -1) {
        throw new Error(`Account with id ${id} not found`);
    }

    const deletedAccount = accounts.splice(accountIndex, 1)[0];
    return deletedAccount;
};

module.exports = {
    getAllAccounts,
    createAccount,
    updateAccount,
    deleteAccount,
};
