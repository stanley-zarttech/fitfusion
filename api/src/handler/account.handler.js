const accountService = require('../service/account.service');

const getAccountsHandler = (req, res) => {
    try {
        const accounts = accountService.getAllAccounts();
        return res.status(200).json(accounts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createAccountHandler = (req, res) => {
    try {
        const newAccount = accountService.createAccount(req.body);
        return res.status(201).json(newAccount);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateAccountHandler = (req, res) => {
    try {
        const updatedAccount = accountService.updateAccount(req.params.id, req.body);
        return res.status(200).json(updatedAccount);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const deleteAccountHandler = (req, res) => {
    try {
        const deletedAccount = accountService.deleteAccount(req.params.id);
        return res.status(200).json(deletedAccount);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAccountsHandler,
    createAccountHandler,
    updateAccountHandler,
    deleteAccountHandler,
};