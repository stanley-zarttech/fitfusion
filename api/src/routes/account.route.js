const express = require('express');
const router = express.Router();

const { getAccountsHandler, createAccountHandler, updateAccountHandler, deleteAccountHandler, } = require('../handler/account.handler.js');

router.get('/accounts', getAccountsHandler);

router.post('/accounts', createAccountHandler);

router.put('/accounts/:id', updateAccountHandler);

router.delete('/accounts/:id', deleteAccountHandler);

module.exports = router;